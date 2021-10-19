import {
    areaInitial,
    areaOptions,
    areaSound,
    buttonStart,
    divAreaAudio,
    divAreaButtonsSoundLetter,
    divButtonsSoundLetter,
    divPlayMusic,
    imagePlay
} from './elements.js';
import groupSounds from './groupSounds.js';

let start = false;

class ControlsApplication {
    constructor() {
        

        this._noteHit = null;
        this._storageGroupChosen = null;
        this._selectedGroup = null;
        this._indexGroupChosen = null;
        this._indexGroupSoundChosen = null;
        this._audio = new Audio();
        this._allSoundsChosen = [];
    }

    set noteHit(value) {
        this._noteHit = value;
    }

    get noteHit() {
        return this._noteHit;
    }
    
    set storageGroupChosen(value) {
        this._storageGroupChosen = value;
    }
    get storageGroupChosen() {
        return this._storageGroupChosen;
    }

    set selectedGroup(value) {
        this._selectedGroup = value;
    }
    get selectedGroup() {
        return this._selectedGroup;
    }

    set indexGroupChosen(value) {
        this._indexGroupChosen = value;
    }
    get indexGroupChosen()  {
        return this._indexGroupChosen
    }

    set indexGroupSoundChosen(value) {
        this._indexGroupSoundChosen = value;
    }
    get indexGroupSoundChosen() {
        return this._indexGroupSoundChosen;
    }

    set audio(value) {
        this._audio = value;
    }
    get audio() {
        return this._audio;
    }
    
    set allSoundsChosen(value) {
        this._allSoundsChosen = value;
    }
    get allSoundsChosen() {
        return this._allSoundsChosen;
    }

    drawControlsInitial() {
        for(let i of groupSounds) {
            areaOptions.innerHTML += `<li class="button-group">${i.name}</li>`
        }
    }

    loadSelectButtonGroup() {
        let buttonsGroup = window.document.querySelectorAll("li.button-group");

        for(let i = 0; i <= buttonsGroup.length; i++) {

            if(buttonsGroup[i] !== undefined) {
                buttonsGroup[i].onclick = ({ target }) => {
                    target.classList.toggle('selected');
                    groupSounds[i].selected = !groupSounds[i].selected;
                }
            }
        }
    }

    start() {
        buttonStart.onclick = ({ target }) => {
            target.classList.add("selected-start-button");

            setTimeout(() => {
                target.classList.remove("selected-start-button");
                
                areaInitial.style.opacity = "0";
                areaInitial.style.visibility = "hidden";
                
                setTimeout(() => {
                    areaInitial.style.display = "none";
                }, 300)
            }, 300)

            start = true;

            setTimeout(() => {
                this.loadChosenGroups();
                this.loadInterface();
            }, 800)
        }
    }

    loadChosenGroups() {
        this.storageGroupChosen = groupSounds.filter(group => group.selected === true);
    }

    randomNumber() {
        this.indexGroupChosen = Math.floor(Math.random() * this.storageGroupChosen.length);
        this.indexGroupSoundChosen = Math.floor(Math.random() * 6);
    }

    createAreaAudio() {
        divAreaAudio.setAttribute('id', 'area-audio');
        areaSound.appendChild(divAreaAudio);
    }

    createDivPlayMusic() {
        divPlayMusic.setAttribute('id', 'play-sound');
        divAreaAudio.appendChild(divPlayMusic);
    }

    createImagePlay() {
        imagePlay.src = "./assets/icons/icon-play.svg";
        imagePlay.setAttribute('alt', 'icon play sound')
        imagePlay.style.width = "35%";
        divPlayMusic.appendChild(imagePlay);
    }

    renderAudioAndEvent() {
        this.audio.src = this.storageGroupChosen[this.indexGroupChosen].sound[this.indexGroupSoundChosen].src;

        let timerDivPlayMusic

        divPlayMusic.onclick = () => {
            divPlayMusic.classList.add('jump-out');

            clearTimeout(timerDivPlayMusic);
            timerDivPlayMusic = setTimeout(() => {
                divPlayMusic.classList.remove('jump-out');
            }, 200);

            this.audio.play();
        }
    }

    renderButtonsSoundLetter() {
        divButtonsSoundLetter.setAttribute('id', 'area-button-sound');
        divAreaAudio.appendChild(divButtonsSoundLetter);
    }

    renderAreaButtonsSoundLetter() {
        divAreaButtonsSoundLetter.setAttribute('id', 'area-button-sound');
        divAreaAudio.appendChild(divAreaButtonsSoundLetter);
    }

    takeSoundsOutOfGroups() {
        this.storageGroupChosen.forEach(item => {
            this.allSoundsChosen.push(...item.sound);
        });
    }

    loadInterface() {
        this.randomNumber();
        this.createAreaAudio();
        this.createDivPlayMusic();
        this.createImagePlay();
        this.renderAudioAndEvent()
        this.renderAreaButtonsSoundLetter();
        this.takeSoundsOutOfGroups();

        let timerDivPlayMusic;

        this.allSoundsChosen.forEach((item, index) => {
            divAreaButtonsSoundLetter.innerHTML += `
            <div class="letter-sound" data-key="${index}">
                ${item.name}
            </div>`
        })

        const letterSoundChosen = window.document.querySelectorAll("div.letter-sound");

        let timerReturnStyleDivPlay;

        function returnStyleDivPlay() {
            clearTimeout(timerReturnStyleDivPlay);

            timerReturnStyleDivPlay = setTimeout(() => {
                divPlayMusic.style.backgroundColor = "var(--shimmering-blush)";

                imagePlay.src = "./assets/icons/icon-play.svg";
            }, 1500);
        }

        let timerNotes;

        letterSoundChosen.forEach(letter => {
            letter.onclick = event => {
                letter.classList.add('selected-note');
                
                clearTimeout(timerNotes);
                timerNotes = setTimeout(() => {
                    letter.classList.remove('selected-note');
                }, 300)
                
                let selectedNote = event.target.dataset.key;

                if(Number(selectedNote) === this.indexGroupSoundChosen) {
                    divPlayMusic.style.background = "#7bfa7b";
                    imagePlay.src = "./assets/icons/icon-note-correct.svg";
                    
                        this.noteHit = true;
                        
                        returnStyleDivPlay();
                    } else {
                        divPlayMusic.style.background = "#fa7b7b";
                        imagePlay.src = "./assets/icons/icon-note-wrong.svg";
                        divPlayMusic.classList.add('note-wrong');
                        
                        this.noteHit = false;

                        setTimeout(() => {
                            divPlayMusic.classList.remove('note-wrong');
                        }, 300);
                        
                        returnStyleDivPlay();
                }
            }
        })

        const buttonNextNote = window.document.createElement('button');
        buttonNextNote.setAttribute('id', 'button-next-note');
        buttonNextNote.innerText = "Próxima nota";
        divAreaAudio.appendChild(buttonNextNote);

        let oldSelectedNote = null;

        let timerButtonNextNote;

        buttonNextNote.onclick = () => {
            this.randomNumber();
            
            for(let i = 1; i <= 3; i++) {
                if(oldSelectedNote == this.indexGroupSoundChosen) {
                    this.randomNumber();
                } else {
                    break;
                }
            }
            
            oldSelectedNote = this.indexGroupSoundChosen;

            this.audio.src = this.allSoundsChosen[this.indexGroupSoundChosen].src;

            buttonNextNote.style.animation = "jump-out 200ms";

            clearTimeout(timerButtonNextNote);
            timerButtonNextNote = setTimeout(() => {
                buttonNextNote.style.animation = "";
            }, 300)
        };
    }
}

export default ControlsApplication;
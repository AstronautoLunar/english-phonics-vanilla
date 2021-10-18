let start = false;

class controlsApplication {
    constructor() {
        this._areaOptions = window.document.querySelector('ul#options');
        this._buttonStart = window.document.querySelector('button#button-play');
        this._areaInitial = window.document.querySelector('div#area-initial');
        this._areaSound = window.document.querySelector("div#area-sound");
        this._divAreaAudio = window.document.createElement('div');
        this._divButtonsSoundLetter = window.document.createElement('div');
        this._divPlayMusic = window.document.createElement('div');
        this._divAreaButtonsSoundLetter = window.document.createElement('div');

        this._noteHit = null;
        this._storageGroupChosen = null;
        this._selectedGroup = null;
        this._indexGroupChosen = null;
        this._indexGroupSoundChosen = null;
        this._audio = new Audio();
        this._allSoundsChosen = [];

        this._groups = [
            {
                name: 'group1',
                sound: [
                    {
                        name: 'a',
                        src: './assets/audios/group1/a.mp3',
                        alt: "audio sound a"
                    },
                    {
                        name: 'i',
                        src: './assets/audios/group1/i.mp3',
                        alt: "audio sound i"
                    },
                    {
                        name: 'n',
                        src: './assets/audios/group1/n.mp3',
                        alt: "audio sound n"
                    },
                    {
                        name: 'p',
                        src: './assets/audios/group1/p.mp3',
                        alt: "audio sound p"
                    },
                    {
                        name: 's',
                        src: './assets/audios/group1/s.mp3',
                        alt: "audio sound s"
                    },
                    {
                        name: 't',
                        src: './assets/audios/group1/t.mp3',
                        alt: "audio sound t"
                    },
                ],
                selected: false
            },
            {
                name: 'group2',
                sound: [
                    {
                        name: 'ck',
                        src: './assets/audios/group2/ck.mp3',
                        alt: "audio sound ck"
                    },
                    {
                        name: 'd',
                        src: './assets/audios/group2/d.mp3',
                        alt: "audio sound d"
                    },
                    {
                        name: 'e',
                        src: './assets/audios/group2/e.mp3',
                        alt: "audio sound e"
                    },
                    {
                        name: 'h',
                        src: './assets/audios/group2/h.mp3',
                        alt: "audio sound h"
                    },
                    {
                        name: 'm',
                        src: './assets/audios/group2/m.mp3',
                        alt: "audio sound m"
                    },
                    {
                        name: 'r',
                        src: './assets/audios/group2/r.mp3',
                        alt: "audio sound r"
                    },
                ],
                selected: false
            },
            {
                name: 'group3',
                sound: [
                    {
                        name: 'b',
                        src: './assets/audios/group3/b.mp3',
                        alt: "audio sound b"
                    },
                    {
                        name: 'f',
                        src: './assets/audios/group3/f.mp3',
                        alt: "audio sound f"
                    },
                    {
                        name: 'g',
                        src: './assets/audios/group3/g.mp3',
                        alt: "audio sound g"
                    },
                    {
                        name: 'l',
                        src: './assets/audios/group3/l.mp3',
                        alt: "audio sound l"
                    },
                    {
                        name: 'o',
                        src: './assets/audios/group3/o.mp3',
                        alt: "audio sound o"
                    },
                    {
                        name: 'u',
                        src: './assets/audios/group3/u.mp3',
                        alt: "audio sound u"
                    },
                ],
                selected: false
            },
            {
                name: 'group4',
                sound: [
                    {
                        name: 'ai',
                        src: './assets/audios/group4/ai.mp3',
                        alt: "audio sound ai"
                    },
                    {
                        name: 'ee',
                        src: './assets/audios/group4/ee.mp3',
                        alt: "audio sound ee"
                    },
                    {
                        name: 'ie',
                        src: './assets/audios/group4/ie.mp3',
                        alt: "audio sound ie"
                    },
                    {
                        name: 'j',
                        src: './assets/audios/group4/j.mp3',
                        alt: "audio sound j"
                    },
                    {
                        name: 'oa',
                        src: './assets/audios/group4/oa.mp3',
                        alt: "audio sound oa"
                    },
                    {
                        name: 'or',
                        src: './assets/audios/group4/or.mp3',
                        alt: "audio sound or"
                    },
                ],
                selected: false
            },
            {
                name: 'group5',
                sound: [
                    {
                        name: 'ng',
                        src: './assets/audios/group5/ng.mp3',
                        alt: "audio sound ng"
                    },
                    {
                        name: 'oo-strong',
                        src: './assets/audios/group5/oo-strong.mp3',
                        alt: "audio sound oo-strong"
                    },
                    {
                        name: 'oo',
                        src: './assets/audios/group5/oo.mp3',
                        alt: "audio sound oo"
                    },
                    {
                        name: 'v',
                        src: './assets/audios/group5/v.mp3',
                        alt: "audio sound v"
                    },
                    {
                        name: 'w',
                        src: './assets/audios/group5/w.mp3',
                        alt: "audio sound w"
                    },
                    {
                        name: 'z',
                        src: './assets/audios/group5/z.mp3',
                        alt: "audio sound z"
                    },
                ],
                selected: false
            },
            {
                name: 'group6',
                sound: [
                    {
                        name: 'ch',
                        src: './assets/audios/group6/ch.mp3',
                        alt: "audio sound ch"
                    },
                    {
                        name: 'sh',
                        src: './assets/audios/group6/sh.mp3',
                        alt: "audio sound sh"
                    },
                    {
                        name: 'th-blow',
                        src: './assets/audios/group6/th-blow.mp3',
                        alt: "audio sound th-blow"
                    },
                    {
                        name: 'th',
                        src: './assets/audios/group6/th.mp3',
                        alt: "audio sound th"
                    },
                    {
                        name: 'x',
                        src: './assets/audios/group6/x.mp3',
                        alt: "audio sound x"
                    },
                    {
                        name: 'y',
                        src: './assets/audios/group6/y.mp3',
                        alt: "audio sound y"
                    },
                ],
                selected: false
            },
            {
                name: 'group7',
                sound: [
                    {
                        name: 'ar',
                        src: './assets/audios/group7/ar.mp3',
                        alt: "audio sound ar"
                    },
                    {
                        name: 'er',
                        src: './assets/audios/group7/er.mp3',
                        alt: "audio sound er"
                    },
                    {
                        name: 'oi',
                        src: './assets/audios/group7/oi.mp3',
                        alt: "audio sound oi"
                    },
                    {
                        name: 'ou',
                        src: './assets/audios/group7/ou.mp3',
                        alt: "audio sound ou"
                    },
                    {
                        name: 'qu',
                        src: './assets/audios/group7/qu.mp3',
                        alt: "audio sound qu"
                    },
                    {
                        name: 'ue',
                        src: './assets/audios/group7/ue.mp3',
                        alt: "audio sound ue"
                    },
                ],
                selected: false
            },
        ]
    }

    get areaOptions() {
        return this._areaOptions;
    }
    get buttonStart() {
        return this._buttonStart;
    }
    get areaInitial() {
        return this._areaInitial;
    }
    get areaSound() {
        return this._areaSound;
    }
    get divAreaAudio() {
        return this._divAreaAudio;
    }
    get divButtonsSoundLetter() {
        return this._divButtonsSoundLetter;
    }
    get divPlayMusic() {
        return this._divPlayMusic;
    }
    get divAreaButtonsSoundLetter() {
        return this._divAreaButtonsSoundLetter;
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

    get groups() {
        return this._groups;
    }

    drawControlsInitial() {
        for(let i of this.groups) {
            this.areaOptions.innerHTML += `<li class="button-group">${i.name}</li>`
        }
    }

    loadButtonGroup() {
        let buttonsGroup = window.document.querySelectorAll("li.button-group");

        for(let i = 0; i <= buttonsGroup.length; i++) {

            if(buttonsGroup[i] !== undefined) {
                buttonsGroup[i].onclick = ({ target }) => {
                    target.classList.toggle('selected');
                    this.groups[i].selected = !this.groups[i].selected;
                }
            }
        }
    }

    start() {
        this.buttonStart.onclick = ({ target }) => {
            target.classList.add("selected-start-button");

            setTimeout(() => {
                target.classList.remove("selected-start-button");
                
                this.areaInitial.style.opacity = "0";
                this.areaInitial.style.visibility = "hidden";
                
                setTimeout(() => {
                    this.areaInitial.style.display = "none";
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
        this.storageGroupChosen = this.groups.filter(group => group.selected === true);
    }

    randomNumber() {
        this.indexGroupChosen = Math.floor(Math.random() * this.storageGroupChosen.length);
        this.indexGroupSoundChosen = Math.floor(Math.random() * 6);
    }

    renderAreaAudio() {
        this.divAreaAudio.setAttribute('id', 'area-audio');
        this.areaSound.appendChild(this.divAreaAudio);
    }

    createDivPlayMusic() {
        this.divPlayMusic.setAttribute('id', 'play-sound');
        this.divAreaAudio.appendChild(this.divPlayMusic);
    }

    createImagePlay() {
        const imagePlay = new Image();
        imagePlay.src = "./assets/icons/icon-play.svg";
        imagePlay.setAttribute('alt', 'icon play sound')
        imagePlay.style.width = "35%";
        this.divPlayMusic.appendChild(imagePlay);
    }

    renderAudioAndEvent() {
        this.audio.src = this.storageGroupChosen[this.indexGroupChosen].sound[this.indexGroupSoundChosen].src;

        let timerDivPlayMusic

        this.divPlayMusic.onclick = () => {
            this.divPlayMusic.classList.add('jump-out');

            clearTimeout(timerDivPlayMusic);
            timerDivPlayMusic = setTimeout(() => {
                this.divPlayMusic.classList.remove('jump-out');
            }, 200);

            this.audio.play();
        }
    }

    renderButtonsSoundLetter() {
        divButtonsSoundLetter.setAttribute('id', 'area-button-sound');
        this.divAreaAudio.appendChild(divButtonsSoundLetter);
    }

    renderAreaButtonsSoundLetter() {
        this.divAreaButtonsSoundLetter.setAttribute('id', 'area-button-sound');
        this.divAreaAudio.appendChild(this.divAreaButtonsSoundLetter);
    }

    // takeSoundsOutOfGroups() {
    //     console.log(this.storageGroupChosen);
    //     this.storageGroupChosen.forEach(item => {
    //         this.allSoundsChosen.push(...item.sound);
    //     });
    // }

    loadInterface() {
        this.randomNumber();
        this.renderAreaAudio();
        this.createDivPlayMusic();
        this.createImagePlay();
        this.renderAudioAndEvent()
        this.renderAreaButtonsSoundLetter();
        this.takeSoundsOutOfGroups();

        let timerDivPlayMusic;



        for(let i in this.storageGroupChosen) {
            divButtonsSoundNote.innerHTML += `<div class="sound-chosen" data-key="${i}">${chosenSounds[i].name}</div>`
        }

        const notes = window.document.querySelectorAll("div.sound-chosen");

        let timerReturnStyleDivPlay;

        function returnStyleDivPlay() {
            clearTimeout(timerReturnStyleDivPlay);

            timerReturnStyleDivPlay = setTimeout(() => {
                divPlayMusic.style.backgroundColor = "var(--shimmering-blush)";

                imagePlay.src = "./assets/icons/icon-play.svg";
            }, 1500);
        }

        let timerNotes;

        notes.forEach(note => {
            note.onclick = event => {
                note.classList.add('selected-note');
                
                clearTimeout(timerNotes);
                timerNotes = setTimeout(() => {
                    note.classList.remove('selected-note');
                }, 300)
                
                selectedNote = event.target.dataset.key;

                if(selectedNote == soundChosenPlayIndex) {
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
        this.divAreaAudio.appendChild(buttonNextNote);

        let oldSelectedNote = null;

        let timerButtonNextNote;

        buttonNextNote.onclick = () => {
            randomNumber();
            
            for(let i = 1; i <= 3; i++) {
                if(oldSelectedNote == soundChosenPlayIndex) {
                    randomNumber();
                } else {
                    break;
                }
            }
            
            oldSelectedNote = soundChosenPlayIndex;

            this.audio.src = chosenSounds[soundChosenPlayIndex].src;

            buttonNextNote.style.animation = "jump-out 200ms";

            clearTimeout(timerButtonNextNote);
            timerButtonNextNote = setTimeout(() => {
                buttonNextNote.style.animation = "";
            }, 300)
        };
    }
}


window.addEventListener('keypress', function (e) {
    if (e.key == 'a') {
        let x = new Audio('sounds/01 - JavaScript Drum Kit_sounds_boom.wav')
        x.play()
        this.document.querySelectorAll('div')[0].classList.add('playing')
        setTimeout(() => {
            this.document.querySelectorAll('div')[0].classList.remove('playing')
        }, 100);
    } else if (e.key == 's') {
        let x = new Audio('sounds/01 - JavaScript Drum Kit_sounds_clap.wav')
        x.play()
        this.document.querySelectorAll('div')[1].classList.add('playing')
        setTimeout(() => {
            this.document.querySelectorAll('div')[1].classList.remove('playing')
        }, 100);
    } else if (e.key == 'd') {
        let x = new Audio('sounds/01 - JavaScript Drum Kit_sounds_kick.wav')
        x.play()
        this.document.querySelectorAll('div')[2].classList.add('playing')
        setTimeout(() => {
            this.document.querySelectorAll('div')[2].classList.remove('playing')
        }, 100);
    } else if (e.key == 'f') {
        let x = new Audio('sounds/01 - JavaScript Drum Kit_sounds_openhat.wav')
        x.play()
        this.document.querySelectorAll('div')[3].classList.add('playing')
        setTimeout(() => {
            this.document.querySelectorAll('div')[3].classList.remove('playing')
        }, 100);
    } else if (e.key == 'g') {
        let x = new Audio('sounds/01 - JavaScript Drum Kit_sounds_boom.wav')
        x.play()
        this.document.querySelectorAll('div')[4].classList.add('playing')
        setTimeout(() => {
            this.document.querySelectorAll('div')[4].classList.remove('playing')
        }, 100);
    } else if (e.key == 'h') {
        let x = new Audio('sounds/01 - JavaScript Drum Kit_sounds_ride.wav')
        x.play()
        this.document.querySelectorAll('div')[5].classList.add('playing')
        setTimeout(() => {
            this.document.querySelectorAll('div')[5].classList.remove('playing')
        }, 100);
    } else if (e.key == 'j') {
        let x = new Audio('sounds/01 - JavaScript Drum Kit_sounds_snare.wav')
        x.play()
        this.document.querySelectorAll('div')[6].classList.add('playing')
        setTimeout(() => {
            this.document.querySelectorAll('div')[6].classList.remove('playing')
        }, 100);
    } else if (e.key == 'k') {
        let x = new Audio('sounds/01 - JavaScript Drum Kit_sounds_tom.wav')
        x.play()
        this.document.querySelectorAll('div')[7].classList.add('playing')
        setTimeout(() => {
            this.document.querySelectorAll('div')[7].classList.remove('playing')
        }, 100);
    } else if (e.key == 'l') {
        let x = new Audio('sounds/01 - JavaScript Drum Kit_sounds_tink.wav')
        x.play()
        this.document.querySelectorAll('div')[8].classList.add('playing')
        setTimeout(() => {
            this.document.querySelectorAll('div')[8].classList.remove('playing')
        }, 100);
    }
})
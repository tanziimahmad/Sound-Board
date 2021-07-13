let sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(function (playSound) {
    let rashik = document.createElement('button');
    rashik.classList.add('btn');
    rashik.innerHTML = playSound;
    

    rashik.addEventListener('click', function () {
        stopSongs();
        document.getElementById(playSound).play();
        
        
    })


    
document.body.appendChild(rashik);
})

function stopSongs() {
    sounds.forEach((sound) => {
        let song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
}


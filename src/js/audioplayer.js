document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const currentTimeDisplay = document.getElementById("currentTime");
    const durationDisplay = document.getElementById("duration");

    playPauseBtn.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'inline';
        } else {
            audio.pause();
            playIcon.style.display = 'inline';
            pauseIcon.style.display = 'none';
        }
    });

    audio.addEventListener("timeupdate", function() {
        const minutes = Math.floor(audio.currentTime / 60);
        const seconds = Math.floor(audio.currentTime % 60);
        currentTimeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    });

    audio.addEventListener("loadedmetadata", function() {
        const minutes = Math.floor(audio.duration / 60);
        const seconds = Math.floor(audio.duration % 60);
        durationDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    });
});

// Loading
document.addEventListener('click', function() {
    const loadingElement = document.querySelector('.loading');
    if (loadingElement) {
        loadingElement.classList.add('hidden');

        setTimeout(() => {
            loadingElement.style.display = 'none';
        }, 1000);
    }

    const audio = document.getElementById("audio");
    if (audio) {
        audio.play();
    }

    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        profileCard.style.opacity = '1';
        profileCard.style.transform = 'translateY(0)';
    }
});

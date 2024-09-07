document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const buttonIcon = document.getElementById('buttonIcon');
    const backgroundContainer = document.getElementById('background-container');
    const profileCard = document.querySelector('.profile-card');
    const githubIcon = document.querySelector('.github');
    const tgIcon = document.querySelector('.tg');
    const discordIcon = document.querySelector('.discord');
    const statusText = document.querySelector('.status'); // выбираем элемент с классом status

    let isNight = true;

    function updateButtonAndBackground() {
        buttonIcon.classList.remove('show');
        setTimeout(() => {
            if (isNight) {
                buttonIcon.src = './static/nightbutton.png';
                backgroundContainer.style.backgroundImage = "url('./none-static/night.gif')";
                profileCard.style.backgroundColor = '#0d0d0d';
                githubIcon.style.backgroundImage = "url('https://image.difoon.fun/src/image/github.png')";
                tgIcon.style.backgroundImage = "url('https://image.difoon.fun/src/image/TELEGRAM.png')";
                discordIcon.style.backgroundImage = "url('https://image.difoon.fun/src/image/DISCORD.png')";
                statusText.style.color = '#ffffff'; // Белый цвет текста для ночного режима
            } else {
                buttonIcon.src = './static/daybutton.png';
                backgroundContainer.style.backgroundImage = "url('./none-static/day.gif')";
                profileCard.style.backgroundColor = '#ffffff';
                githubIcon.style.backgroundImage = "url('https://image.difoon.fun/src/image/dayGITHUB.png')";
                tgIcon.style.backgroundImage = "url('https://image.difoon.fun/src/image/dayTELEGRAM.png')";
                discordIcon.style.backgroundImage = "url('https://image.difoon.fun/src/image/dayDISCORD.png')";
                statusText.style.color = '#000000'; // Чёрный цвет текста для дневного режима
            }
            buttonIcon.classList.add('show');
        }, 300);
    }

    toggleButton.addEventListener('click', function() {
        isNight = !isNight;
        updateButtonAndBackground();
    });

    updateButtonAndBackground();
});

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = 'DIFOON | Да ёмаё. Куда ушёл?';
    } else {
        document.title = 'DIFOON | Ошибка';
    }
});


(function detectDevTools() {
    let opened = false;

    const devtools = {
        isOpen: false,
        orientation: undefined
    };

    const threshold = 160;
    const emitEvent = (isOpen, orientation) => {
        if (isOpen !== devtools.isOpen || orientation !== devtools.orientation) {
            devtools.isOpen = isOpen;
            devtools.orientation = orientation;
            if (isOpen) {
                document.title = 'И зачем тебе Dev-tools? Как бы сайт на гитхабе лежит...';
            } else {
                document.title = 'DIFOON | Ошибка';
            }
        }
    };

    const checkDevTools = () => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        const orientation = widthThreshold ? 'vertical' : 'horizontal';

        if (!(heightThreshold && widthThreshold) &&
            ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)) {
            emitEvent(true, orientation);
        } else {
            emitEvent(false, undefined);
        }
    };

    setInterval(checkDevTools, 1);
})();

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.BIO').forEach(function(button) {
            button.addEventListener('click', function() {
                window.open('https://difoon.fun/', '_blank');
            });
        });

        document.querySelectorAll('.PHOTOS').forEach(function(button) {
            button.addEventListener('click', function() {
                window.open('https://icons.difoon.fun/', '_blank');
            });
        });

        document.querySelectorAll('.PROJECT').forEach(function(button) {
            button.addEventListener('click', function() {
                window.open('https://project.difoon.fun', '_blank');
            });
        document.querySelectorAll('.Donate').forEach(function(button) {
                button.addEventListener('click', function() {
                    window.open('https://www.donationalerts.com/r/difoon', '_blank');
            });
        });
    });
});


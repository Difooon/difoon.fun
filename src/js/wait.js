    window.onload = function() {
        const waitElement = document.querySelector('.wait');
        waitElement.style.display = 'flex'; 

        setTimeout(() => {
            waitElement.style.transition = 'opacity 1s ease';
            waitElement.style.opacity = '0'; 
        }, 3000);

        setTimeout(() => {
            waitElement.style.display = 'none'; 
        }, 4000); 
    };

// Dynamic title

document.addEventListener('DOMContentLoaded', (event) => {
    const originalTitle = "@DIFOON"; // Name for dynamic title
    let currentIndex = 1; // Start from the second character
    let titleDirection = 1;

    function changeTitle() {
        document.title = originalTitle.substring(0, currentIndex);
        currentIndex += titleDirection;

        if (currentIndex > originalTitle.length) {
            titleDirection = -1;
            currentIndex -= 1;
        } else if (currentIndex < 2) { // Ensure we don't go below the first character
            titleDirection = 2;
            currentIndex = 2;
        }

        setTimeout(changeTitle, 500); // Adjust the speed by changing the timeout value
    }

    changeTitle();
});
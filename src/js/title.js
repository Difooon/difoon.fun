let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "DIFOON | Вернись :("; 
})

window.addEventListener("focus", () => {
    document.title = docTitle;
})
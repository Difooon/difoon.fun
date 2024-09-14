document.addEventListener('DOMContentLoaded', () => {
    const text1 = 'Hello! I am difoon';
    const text2 = 'the site developed for my bio :>';
    let p1 = 0, p2 = 0;
    const cont1 = document.querySelector('.js--text-cont1');
    const cont2 = document.querySelector('.js--text-cont2');

    function printSmbl1() {
        const timeout = Math.round(Math.random() * 200);
        cont1.innerHTML += text1[p1];
        p1++;
        if (p1 < text1.length) {
            setTimeout(printSmbl1, timeout);
        } else {
            setTimeout(deleteSmbl1, 3000);
        }
    }

    function deleteSmbl1() {
        const timeout = Math.round(Math.random() * 200);
        cont1.innerHTML = cont1.innerHTML.slice(0, -1);
        if (cont1.innerHTML.length > 0) {
            setTimeout(deleteSmbl1, timeout);
        } else {
            p2 = 0;
            setTimeout(printSmbl2, 1000);
        }
    }

    function printSmbl2() {
        const timeout = Math.round(Math.random() * 200);
        cont2.innerHTML += text2[p2];
        p2++;
        if (p2 < text2.length) {
            setTimeout(printSmbl2, timeout);
        } else {
            setTimeout(deleteSmbl2, 3000);
        }
    }

    function deleteSmbl2() {
        const timeout = Math.round(Math.random() * 200);
        cont2.innerHTML = cont2.innerHTML.slice(0, -1);
        if (cont2.innerHTML.length > 0) {
            setTimeout(deleteSmbl2, timeout);
        } else {
            p1 = 0;
            setTimeout(printSmbl1, 1000);
        }
    }

    setTimeout(printSmbl1, 100);
});

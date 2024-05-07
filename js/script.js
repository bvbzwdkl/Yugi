const rainingPercentages = document.querySelector('.raining-percentages');

function createPercentage() {
    const percentage = document.createElement('div');
    percentage.classList.add('percentage');
    percentage.textContent = `${Math.floor(Math.random() * 801) + 100}%`;
    percentage.style.left = `${Math.random() * window.innerWidth}px`;
    rainingPercentages.appendChild(percentage);

    setTimeout(() => {
        percentage.remove();
    }, 2000);
}

setInterval(createPercentage, 200);

function Marquee(selector, speed) {
    const parent = document.querySelector(selector);
    const clone = parent.innerHTML;
    let i = 0;
    parent.innerHTML += clone;

    setInterval(() => {
        i += speed;
        if (i >= parent.children[0].clientWidth) i = 0;
        parent.children[0].style.marginLeft = `-${i}px`;
    }, 0);
}

function Marquee2(selector, speed) {
    const parent = document.querySelector(selector);
    const clone = parent.innerHTML;
    let i = parent.children[0].clientWidth;
    parent.innerHTML += clone + clone;
    const totalWidth = parent.children[0].clientWidth * 2;
    setInterval(() => {
        i -= speed;
        if (i <= 0) i = totalWidth;
        parent.children[0].style.marginLeft = `-${i}px`;
    }, 0);
}

window.addEventListener('load', () => {
    Marquee('.marquee', .5);
    Marquee2('.marquee2', .5);
});
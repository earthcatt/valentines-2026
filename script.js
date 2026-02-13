const noBtn = document.querySelector('.nobutton');
const yesBtn = document.querySelector('.yesbutton');
const cry = document.querySelector('.cry');
const smile = document.querySelector('.smile');
const audio = document.querySelector('.audio');
const audio2 = document.querySelector('.audio2');
const audio3 = document.querySelector('.audio3');


noBtn.addEventListener('mouseenter', () => {
    noBtn.style.position = 'absolute';
    noBtn.style.top = Math.random() * (window.innerHeight - noBtn.offsetHeight) + 'px';
    noBtn.style.left = Math.random() * (window.innerWidth - noBtn.offsetWidth) + 'px';
    cry.style.display = 'block';
    smile.style.display = 'none';
    audio.currentTime = 0;
    audio.play();
});
yesBtn.addEventListener('click', () => {
    smile.style.display = 'block';
    cry.style.display = 'none';
    audio3.currentTime = 0;
    audio2.currentTime = 0;
    audio3.play();
    audio2.play();
});
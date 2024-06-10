const numsEl = document.querySelectorAll('.num');
const secHandEl = document.querySelector('.hand.sec');
const minHandEl = document.querySelector('.hand.min');
const hourHandEl = document.querySelector('.hand.hour');

numsEl.forEach((numEl, idx) => numEl.style.transform = `rotate(${(idx + 1) * 30}deg)`);

let i = 0;
setInterval(() => (secHandEl.style.transform = `rotate(${(i*6)+90}deg) translate(-50%, -50%)`, minHandEl.style.transform = `rotate(${(Math.floor(i/60)*6)+90}deg) translate(-50%, -50%)`, hourHandEl.style.transform = `rotate(${(Math.floor(i/3600)*6)+90}deg) translate(-50%, -50%)`, i+=1), 1000);
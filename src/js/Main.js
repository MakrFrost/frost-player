// import PlayMusic from './Components/PlayMusic';

const audio = new Audio();

const trackCard = document.getElementsByClassName('catalog__item');
// const buttonPlay = document.querySelector('.player__icon-play');
const buttonPause = document.querySelector('.player__icon-pause');
console.log(buttonPause);

buttonPause.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    buttonPause.classList.remove('player__icon-play');
    console.log('udalili');
  } else {
    audio.pause();
    buttonPause.classList.add('player__icon-play');
    console.log('dobavili');
  }
});

for (const track of trackCard) {
  track.addEventListener('click', () => console.log('zapuskaem'));
}

// const PlayMusic = url => {
//   console.log((audio.src = url));
//   console.log(audio.load());
//   console.log(audio.play());
//   console.log('нажал на кнопку плэй');
// };

// buttonPlay.addEventListener('click', () => {
//   PlayMusic('');
// });

// console.log('rabotaem player');

// 25 05

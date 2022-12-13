// import PlayMusic from './Components/PlayMusic';

const audio = new Audio();

const trackCard = document.getElementsByClassName('catalog__item');
const buttonPause = document.querySelector('.player__controller-paused');
const buttonPlay = document.querySelector('.player__controller-play');
const buttonStop = document.querySelector('.player__controller-stop');

buttonPause.addEventListener('click', () => {
  PlayerControllers();
});
for (const track of trackCard) {
  track.addEventListener('click', PlayMusic);
}
buttonStop.addEventListener('click', () => {
  console.log('вы стопанули музыку');
});

function PlayMusic(e) {
  //   audio.src = e.currentTarget;
  //   console.log(e.currentTarget);
  //   audio.play();
  console.log('запустили музыку');
}
function PlayerControllers() {
  if (audio.paused) {
    buttonPlay.classList.remove('player__icon-play');
    console.log('запустили музыку');
    audio.play();
  } else {
    buttonPlay.classList.add('player__icon-play');
    console.log('остановили музыку');
    audio.pause();
  }
}

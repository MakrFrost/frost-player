// import PlayMusic from './Components/PlayMusic';

const audio = new Audio();

const trackCard = document.getElementsByClassName('catalog__item');
const buttonPause = document.querySelector('.player__controller-paused');
const buttonPlay = document.querySelector('.player__controller-play');
const buttonStop = document.querySelector('.player__controller-stop');
const playerBar = document.querySelector('.player');

for (const track of trackCard) {
  track.addEventListener('click', PlayMusic);
}
buttonPause.addEventListener('click', () => {
  PlayerControllers();
});
buttonStop.addEventListener('click', StopMusic);

function PlayMusic(e) {
  for (const track of trackCard) {
    track.classList.remove('catalog__active');
  }
  audio.src = e.currentTarget;
  audio.play();
  playerBar.classList.add('player-active');
  buttonPlay.classList.remove('player__icon-play');
  e.currentTarget.classList.add('catalog__active');
  console.log('вы открыли плеер, и запустили музыку');
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
function StopMusic(e) {
  console.log('вы остановили музыку и скрыли плеер');
  audio.src = '';
  playerBar.classList.remove('player-active');
  for (const track of trackCard) {
    track.classList.remove('catalog__active');
  }
}

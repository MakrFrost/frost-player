// import PlayMusic from './Components/PlayMusic';

const audio = new Audio();

const buttonPlay = document.querySelector('.player__icon-play');

buttonPlay.addEventListener('click', () => {
  PlayMusic('./2.mp3');
});

const PlayMusic = url => {
  audio.src = url;
  audio.play();
  console.log('нажал на кнопку плэй');
};

// 11:49 stop

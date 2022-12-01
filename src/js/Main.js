// import PlayMusic from './Components/PlayMusic';

const audio = new Audio();

const buttonPlay = document.querySelector('.player__icon-play');

const PlayMusic = url => {
  console.log((audio.src = url));
  console.log(audio.load());
  console.log(audio.play());
  console.log('нажал на кнопку плэй');
};

buttonPlay.addEventListener('click', () => {
  PlayMusic('/1.mp3');
});

// 11:49 stop

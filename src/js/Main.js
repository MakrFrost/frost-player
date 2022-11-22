// import PlayMusic from './Components/PlayMusic';

const audio = new Audio();

const buttonPlay = document.querySelector('.catalog__item');

buttonPlay.addEventListener('click', () => {
  PlayMusic('../audio/Adele - Hello.mp3');
});

function PlayMusic(url) {
  audio.src = url;
  audio.play();
  console.log('нажал на лишку плэй');
}

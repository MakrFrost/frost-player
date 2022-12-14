// import PlayMusic from './Components/PlayMusic';
// import dataMusic from './dataMusic';
// console.log(dataMusic);

const audio = new Audio();

const catalogList = document.querySelector('.catalog__list');
const trackCard = document.getElementsByClassName('catalog__item');
const buttonPause = document.querySelector('.player__controller-paused');
const buttonPlay = document.querySelector('.player__controller-play');
const buttonStop = document.querySelector('.player__controller-stop');
const playerBar = document.querySelector('.player');

buttonPause.addEventListener('click', PlayerControlPause);
buttonStop.addEventListener('click', StopMusic);

function PlayerControlPause() {
  const activeTrack = document.querySelector('.catalog__active');

  if (audio.paused) {
    audio.play();
    buttonPlay.classList.remove('player__icon-play');
    activeTrack.classList.remove('catalog__pause');

    console.log('запустили музыку');
  } else {
    audio.pause();
    buttonPlay.classList.add('player__icon-play');
    activeTrack.classList.add('catalog__pause');

    console.log('остановили музыку');
  }
}
function PlayMusic(e) {
  for (const track of trackCard) {
    track.classList.remove('catalog__active');
  }
  const activeTrack = e.currentTarget;

  if (activeTrack.classList.contains('catalog__active')) {
    PlayerControlPause();
    return;
  }

  audio.src = activeTrack;
  audio.play();
  playerBar.classList.add('player-active');
  buttonPlay.classList.remove('player__icon-play');
  activeTrack.classList.add('catalog__active');
  console.log('вы открыли плеер, и запустили музыку');
  activeTrack.addEventListener('click', () => {
    console.log('paused');
  });
}
function StopMusic() {
  console.log('вы остановили музыку и скрыли плеер');
  audio.src = '';
  playerBar.classList.remove('player-active');
  for (const track of trackCard) {
    track.classList.remove('catalog__active');
  }
}
function addHandlerPlay() {
  for (const track of trackCard) {
    track.addEventListener('click', PlayMusic);
  }
}

// !
// function createMusicItem(data) {
//   const musicItem = data.map(music => {
//     return `      <li class="catalog__item">
//         <button class="catalog__button">
//           <div class="catalog__wrap">
//             <img
//               class="catalog__img"
//               src="${music.poster}"
//               alt="Photo Album"
//             />
//           </div>
//           <div class="catalog__track">
//             <p class="catalog__name">${music.artist}</p>
//             <p class="catalog__group">${music.track}</p>
//           </div>
//         </button>
//       </li>`;
//   });
//   musicItem.forEach(markupMusic => {
//     catalogList.insertAdjacentHTML('beforeend', markupMusic);
//   });
// }
// function renderCatalog(music) {
//   catalogList.innerHTML = '';
//   const listCards = music.map(createMusicItem);
// }

function initSession() {
  // renderCatalog(dataMusic);
  addHandlerPlay();
}
initSession();

// 35 45

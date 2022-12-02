// CSS
import '../assets/css/normalize.css';
import '../assets/css/reset.css';
import '../assets/css/style.css';

// JS
import gameController from './controllers/gameController';

(() => {
  const welcomeSection = document.querySelector('.welcome');
  const formPlayer = document.querySelector('#form-player');
  const playerNameInput = formPlayer.querySelector('#player-name');
  const formMessage = formPlayer.querySelector('.form-message');
  let playerName;

  // *remove error messages
  playerNameInput.addEventListener('keydown', () => {
    if (formMessage.classList.contains('disabled') === false) {
      formMessage.classList.add('disabled');
    }
  });

  // *get player name
  formPlayer.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (
      playerNameInput.value === undefined ||
      playerNameInput.value.trim().length === 0
    ) {
      formMessage.classList.remove('disabled');
      return undefined;
    }

    playerName = playerNameInput.value;
    formPlayer.reset();
    welcomeSection.classList.add('disabled');
    return undefined;
  });
})();

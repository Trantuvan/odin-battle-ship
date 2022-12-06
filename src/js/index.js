// CSS
import '../assets/css/normalize.css';
import '../assets/css/reset.css';
import '../assets/css/style.css';

// JS
import placeshipView from './views/placeShipView';
import gameController from './controllers/gameController';

(() => {
  const welcomeSection = document.querySelector('.welcome');
  const formPlayer = document.querySelector('#form-player');
  const playerNameInput = formPlayer.querySelector('#player-name');
  const formMessage = formPlayer.querySelector('.form-message');
  const placeShip = document.querySelector('.place-ship');

  gameController.init();

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

    gameController.createPlayer(playerNameInput.value);
    const { player1 } = gameController;
    welcomeSection.classList.add('disabled');
    placeShip.classList.remove('disabled');
    placeshipView.render({
      player: player1,
      playerGrid: gameController.grid1,
      playerFleet: gameController.fleet1,
    });
    formPlayer.reset();
    return undefined;
  });
})();

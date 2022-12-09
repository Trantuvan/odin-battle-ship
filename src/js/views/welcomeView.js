import placeshipView from './placeShipView';
import gameController from '../controllers/gameController';
import gameTitleImg from '../../assets/img/game-title.png';

export default (function welcomeView() {
  function addDomEvent(
    welcomeSection,
    formPlayer,
    playerNameInput,
    formMessage,
    placeShip
  ) {
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
  }

  const render = () => {
    const welcome = document.querySelector('.welcome');

    welcome.innerHTML = `
    <div class="welcome-header">
        <img src="${gameTitleImg}" alt="game title" />
    </div>
    <div class="welcome-body">
        <form id="form-player">
            <div class="form-action">
                <label for="player-name">ENTER PLAYER NAME</label>
                <input
                    type="text"
                    name="playerName"
                    id="player-name"
                    placeholder="BATTLESHIP COMBATANT"
                />
                <span class="form-message disabled">name required</span>
            </div>
            <div class="form-action">
                <button type="submit">START GAME</button>
            </div>
        </form>
    </div>
    `;

    const welcomeSection = document.querySelector('.welcome');
    const formPlayer = document.querySelector('#form-player');
    const playerNameInput = formPlayer.querySelector('#player-name');
    const formMessage = formPlayer.querySelector('.form-message');
    const placeShip = document.querySelector('.place-ship');

    gameController.init();

    addDomEvent(
      welcomeSection,
      formPlayer,
      playerNameInput,
      formMessage,
      placeShip
    );
  };

  return {
    render,
  };
})();

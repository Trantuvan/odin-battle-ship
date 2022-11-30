// CSS
import '../assets/css/normalize.css';
import '../assets/css/reset.css';
import '../assets/css/style.css';

// JS
import gameController from './controllers/gameController';

(() => {
  const game = gameController();
  game.init();
})();

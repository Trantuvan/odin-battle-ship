import gameController from './controllers/gameController';

(() => {
  const game = gameController();
  game.init();
})();

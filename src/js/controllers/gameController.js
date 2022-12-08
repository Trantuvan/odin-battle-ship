import player from '../models/player';
import board from '../models/board';
import ship from '../models/ship';

export default (function gameController() {
  let player1;
  let cpuPlayer;
  let grid1;
  let cpuGrid;
  let fleet1;
  let cpuFleet;

  function createPlayer(playerName = '') {
    player1 = player({ name: playerName.trim() });
  }

  function init() {
    cpuPlayer = player({ name: 'cpu', isAI: true });
    // *2. create 2 grids
    grid1 = board();
    cpuGrid = board();
    // *3. create 2 fleets
    fleet1 = [
      ship({ name: 'carrier', type: 0, size: 5 }),
      ship({ name: 'battle ship', type: 1, size: 4 }),
      ship({ name: 'destroyer', type: 2, size: 3 }),
      ship({ name: 'submarine', type: 3, size: 3 }),
      ship({ name: 'patrol boat', type: 4, size: 2 }),
    ];
    cpuFleet = [
      ship({ name: 'carrier', type: 0, size: 5 }),
      ship({ name: 'battle ship', type: 1, size: 4 }),
      ship({ name: 'destroyer', type: 2, size: 3 }),
      ship({ name: 'submarine', type: 3, size: 3 }),
      ship({ name: 'patrol boat', type: 4, size: 2 }),
    ];
    // *4. placeShip into board.grid
    cpuGrid.placeAxis('horizontal')({
      type: cpuFleet[2].type,
      size: cpuFleet[2].size,
    })('G0');
    cpuGrid.placeAxis('vertical')({
      type: cpuFleet[0].type,
      size: cpuFleet[0].size,
    })('F2');
    cpuGrid.placeAxis('horizontal')({
      type: cpuFleet[1].type,
      size: cpuFleet[1].size,
    })('B4');
    cpuGrid.placeAxis('vertical')({
      type: cpuFleet[4].type,
      size: cpuFleet[4].size,
    })('B7');
    cpuGrid.placeAxis('horizontal')({
      type: cpuFleet[3].type,
      size: cpuFleet[3].size,
    })('F9');
  }

  function isPlayerWin() {
    const isAllSunk = cpuFleet.every((item) => item.isSunk() === true);
    if (isAllSunk === true) {
      return true;
    }
    return false;
  }
  function isCpuWin() {
    const isAllSunk = fleet1.every((item) => item.isSunk() === true);
    if (isAllSunk === true) {
      return true;
    }
    return false;
  }

  function cpuPlay() {
    const data = {
      isWin: false,
      isHit: false,
      isMiss: false,
      isSunk: false,
      ship: undefined,
      coord: '',
    };

    // // *1. check wins
    // if (isCpuWin() === true) {
    //   data.isWin = true;
    //   return data;
    // }

    // *2. generateMove
    const coord = cpuPlayer.generateCoord();
    data.coord = coord;

    // *3 not wins yet, allow to shoot
    try {
      const result = grid1.receiveAttack(coord);

      if (result.message === 'miss') {
        data.isMiss = true;
        return data;
      }

      // *3. hit cpu ship
      if (result.message === 'hit') {
        fleet1[result.shipType].hit();
        data.isHit = true;
      }

      if (fleet1[result.shipType].isSunk() === true) {
        data.isSunk = true;
        data.ship = fleet1[result.shipType];
      }
    } catch (error) {
      return error;
    }
    return data;
  }

  function playerPlay(playerMove) {
    const data = {
      isWin: false,
      isHit: false,
      isMiss: false,
      isSunk: false,
      ship: undefined,
    };

    // // *1 check if player is win & return immediately
    // if (isPlayerWin() === true) {
    //   data.isWin = true;
    //   return data;
    // }

    // *2 not wins yet, allow to shoot
    try {
      const result = cpuGrid.receiveAttack(playerMove);

      if (result.message === 'miss') {
        data.isMiss = true;
        return data;
      }

      if (result.message === 'hit') {
        // *3. hit cpu ship
        cpuFleet[result.shipType].hit();
        data.isHit = true;
      }

      if (cpuFleet[result.shipType].isSunk() === true) {
        data.isSunk = true;
        data.ship = cpuFleet[result.shipType];
      }
    } catch (error) {
      return error;
    }

    return data;
  }

  return {
    get grid1() {
      return grid1;
    },
    get fleet1() {
      return fleet1;
    },
    get player1() {
      return player1;
    },
    get cpuPlayer() {
      return cpuPlayer;
    },
    isCpuWin,
    isPlayerWin,
    createPlayer,
    init,
    playerPlay,
    cpuPlay,
  };
})();

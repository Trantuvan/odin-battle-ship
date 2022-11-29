import player from '../models/player';
import board from '../models/board';
import ship from '../models/ship';

export default function gameController() {
  let player1;
  let cpuPlayer;
  let grid1;
  let cpuGrid;
  let fleet1;
  let cpuFleet;

  function init() {
    // *1. create 2 players
    player1 = player({ name: 'van' });
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

    grid1.placeAxis('horizontal')({
      type: fleet1[0].type,
      size: fleet1[0].size,
    })('C1');
    grid1.placeAxis('vertical')({
      type: fleet1[1].type,
      size: fleet1[1].size,
    })('A2');
    grid1.placeAxis('vertical')({
      type: fleet1[2].type,
      size: fleet1[2].size,
    })('J7');
    grid1.placeAxis('horizontal')({
      type: fleet1[3].type,
      size: fleet1[3].size,
    })('F8');
    grid1.placeAxis('horizontal')({
      type: fleet1[4].type,
      size: fleet1[4].size,
    })('A9');
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
    // *1. check wins
    if (isCpuWin() === true) {
      return `${cpuPlay.name} wins`;
    }

    // *2. generateMove
    const coord = cpuPlayer.generateCoord();

    // *3 not wins yet, allow to shoot
    try {
      const result = grid1.receiveAttack(coord);

      if (result.message === 'miss') {
        // *render miss
      }

      // *3. render hit
      // *4. hit cpu ship
      fleet1[result.shipType].hit();
    } catch (error) {
      if (error.message === 'illegal shot') {
        // TODO: dom not allow this play
        return error;
      }
    }
    return undefined;
  }

  function playerPlay(playerMove) {
    // *1 check if player is win
    if (isPlayerWin() === true) {
      return `${player1.name} wins`;
    }

    // *2 not wins yet, allow to shoot
    try {
      const result = cpuGrid.receiveAttack(playerMove);

      if (result.message === 'miss') {
        // *render miss
      }

      // *3. render hit
      // *4. hit cpu ship
      cpuFleet[result.shipType].hit();
    } catch (error) {
      if (error.message === 'illegal shot') {
        // TODO: dom not allow this play
        return error;
      }
    }

    return undefined;
  }

  return {
    init,
    playerPlay,
    cpuPlay,
  };
}

import PubSub from 'pubsub-js';
import getRandomInt from '../utils/getRandomInt';

export default function player(name) {
  let isAI = false;

  function generateCoord() {
    const column = 'ABCDEFGHIJ';
    const randomRow = getRandomInt(0, 9);
    const randomCol = column[getRandomInt(0, column.length - 1)];

    return `${randomCol}${randomRow}`;
  }

  function shoot(coord) {
    if (isAI === true) {
      const coordAI = generateCoord();
      PubSub.publish('player.shoot', coordAI);
    } else {
      PubSub.publish('player.shoot', coord);
    }
  }

  return {
    get name() {
      return name;
    },
    set isAI(bool) {
      isAI = bool;
    },
    shoot,
  };
}

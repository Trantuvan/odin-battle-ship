/* eslint-disable no-plusplus */
import PubSub from 'pubsub-js';
import shuffle from '../utils/shuffle';

export default function player({ name, isAI = false } = {}) {
  function generateCoord() {
    let AIMoves = [];
    const columnLetters = 'ABCDEFGHIJ';

    for (let col = 0; col <= columnLetters.length - 1; col++) {
      for (let row = 0; row <= 9; row++) {
        AIMoves.push(`${columnLetters[col]}${row}`);
      }
    }
    AIMoves = shuffle(AIMoves);

    return AIMoves.pop();
  }

  function shoot(coord) {
    if (isAI === true) {
      const coordAI = generateCoord();
      if (coordAI !== undefined) {
        PubSub.publish('player.shoot', coordAI);
      }
    } else {
      PubSub.publish('player.shoot', coord);
    }
  }

  return {
    get name() {
      return name;
    },
    shoot,
  };
}

/* eslint-disable no-plusplus */
import PubSub from 'pubsub-js';
import shuffle from '../utils/shuffle';

export default function player({ name, isAI = false } = {}) {
  function generateCoord() {
    let AIMoves = [];
    const columnLetters = 'ABCDEFGHIJ';

    // *generate all 100 moves from 10x10 grid
    for (let col = 0; col <= columnLetters.length - 1; col++) {
      for (let row = 0; row <= 9; row++) {
        AIMoves.push(`${columnLetters[col]}${row}`);
      }
    }
    // * shuffle all elements in array to create random moves
    AIMoves = shuffle(AIMoves);

    // *return last move in array, this will ensure no same move return
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

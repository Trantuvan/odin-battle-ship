import shuffle from './shuffle';
/* eslint-disable no-plusplus */
export default function generateAIMoves() {
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
  return AIMoves;
}

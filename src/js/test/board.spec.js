import board from '../models/board';

describe('board', () => {
  it('should create 2d 10x10 array', () => {
    const expected = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));
    const actual = board().grid;

    expect(actual).toEqual(expected);
  });

  it('should horizontally place ship type carrier at "F2"', () => {
    const initBoard = board();
    const carrier = { type: 0, size: 5 };
    const expected = [
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, 0, 0, 0, 0, 0],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ];
    initBoard.placeAxis('horizontal')(carrier)('F2');

    const actual = initBoard.grid;
    expect(actual).toEqual(expected);
  });

  it('should error out ship cannot be fit when place carrier horizontally at "G2"', () => {
    const initBoard = board();
    const carrier = { type: 0, size: 5 };
    const expected = /^ship cannot be fit$/;
    const actual = () => initBoard.placeAxis('horizontal')(carrier)('G2');

    expect(actual).toThrow(expected);
  });

  it.only('should horizontally place 2nd ship type Patrol Boat at "D2"', () => {
    const initBoard = board();
    const carrier = { type: 0, size: 5 };
    const patrolBoat = { type: 4, size: 2 };
    const expected = [
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, 4, 4, 0, 0, 0, 0, 0],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ];
    initBoard.placeAxis('horizontal')(carrier)('F2');
    initBoard.placeAxis('horizontal')(patrolBoat)('D2');

    const actual = initBoard.grid;

    expect(actual).toEqual(expected);
  });
});

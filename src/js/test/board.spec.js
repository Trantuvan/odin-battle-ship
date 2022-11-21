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
    const actual = initBoard.grid;
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

    expect(actual).toEqual(expected);
  });
});

import board from '../models/board';

describe('board', () => {
  it('should create 2d 10x10 array', () => {
    const expected = Array(10)
      .fill(null)
      .map((_) => Array(10).fill(null));
    const actual = board().grid;

    expect(actual).toEqual(expected);
  });

  it('should horizontally place ship type carrier at "F2"', () => {
    const initBoard = board();
    const carrier = { type: 0, size: 5 };
    const actual = initBoard.grid;
    const expected = initBoard.placeAxis('horizontal')(carrier)('F2');

    expect(actual).toEqual(expected);
  });
});

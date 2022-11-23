import board from '../models/board';

describe('board', () => {
  it('should create 2d 10x10 array', () => {
    const expected = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));
    const actual = board().grid;

    expect(actual).toEqual(expected);
  });

  describe('placeAxis', () => {
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

    it('should horizontally place 2nd ship type Patrol Boat at "D2"', () => {
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

    it('should error out ship cannot be fit when place 2nd patrolBoat horizontally overlay 1st carrier', () => {
      const initBoard = board();
      const carrier = { type: 0, size: 5 };
      const patrolBoat = { type: 4, size: 2 };
      const expected = /^ship cannot be fit$/;
      initBoard.placeAxis('horizontal')(carrier)('C4');
      const actual = () => initBoard.placeAxis('horizontal')(patrolBoat)('B4');

      expect(actual).toThrow(expected);
    });

    it('should error out ship cannot be fit when place 2nd patrolBoat at "J4"', () => {
      const initBoard = board();
      const carrier = { type: 0, size: 5 };
      const patrolBoat = { type: 4, size: 2 };
      const expected = /^ship cannot be fit$/;
      initBoard.placeAxis('horizontal')(carrier)('C4');
      const actual = () => initBoard.placeAxis('horizontal')(patrolBoat)('J4');

      expect(actual).toThrow(expected);
    });

    it('should vertically place ship type carrier at "F2"', () => {
      const initBoard = board();
      const carrier = { type: 0, size: 5 };
      const actual = initBoard.grid;
      const expected = [
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, 0, null, null, null, null],
        [null, null, null, null, null, 0, null, null, null, null],
        [null, null, null, null, null, 0, null, null, null, null],
        [null, null, null, null, null, 0, null, null, null, null],
        [null, null, null, null, null, 0, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ];
      initBoard.placeAxis('vertical')(carrier)('F2');

      expect(actual).toEqual(expected);
    });

    it('should error out ship cannot be fit when place carrier vertically at "G6"', () => {
      const initBoard = board();
      const carrier = { type: 0, size: 5 };
      const expected = /^ship cannot be fit$/;
      const actual = () => initBoard.placeAxis('vertical')(carrier)('G6');

      expect(actual).toThrow(expected);
    });

    it('should vertically place 2nd ship type Patrol Boat at "F0"', () => {
      const initBoard = board();
      const carrier = { type: 0, size: 5 };
      const patrolBoat = { type: 4, size: 2 };
      const expected = [
        [null, null, null, null, null, 4, null, null, null, null],
        [null, null, null, null, null, 4, null, null, null, null],
        [null, null, null, null, null, 0, null, null, null, null],
        [null, null, null, null, null, 0, null, null, null, null],
        [null, null, null, null, null, 0, null, null, null, null],
        [null, null, null, null, null, 0, null, null, null, null],
        [null, null, null, null, null, 0, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ];
      initBoard.placeAxis('vertical')(carrier)('F2');
      initBoard.placeAxis('vertical')(patrolBoat)('F0');

      const actual = initBoard.grid;

      expect(actual).toEqual(expected);
    });

    it('should error out ship cannot be fit when place 2nd patrolBoat vertically overlay 1st carrier', () => {
      const initBoard = board();
      const carrier = { type: 0, size: 5 };
      const patrolBoat = { type: 4, size: 2 };
      const expected = /^ship cannot be fit$/;
      initBoard.placeAxis('vertical')(carrier)('C4');
      const actual = () => initBoard.placeAxis('vertical')(patrolBoat)('C3');

      expect(actual).toThrow(expected);
    });
  });
});

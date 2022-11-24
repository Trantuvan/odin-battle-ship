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

  describe('receiveAttack', () => {
    const initBoard = board();
    const carrier = { type: 0, size: 5 };
    const battleShip = { type: 1, size: 4 };
    const destroyer = { type: 2, size: 3 };
    const submarine = { type: 3, size: 3 };
    const patrolBoat = { type: 4, size: 2 };

    beforeAll(() => {
      // * place ship
      initBoard.placeAxis('horizontal')(destroyer)('G0');
      initBoard.placeAxis('vertical')(carrier)('F2');
      initBoard.placeAxis('horizontal')(battleShip)('B4');
      initBoard.placeAxis('vertical')(patrolBoat)('B7');
      initBoard.placeAxis('horizontal')(submarine)('F9');
    });

    it('legal shot miss at "G4"', () => {
      expect.assertions(2);

      const actualMessage = initBoard.receiveAttack('G4');
      const expectedData = { message: 'miss', shipType: null };

      const actualGridValue = initBoard.grid[4][6];
      const expectedGridValue = 'miss';

      expect(actualGridValue).toMatch(expectedGridValue);
      expect(actualMessage).toEqual(expectedData);
    });

    it('legal shot hit at "I0"', () => {
      expect.assertions(2);

      const actualMessage = initBoard.receiveAttack('I0');
      const expectedData = { message: 'hit', shipType: 2 };

      const actualGridValue = initBoard.grid[0][8];
      const expectedGridValue = 'hit';

      expect(actualGridValue).toMatch(expectedGridValue);
      expect(actualMessage).toEqual(expectedData);
    });

    it('should error out illegal shot at "I0"', () => {
      const actual = () => initBoard.receiveAttack('I0');
      const expected = /^illegal shot$/;

      expect(actual).toThrow(expected);
    });
  });
});

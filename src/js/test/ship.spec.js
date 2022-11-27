import ship from '../models/ship';

describe('ship', () => {
  it('submarine should not be sunk', () => {
    const submarine = ship({ name: 'submarine', type: 4, size: 2 });
    submarine.hit();
    const actual = submarine.isSunk();

    expect(actual).toBeFalsy();
  });

  it('submarine should be sunk', () => {
    const submarine = ship({ name: 'submarine', type: 4, size: 2 });
    submarine.hit();
    submarine.hit();
    const actual = submarine.isSunk();

    expect(actual).toBeTruthy();
  });
});

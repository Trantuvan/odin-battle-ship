import player from '../models/player';

mockPubSub.publish = jest.fn();

describe('player', () => {
  it('player name should be van', () => {
    const expected = /van/;
    const actual = player('van').name;

    expect(actual).toMatch(expected);
  });
});

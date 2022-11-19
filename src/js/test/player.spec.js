import mockPubSub from 'pubsub-js';
import player from '../models/player';

mockPubSub.publish = jest.fn();

describe('player', () => {
  it('player name should be van', () => {
    const expected = /van/;
    const actual = player('van').name;

    expect(actual).toMatch(expected);
  });

  it('player shoot at location "B0"', () => {
    player(null).shoot('B0');
    expect(mockPubSub.publish).toHaveBeenCalledWith('player:shoot', 'B0');
  });
});

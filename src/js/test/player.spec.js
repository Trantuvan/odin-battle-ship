import mockPubSub from 'pubsub-js';
import player from '../models/player';

describe('player', () => {
  it('player name should be van', () => {
    const expected = /van/;
    const actual = player('van').name;

    expect(actual).toMatch(expected);
  });

  describe('shoot', () => {
    mockPubSub.publish = jest.fn();

    it('should send topic player.shoot', () => {
      player(null).shoot('B0');
      expect(mockPubSub.publish).toHaveBeenCalledWith('player.shoot', 'B0');
    });
  });
});

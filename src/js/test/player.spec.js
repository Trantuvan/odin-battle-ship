import mockPubSub from 'pubsub-js';
import player from '../models/player';

describe('player', () => {
  it('player name should be van', () => {
    const expected = /van/;
    const actual = player({ name: 'van' }).name;

    expect(actual).toMatch(expected);
  });

  describe('shoot', () => {
    mockPubSub.publish = jest.fn();

    it('should send topic player.shoot', () => {
      player().shoot('B0');
      expect(mockPubSub.publish).toHaveBeenCalledWith('player.shoot', 'B0');
    });
  });
});

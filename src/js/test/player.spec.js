import mockPubSub from 'pubsub-js';
import player from '../models/player';

describe('player', () => {
  it('player name should be van', () => {
    const expected = /van/;
    const actual = player({ name: 'van' }).name;

    expect(actual).toMatch(expected);
  });
});

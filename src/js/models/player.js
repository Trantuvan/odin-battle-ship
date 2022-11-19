import PubSub from 'pubsub-js';

export default function player(name) {
  function shoot(coord) {
    PubSub.publish('player:shoot', coord);
  }

  return {
    get name() {
      return name;
    },
    shoot,
  };
}

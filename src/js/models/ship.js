export default function ship({ name, type, size }) {
  let numShot = 0;

  function hit() {
    numShot += 1;
  }

  function isSunk() {
    const sizeRemains = size - numShot;

    if (sizeRemains <= 0) {
      return true;
    }
    return false;
  }

  return {
    get name() {
      return name;
    },
    get type() {
      return type;
    },
    get size() {
      return size;
    },
    hit,
    isSunk,
  };
}

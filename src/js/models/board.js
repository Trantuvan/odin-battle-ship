export default function board() {
  // *Array constructor create array has property length only
  // *index property is not created
  // *method (map, filter, reduce) is useless when attemp to iterate array index
  // *fill method make this possible
  const grid = Array(10)
    .fill(null)
    .map((_) => Array(10).fill(null));

  function toXY([xLetter, yNumber]) {
    const column = 'ABCDEFGHIJ'.indexOf(xLetter);
    const row = Number(yNumber);

    return { column, row };
  }

  function isFit(cellArray, shipIndexStart, shipSize) {
    const shipContainer = cellArray.slice(shipIndexStart);
    const cellAvailable = shipContainer.length - shipSize;

    if (cellAvailable >= 0) {
      return true;
    }
    return false;
  }

  function placeAxis(axis) {
    return function ship({ type, size }) {
      return function at(coord) {
        const { column, row } = toXY(coord);
        const isShipFit = isFit(grid[row], column, size);

        if (isShipFit) {
          const startIndex = column;
          const endIndex = column + size;

          return grid[row].fill(type, startIndex, endIndex);
        }

        return undefined;
      };
    };
  }

  return {
    get grid() {
      return grid;
    },
    placeAxis,
  };
}

const initBoard = board();
const carrier = { type: 0, size: 5 };
initBoard.placeAxis('horizontal')(carrier)('F2');

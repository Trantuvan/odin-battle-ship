import filterUntil from '../utils/filterUntil';

export default function board() {
  // *Array constructor create array has property length only
  // *index property is not created
  // *method (map, filter, reduce) is useless when attemp to iterate array index
  // *fill method make this possible
  const grid = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));

  function toXY([xLetter, yNumber]) {
    const column = 'ABCDEFGHIJ'.indexOf(xLetter);
    const row = Number(yNumber);

    return { column, row };
  }

  function isFit(cellArray, shipIndexStart, shipSize) {
    const shipContainer = cellArray.slice(shipIndexStart);
    const cellAvailable = filterUntil(
      shipContainer,
      (v) => v === null,
      (v) => v !== null
    );
    const cellRemains = cellAvailable.length - shipSize;

    if (cellRemains >= 0) {
      return true;
    }
    return false;
  }

  function isLegal(gridValue) {
    if (gridValue === 'hit' || gridValue === 'miss') {
      return false;
    }
    return true;
  }

  function addShipHorizontal(row, column, size, type) {
    const isShipFit = isFit(grid[row], column, size);

    if (isShipFit) {
      const startIndex = column;
      const endIndex = column + size;

      grid[row].fill(type, startIndex, endIndex);
    } else {
      throw new Error('ship cannot be fit');
    }
  }

  function addShipVertical(row, column, size, type) {
    const columnArray = (arr, col) => arr.map((v) => v[col]);
    const isShipFit = isFit(columnArray(grid, column), row, size);

    if (isShipFit) {
      grid.forEach((v, i) => {
        if (row <= i && i < row + size) {
          v.splice(column, 1, type);
        }
      });
    } else {
      throw new Error('ship cannot be fit');
    }
  }

  function placeAxis(axis) {
    return function ship({ type, size }) {
      return function at(coord) {
        const { column, row } = toXY(coord);

        switch (axis) {
          case 'horizontal':
            addShipHorizontal(row, column, size, type);
            break;

          case 'vertical':
            addShipVertical(row, column, size, type);
            break;
          default:
            throw new Error('error in switch axis');
        }
      };
    };
  }

  function receiveAttack(coord) {
    let data;
    const { column, row } = toXY(coord);
    const gridValue = grid[row][column];
    const isLegalShot = isLegal(gridValue);

    if (isLegalShot === false) {
      throw new Error('illegal shot');
    }

    switch (gridValue) {
      case 0:
        data = { message: 'hit', shipType: 0 };
        grid[row][column] = 'hit';
        break;
      case 1:
        data = { message: 'hit', shipType: 1 };
        grid[row][column] = 'hit';
        break;
      case 2:
        data = { message: 'hit', shipType: 2 };
        grid[row][column] = 'hit';
        break;
      case 3:
        data = { message: 'hit', shipType: 3 };
        grid[row][column] = 'hit';
        break;
      case 4:
        data = { message: 'hit', shipType: 4 };
        grid[row][column] = 'hit';
        break;

      default:
        data = { message: 'miss', shipType: null };
        grid[row][column] = 'miss';
        break;
    }

    return data;
  }

  return {
    get grid() {
      return grid;
    },
    placeAxis,
    receiveAttack,
  };
}

/* eslint-disable no-param-reassign */
export default (function placeShipView() {
  function addDomEvent(changeDirBtn, cells, grid, fleet) {
    const cellArray = Array.from(cells);
    let direction = 'horizontal';
    const playerFleet = [...fleet];

    changeDirBtn.addEventListener('click', () => {
      const dirValue = changeDirBtn.querySelector('.dir');

      if (dirValue.textContent === 'X') {
        dirValue.textContent = 'Y';
        direction = 'vertical';
      } else {
        dirValue.textContent = 'X';
        direction = 'horizontal';
      }
    });

    function convert2D(arr) {
      const copyArray = [...arr];
      const newArray = [];

      while (copyArray.length) {
        newArray.push(copyArray.splice(0, 10));
      }
      return newArray;
    }

    const twoDCellArray = convert2D(cellArray);

    function colorShipSize(domArray, startIndex, endIndex) {
      const shipArray = domArray.slice(startIndex, endIndex);
      shipArray.forEach((div) => {
        div.style.backgroundColor = 'grey';
      });
    }

    function unColorShipSize(domArray, startIndex, endIndex) {
      const shipArray = domArray.slice(startIndex, endIndex);
      shipArray.forEach((div) => {
        div.style.backgroundColor = 'hsl(201, 90%, 27%)';
      });
    }

    function mouseOver(evt) {
      evt.target.style.backgroundColor = 'red';
    }

    function mouseOut(evt) {
      evt.target.style.backgroundColor = 'hsl(201, 90%, 27%)';
    }

    cellArray.forEach((cell) => {
      cell.addEventListener('mouseover', (evt) => {
        const currentShip = playerFleet[0];

        const { column, row } = grid.toXY(
          evt.target.getAttribute('local-data')
        );

        if (direction === 'horizontal') {
          const isShipFit = grid.isFit(
            grid.grid[row],
            column,
            playerFleet[0].size
          );

          if (isShipFit === false) {
            evt.target.style.cursor = 'not-allowed';
            mouseOver(evt);
          }

          if (isShipFit === true) {
            evt.target.style.cursor = 'cell';
            const rowCellsDom = twoDCellArray[row];
            colorShipSize(rowCellsDom, column, column + currentShip.size);
          }
        }
      });
    });

    cellArray.forEach((cell) => {
      cell.addEventListener('mouseout', (evt) => {
        const currentShip = playerFleet[0];
        const { column, row } = grid.toXY(
          evt.target.getAttribute('local-data')
        );

        if (direction === 'horizontal') {
          const isShipFit = grid.isFit(
            grid.grid[row],
            column,
            playerFleet[0].size
          );

          if (isShipFit === false) {
            mouseOut(evt);
          }

          if (isShipFit === true) {
            evt.target.style.cursor = 'cell';
            const rowCellsDom = twoDCellArray[row];
            unColorShipSize(rowCellsDom, column, column + currentShip.size);
          }
        }
      });
    });
  }

  const render = ({ player, playerGrid, playerFleet }) => {
    const placeShip = document.querySelector('.place-ship');

    placeShip.innerHTML = `
    <div class="place-ship-action">
      <div class="command">
        <span class="player-name">${player.name}</span>
        <span>place your carriers</span>
      </div>
      <button class="change-dir">
        <span>AXIS:</span><span class="dir">X</span>
      </button>
    </div>
    <div class="place-ship-body">
      <div class="grid">
        <div class="cell" local-data="A0"></div>
        <div class="cell" local-data="B0"></div>
        <div class="cell" local-data="C0"></div>
        <div class="cell" local-data="D0"></div>
        <div class="cell" local-data="E0"></div>
        <div class="cell" local-data="F0"></div>
        <div class="cell" local-data="G0"></div>
        <div class="cell" local-data="H0"></div>
        <div class="cell" local-data="I0"></div>
        <div class="cell" local-data="J0"></div>
        <div class="cell" local-data="A1"></div>
        <div class="cell" local-data="B1"></div>
        <div class="cell" local-data="C1"></div>
        <div class="cell" local-data="D1"></div>
        <div class="cell" local-data="E1"></div>
        <div class="cell" local-data="F1"></div>
        <div class="cell" local-data="G1"></div>
        <div class="cell" local-data="H1"></div>
        <div class="cell" local-data="I1"></div>
        <div class="cell" local-data="J1"></div>
        <div class="cell" local-data="A2"></div>
        <div class="cell" local-data="B2"></div>
        <div class="cell" local-data="C2"></div>
        <div class="cell" local-data="D2"></div>
        <div class="cell" local-data="E2"></div>
        <div class="cell" local-data="F2"></div>
        <div class="cell" local-data="G2"></div>
        <div class="cell" local-data="H2"></div>
        <div class="cell" local-data="I2"></div>
        <div class="cell" local-data="J2"></div>
        <div class="cell" local-data="A3"></div>
        <div class="cell" local-data="B3"></div>
        <div class="cell" local-data="C3"></div>
        <div class="cell" local-data="D3"></div>
        <div class="cell" local-data="E3"></div>
        <div class="cell" local-data="F3"></div>
        <div class="cell" local-data="G3"></div>
        <div class="cell" local-data="H3"></div>
        <div class="cell" local-data="I3"></div>
        <div class="cell" local-data="J3"></div>
        <div class="cell" local-data="A4"></div>
        <div class="cell" local-data="B4"></div>
        <div class="cell" local-data="C4"></div>
        <div class="cell" local-data="D4"></div>
        <div class="cell" local-data="E4"></div>
        <div class="cell" local-data="F4"></div>
        <div class="cell" local-data="G4"></div>
        <div class="cell" local-data="H4"></div>
        <div class="cell" local-data="I4"></div>
        <div class="cell" local-data="J4"></div>
        <div class="cell" local-data="A5"></div>
        <div class="cell" local-data="B5"></div>
        <div class="cell" local-data="C5"></div>
        <div class="cell" local-data="D5"></div>
        <div class="cell" local-data="E5"></div>
        <div class="cell" local-data="F5"></div>
        <div class="cell" local-data="G5"></div>
        <div class="cell" local-data="H5"></div>
        <div class="cell" local-data="I5"></div>
        <div class="cell" local-data="J5"></div>
        <div class="cell" local-data="A6"></div>
        <div class="cell" local-data="B6"></div>
        <div class="cell" local-data="C6"></div>
        <div class="cell" local-data="D6"></div>
        <div class="cell" local-data="E6"></div>
        <div class="cell" local-data="E6"></div>
        <div class="cell" local-data="G6"></div>
        <div class="cell" local-data="H6"></div>
        <div class="cell" local-data="I6"></div>
        <div class="cell" local-data="J6"></div>
        <div class="cell" local-data="A7"></div>
        <div class="cell" local-data="B7"></div>
        <div class="cell" local-data="C7"></div>
        <div class="cell" local-data="D7"></div>
        <div class="cell" local-data="E7"></div>
        <div class="cell" local-data="F7"></div>
        <div class="cell" local-data="G7"></div>
        <div class="cell" local-data="H7"></div>
        <div class="cell" local-data="I7"></div>
        <div class="cell" local-data="J7"></div>
        <div class="cell" local-data="A8"></div>
        <div class="cell" local-data="B8"></div>
        <div class="cell" local-data="C8"></div>
        <div class="cell" local-data="D8"></div>
        <div class="cell" local-data="E8"></div>
        <div class="cell" local-data="F8"></div>
        <div class="cell" local-data="G8"></div>
        <div class="cell" local-data="H8"></div>
        <div class="cell" local-data="I8"></div>
        <div class="cell" local-data="J8"></div>
        <div class="cell" local-data="A9"></div>
        <div class="cell" local-data="B9"></div>
        <div class="cell" local-data="C9"></div>
        <div class="cell" local-data="D9"></div>
        <div class="cell" local-data="E9"></div>
        <div class="cell" local-data="F9"></div>
        <div class="cell" local-data="G9"></div>
        <div class="cell" local-data="H9"></div>
        <div class="cell" local-data="I9"></div>
        <div class="cell" local-data="J9"></div>
      </div>
    </div>
    `;

    const changeDirBtn = placeShip.querySelector('.change-dir');
    const cells = placeShip.querySelectorAll('.cell');
    addDomEvent(changeDirBtn, cells, playerGrid, playerFleet);
  };

  return {
    render,
  };
})();

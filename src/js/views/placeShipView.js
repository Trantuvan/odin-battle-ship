import receiveAttackView from './receiveAttack';
/* eslint-disable no-param-reassign */
export default (function placeShipView() {
  function addDomEvent(changeDirBtn, cells, grid, fleet, nextBtn) {
    const cellArray = Array.from(cells);
    let direction = 'horizontal';
    const playerFleet = [...fleet];

    nextBtn.addEventListener('click', () => {
      if (playerFleet.length > 0) {
        return undefined;
      }
      const placeShip = document.querySelector('.place-ship');
      const playGround = document.querySelector('.play-ground');
      placeShip.classList.add('disabled');
      playGround.classList.remove('disabled');
      receiveAttackView.render();

      cellArray.forEach((cell) => {
        cell.setAttribute('isPopulated-data', 'false');
        cell.style.backgroundColor = 'hsl(201, 90%, 27%)';
        cell.style.cursor = 'pointer';
      });
      return undefined;
    });

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
        if (div.getAttribute('isPopulated-data') === 'false') {
          div.style.backgroundColor = 'hsl(201, 90%, 27%)';
        }
      });
    }

    function populated(domArray, startIndex, endIndex) {
      const shipArray = domArray.slice(startIndex, endIndex);
      shipArray.forEach((div) => {
        div.setAttribute('isPopulated-data', 'true');
      });
    }

    function mouseOver(evt) {
      evt.target.style.backgroundColor = 'red';
    }

    function mouseOut(evt) {
      if (evt.target.getAttribute('isPopulated-data') === 'false') {
        evt.target.style.backgroundColor = 'hsl(201, 90%, 27%)';
      } else if (evt.target.getAttribute('isPopulated-data') === 'true') {
        evt.target.style.backgroundColor = 'grey';
      }
    }

    // *Hover to check ship size is Fit
    cellArray.forEach((cell) => {
      cell.addEventListener('mouseover', (evt) => {
        const currentShip = playerFleet[0];

        if (currentShip === undefined) {
          return undefined;
        }

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

        if (direction === 'vertical') {
          const columnArray = (arr, col) => arr.map((v) => v[col]);
          const isShipFit = grid.isFit(
            columnArray(grid.grid, column),
            row,
            playerFleet[0].size
          );

          if (isShipFit === false) {
            evt.target.style.cursor = 'not-allowed';
            mouseOver(evt);
          }

          if (isShipFit === true) {
            evt.target.style.cursor = 'cell';
            const rowCellsDom = columnArray(twoDCellArray, column);
            colorShipSize(rowCellsDom, row, row + currentShip.size);
          }
        }
        return undefined;
      });
    });

    // *Hover to remove the mouseover event
    cellArray.forEach((cell) => {
      cell.addEventListener('mouseout', (evt) => {
        const currentShip = playerFleet[0];

        if (currentShip === undefined) {
          return undefined;
        }

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
            const rowCellsDom = twoDCellArray[row];
            unColorShipSize(rowCellsDom, column, column + currentShip.size);
          }
        }

        if (direction === 'vertical') {
          const columnArray = (arr, col) => arr.map((v) => v[col]);
          const isShipFit = grid.isFit(
            columnArray(grid.grid, column),
            row,
            playerFleet[0].size
          );

          if (isShipFit === false) {
            mouseOut(evt);
          }

          if (isShipFit === true) {
            const rowCellsDom = columnArray(twoDCellArray, column);
            unColorShipSize(rowCellsDom, row, row + currentShip.size);
          }
        }
        return undefined;
      });
    });

    // *click to placeShip into board
    cellArray.forEach((cell) => {
      cell.addEventListener('click', (evt) => {
        const popCurrentShip = playerFleet.shift();
        const { column, row } = grid.toXY(
          evt.target.getAttribute('local-data')
        );

        if (popCurrentShip === undefined) {
          return undefined;
        }

        if (direction === 'horizontal') {
          evt.target.style.cursor = 'cell';
          const rowCellsDom = twoDCellArray[row];
          colorShipSize(rowCellsDom, column, column + popCurrentShip.size);
          populated(rowCellsDom, column, column + popCurrentShip.size);

          grid.placeAxis(direction)({
            type: popCurrentShip.type,
            size: popCurrentShip.size,
          })(evt.target.getAttribute('local-data'));
        }

        if (direction === 'vertical') {
          evt.target.style.cursor = 'cell';
          const columnArray = (arr, col) => arr.map((v) => v[col]);
          const rowCellsDom = columnArray(twoDCellArray, column);
          colorShipSize(rowCellsDom, row, row + popCurrentShip.size);
          populated(rowCellsDom, row, row + popCurrentShip.size);

          grid.placeAxis(direction)({
            type: popCurrentShip.type,
            size: popCurrentShip.size,
          })(evt.target.getAttribute('local-data'));
        }

        return undefined;
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
        <div class="cell" local-data="A0" isPopulated-data="false"></div>
        <div class="cell" local-data="B0" isPopulated-data="false"></div>
        <div class="cell" local-data="C0" isPopulated-data="false"></div>
        <div class="cell" local-data="D0" isPopulated-data="false"></div>
        <div class="cell" local-data="E0" isPopulated-data="false"></div>
        <div class="cell" local-data="F0" isPopulated-data="false"></div>
        <div class="cell" local-data="G0" isPopulated-data="false"></div>
        <div class="cell" local-data="H0" isPopulated-data="false"></div>
        <div class="cell" local-data="I0" isPopulated-data="false"></div>
        <div class="cell" local-data="J0" isPopulated-data="false"></div>
        <div class="cell" local-data="A1" isPopulated-data="false"></div>
        <div class="cell" local-data="B1" isPopulated-data="false"></div>
        <div class="cell" local-data="C1" isPopulated-data="false"></div>
        <div class="cell" local-data="D1" isPopulated-data="false"></div>
        <div class="cell" local-data="E1" isPopulated-data="false"></div>
        <div class="cell" local-data="F1" isPopulated-data="false"></div>
        <div class="cell" local-data="G1" isPopulated-data="false"></div>
        <div class="cell" local-data="H1" isPopulated-data="false"></div>
        <div class="cell" local-data="I1" isPopulated-data="false"></div>
        <div class="cell" local-data="J1" isPopulated-data="false"></div>
        <div class="cell" local-data="A2" isPopulated-data="false"></div>
        <div class="cell" local-data="B2" isPopulated-data="false"></div>
        <div class="cell" local-data="C2" isPopulated-data="false"></div>
        <div class="cell" local-data="D2" isPopulated-data="false"></div>
        <div class="cell" local-data="E2" isPopulated-data="false"></div>
        <div class="cell" local-data="F2" isPopulated-data="false"></div>
        <div class="cell" local-data="G2" isPopulated-data="false"></div>
        <div class="cell" local-data="H2" isPopulated-data="false"></div>
        <div class="cell" local-data="I2" isPopulated-data="false"></div>
        <div class="cell" local-data="J2" isPopulated-data="false"></div>
        <div class="cell" local-data="A3" isPopulated-data="false"></div>
        <div class="cell" local-data="B3" isPopulated-data="false"></div>
        <div class="cell" local-data="C3" isPopulated-data="false"></div>
        <div class="cell" local-data="D3" isPopulated-data="false"></div>
        <div class="cell" local-data="E3" isPopulated-data="false"></div>
        <div class="cell" local-data="F3" isPopulated-data="false"></div>
        <div class="cell" local-data="G3" isPopulated-data="false"></div>
        <div class="cell" local-data="H3" isPopulated-data="false"></div>
        <div class="cell" local-data="I3" isPopulated-data="false"></div>
        <div class="cell" local-data="J3" isPopulated-data="false"></div>
        <div class="cell" local-data="A4" isPopulated-data="false"></div>
        <div class="cell" local-data="B4" isPopulated-data="false"></div>
        <div class="cell" local-data="C4" isPopulated-data="false"></div>
        <div class="cell" local-data="D4" isPopulated-data="false"></div>
        <div class="cell" local-data="E4" isPopulated-data="false"></div>
        <div class="cell" local-data="F4" isPopulated-data="false"></div>
        <div class="cell" local-data="G4" isPopulated-data="false"></div>
        <div class="cell" local-data="H4" isPopulated-data="false"></div>
        <div class="cell" local-data="I4" isPopulated-data="false"></div>
        <div class="cell" local-data="J4" isPopulated-data="false"></div>
        <div class="cell" local-data="A5" isPopulated-data="false"></div>
        <div class="cell" local-data="B5" isPopulated-data="false"></div>
        <div class="cell" local-data="C5" isPopulated-data="false"></div>
        <div class="cell" local-data="D5" isPopulated-data="false"></div>
        <div class="cell" local-data="E5" isPopulated-data="false"></div>
        <div class="cell" local-data="F5" isPopulated-data="false"></div>
        <div class="cell" local-data="G5" isPopulated-data="false"></div>
        <div class="cell" local-data="H5" isPopulated-data="false"></div>
        <div class="cell" local-data="I5" isPopulated-data="false"></div>
        <div class="cell" local-data="J5" isPopulated-data="false"></div>
        <div class="cell" local-data="A6" isPopulated-data="false"></div>
        <div class="cell" local-data="B6" isPopulated-data="false"></div>
        <div class="cell" local-data="C6" isPopulated-data="false"></div>
        <div class="cell" local-data="D6" isPopulated-data="false"></div>
        <div class="cell" local-data="E6" isPopulated-data="false"></div>
        <div class="cell" local-data="E6" isPopulated-data="false"></div>
        <div class="cell" local-data="G6" isPopulated-data="false"></div>
        <div class="cell" local-data="H6" isPopulated-data="false"></div>
        <div class="cell" local-data="I6" isPopulated-data="false"></div>
        <div class="cell" local-data="J6" isPopulated-data="false"></div>
        <div class="cell" local-data="A7" isPopulated-data="false"></div>
        <div class="cell" local-data="B7" isPopulated-data="false"></div>
        <div class="cell" local-data="C7" isPopulated-data="false"></div>
        <div class="cell" local-data="D7" isPopulated-data="false"></div>
        <div class="cell" local-data="E7" isPopulated-data="false"></div>
        <div class="cell" local-data="F7" isPopulated-data="false"></div>
        <div class="cell" local-data="G7" isPopulated-data="false"></div>
        <div class="cell" local-data="H7" isPopulated-data="false"></div>
        <div class="cell" local-data="I7" isPopulated-data="false"></div>
        <div class="cell" local-data="J7" isPopulated-data="false"></div>
        <div class="cell" local-data="A8" isPopulated-data="false"></div>
        <div class="cell" local-data="B8" isPopulated-data="false"></div>
        <div class="cell" local-data="C8" isPopulated-data="false"></div>
        <div class="cell" local-data="D8" isPopulated-data="false"></div>
        <div class="cell" local-data="E8" isPopulated-data="false"></div>
        <div class="cell" local-data="F8" isPopulated-data="false"></div>
        <div class="cell" local-data="G8" isPopulated-data="false"></div>
        <div class="cell" local-data="H8" isPopulated-data="false"></div>
        <div class="cell" local-data="I8" isPopulated-data="false"></div>
        <div class="cell" local-data="J8" isPopulated-data="false"></div>
        <div class="cell" local-data="A9" isPopulated-data="false"></div>
        <div class="cell" local-data="B9" isPopulated-data="false"></div>
        <div class="cell" local-data="C9" isPopulated-data="false"></div>
        <div class="cell" local-data="D9" isPopulated-data="false"></div>
        <div class="cell" local-data="E9" isPopulated-data="false"></div>
        <div class="cell" local-data="F9" isPopulated-data="false"></div>
        <div class="cell" local-data="G9" isPopulated-data="false"></div>
        <div class="cell" local-data="H9" isPopulated-data="false"></div>
        <div class="cell" local-data="I9" isPopulated-data="false"></div>
        <div class="cell" local-data="J9" isPopulated-data="false"></div>
      </div>
    </div>
    <div class="place-ship-footer">
      <button class="next-phase">NEXT</button>
    </div>
    `;

    const changeDirBtn = placeShip.querySelector('.change-dir');
    const cells = placeShip.querySelectorAll('.cell');
    const nextBtn = placeShip.querySelector('.next-phase');
    addDomEvent(changeDirBtn, cells, playerGrid, playerFleet, nextBtn);
  };

  return {
    render,
  };
})();

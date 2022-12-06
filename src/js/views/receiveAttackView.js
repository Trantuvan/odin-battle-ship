import gameController from '../controllers/gameController';
/* eslint-disable no-param-reassign */
export default (function receiveAttackView() {
  function addDomEvent(friendlyCells, enemyCells) {}

  const renderAllFriendlyCells = (friendlyCells, domArray) => {
    const friendlyArray = Array.from(friendlyCells);
    friendlyArray.forEach((cell, index) => {
      if (domArray[index].getAttribute('isPopulated-data') === 'true') {
        cell.style.backgroundColor = 'grey';
      }
    });
  };

  const render = ({ domArray }) => {
    const playGround = document.querySelector('.play-ground');

    playGround.innerHTML = `
    <div class="play-status">
    <p>Awaiting orders, Admiral ${gameController.player1.name}</p>
  </div>
  <div class="play-grid">
    <div class="friendly-water">
      <h2 class="title">FRIENDLY WATER</h2>
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
    <div class="enemy-water">
      <h2 class="title">ENEMY WATER</h2>
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
  </div>
    `;

    const friendlyCells = playGround.querySelectorAll('.friendly-water .cell');
    const enemyCells = playGround.querySelectorAll('.enemy-water .cell');

    renderAllFriendlyCells(friendlyCells, domArray);
    addDomEvent(friendlyCells, enemyCells);
  };

  return {
    render,
  };
})();

import gameController from '../controllers/gameController';

export default (function modalView() {
  function addDomEvent(btn, modal, domElement) {
    btn.addEventListener('click', () => {
      const welcome = document.querySelector('.welcome');
      gameController.reset();
      gameController.init();
      modal.close();
      domElement.classList.add('disabled');
      modal.classList.add('disabled');
      welcome.classList.remove('disabled');
    });
  }

  const render = ({ player, domElement }) => {
    const modal = document.querySelector('.modal');
    modal.innerHTML = `
    <div class="modal-info">${player.name} TAKES THE ROUND</div>
    <div class="modal-action">
        <button class="btn">REPLAY</button>
    </div>
    `;
    modal.showModal();
    modal.classList.remove('disabled');
    const btn = modal.querySelector('.btn');
    addDomEvent(btn, modal, domElement);
  };

  return {
    render,
  };
})();

export default (function modalView() {
  function addDomEvent(btn, modal) {
    btn.addEventListener('click', () => {
      console.log('hi');
      modal.close();
      modal.classList.add('disabled');
    });
  }

  const render = ({ player }) => {
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
    addDomEvent(btn, modal);
  };

  return {
    render,
  };
})();

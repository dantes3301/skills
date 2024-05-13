const modals = document.querySelectorAll('[data-modal]');
const body = document.body;

modals.forEach(function (trigger) {
  trigger.addEventListener('click', function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add('custom-modal_active');
    body.classList.add('overflow-hidden')
    const exits = modal.querySelectorAll('#custom-modal__exit');
    exits.forEach(function (exit) {
      exit.addEventListener('click', function (event) {
        event.preventDefault();
        modal.classList.remove('custom-modal_active');
        body.classList.remove('overflow-hidden')
      });
    });
  });
});
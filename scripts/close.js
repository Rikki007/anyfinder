function closeWindow(form) {
  const modalWindowBack = document.querySelector('.modal-back');
  const exitBtn = document.querySelector('.exit-button');
  const menu = document.querySelector('.menu-wrapper');
  const body = document.querySelector('body');

  exitBtn.addEventListener('click', () => {
    modalWindowBack.classList.remove('modal-back_active');
    form.remove();
    body.classList.remove('body_inactive');
    if (menu) {
      menu.classList.remove('menu-wrapper_active');
      menu.remove();
    }
  });
  modalWindowBack.addEventListener('click', (event) => {
    if (event.target === modalWindowBack) {
      modalWindowBack.classList.remove('modal-back_active');
      form.remove();
      body.classList.remove('body_inactive');
      if (menu) {
        menu.classList.remove('menu-wrapper_active');
        menu.remove();
      }
    }
  });
}
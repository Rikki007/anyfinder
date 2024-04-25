function closeWindow(form) {
  const modalWindowBack = document.querySelector('.modal-back');
  const exitBtn = document.querySelector('.exit-button');
  const menu = document.querySelector('.menu-wrapper');

  exitBtn.addEventListener('click', () => {
    modalWindowBack.classList.remove('modal-back_active');
    form.remove();
    if (menu) {
      menu.classList.remove('menu-wrapper_active');
      menu.remove();
    }
  });
  modalWindowBack.addEventListener('click', (event) => {
    if (event.target === modalWindowBack) {
      modalWindowBack.classList.remove('modal-back_active');
      form.remove();
      if (menu) {
        menu.classList.remove('menu-wrapper_active');
        menu.remove();
      }
    }
  });
}
function closeWindow(form) {
  modalWindowBack = document.querySelector('.modal-back');
  exitBtn = document.querySelector('.exit-button');

  exitBtn.addEventListener('click', () => {
    modalWindowBack.classList.remove('modal-back_active');
    form.remove();
  });
  modalWindowBack.addEventListener('click', (event) => {
    if (event.target === modalWindowBack) {
      modalWindowBack.classList.remove('modal-back_active');
      form.remove();
    }
  });
}
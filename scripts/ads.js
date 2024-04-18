function adsFormCreate() {
  container = document.querySelector('.modal-window');
  backContainer = document.querySelector('.modal-back');
  createForm(constainer);
  
  closeWindow(adsForm);

  submitBtn.addEventListener('click', () => {
    const login = document.cookie.split(';')[0].split('=')[1];
    ajaxAds(login, purchaseInput, saleInput, kindOfProductInput, descriptionInput, priceOfProductInput);
    adsForm.remove();
    backContainer.classList.remove('modal-back_active');
  });
}
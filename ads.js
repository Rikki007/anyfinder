function adsFormCreate(container) {
  const adsForm = document.createElement('form');
  adsForm.setAttribute('action', '#');
  adsForm.classList.add('form');
  adsForm.classList.add('ads-form');
  container.appendChild(adsForm);

  const fieldset = document.createElement('fieldset');
  adsForm.appendChild(fieldset);

  const legend = document.createElement('legend');
  legend.classList.add('field');
  legend.textContent = 'Select type of operation';
  fieldset.appendChild(legend);

  const purchase = document.createElement('div');
  fieldset.appendChild(purchase);

  const purchaseInput = document.createElement('input');
  purchaseInput.setAttribute('id', 'purchase');
  purchaseInput.setAttribute('type', 'radio');
  purchaseInput.setAttribute('value', 'purchase');
  purchaseInput.setAttribute('name', 'operation');
  purchaseInput.checked = true;
  purchase.appendChild(purchaseInput);

  const purchaseLabel = document.createElement('label');
  purchaseLabel.classList.add('field');
  purchaseLabel.setAttribute('for', 'purchase');
  purchaseLabel.textContent = 'Purchase';
  purchase.appendChild(purchaseLabel);

  const sale = document.createElement('div');
  fieldset.appendChild(sale);

  const saleInput = document.createElement('input');
  saleInput.setAttribute('type', 'radio');
  saleInput.setAttribute('id', 'sale');
  saleInput.setAttribute('name', 'operation');
  saleInput.setAttribute('value', 'sale');
  sale.appendChild(saleInput);

  const saleLabel = document.createElement('label');
  saleLabel.classList.add('field');
  saleLabel.setAttribute('for', 'sale');
  saleLabel.textContent = 'Sale';
  sale.appendChild(saleLabel);

  const kindOfProduct = document.createElement('div');
  adsForm.appendChild(kindOfProduct);

  const kindOfProductLabel = document.createElement('label');
  kindOfProductLabel.classList.add('field');
  kindOfProductLabel.setAttribute('for', 'product');
  kindOfProductLabel.textContent = 'What kind of product';
  kindOfProduct.appendChild(kindOfProductLabel);

  const kindOfProductInput = document.createElement('input');
  kindOfProductInput.classList.add('field');
  kindOfProductInput.classList.add('input-style');
  kindOfProductInput.setAttribute('id', 'product');
  kindOfProductInput.setAttribute('type', 'text');
  kindOfProductInput.setAttribute('required', '');
  kindOfProduct.appendChild(kindOfProductInput);

  const descriptionProduct = document.createElement('div');
  adsForm.appendChild(descriptionProduct);

  const descriptionLabel = document.createElement('label');
  descriptionLabel.classList.add('field');
  descriptionLabel.setAttribute('for', 'description');
  descriptionLabel.textContent = 'Description of product';
  descriptionProduct.appendChild(descriptionLabel);

  const descriptionInput = document.createElement('textarea');
  descriptionInput.classList.add('description-input');
  descriptionInput.setAttribute('id', 'description');
  descriptionProduct.appendChild(descriptionInput);

  const priceOfProduct = document.createElement('div');
  adsForm.appendChild(priceOfProduct);

  const priceOfProductLabel = document.createElement('label');
  priceOfProductLabel.classList.add('field');
  priceOfProductLabel.setAttribute('for', 'price');
  priceOfProductLabel.textContent = 'Price';
  priceOfProduct.appendChild(priceOfProductLabel);

  const priceOfProductInput = document.createElement('input');
  priceOfProductInput.classList.add('field');
  priceOfProductInput.classList.add('input-style');
  priceOfProductInput.setAttribute('id', 'price');
  priceOfProductInput.setAttribute('type', 'text');
  priceOfProduct.appendChild(priceOfProductInput);

  const submitBtn = document.createElement('button');
  submitBtn.classList.add('button');
  submitBtn.classList.add('submit-ads');
  submitBtn.setAttribute('type', 'button');
  submitBtn.textContent = 'Create';
  adsForm.appendChild(submitBtn);

  submitBtn.addEventListener('click', () => {
    const login = document.cookie.split(';')[0].split('=')[1];
    ajaxAds(login, purchaseInput, saleInput, kindOfProductInput, descriptionInput, priceOfProductInput);
  });
}
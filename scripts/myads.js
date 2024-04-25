function myAds(obj) {
  const adsContainer = document.querySelector('.ads');
  const adBlock = document.createElement('div');
  adBlock.classList.add('card');
  adsContainer.appendChild(adBlock);

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  adBlock.appendChild(imgContainer);

  const img = document.createElement('img');
  img.classList.add('card__img');
  img.setAttribute('alt', 'icon');
  img.setAttribute('src', './img/camera-off-svgrepo-com.svg');
  imgContainer.appendChild(img);

  const dateOfApproval = document.createElement('p');
  dateOfApproval.classList.add('date');
  dateOfApproval.textContent = obj.date.split(' ')[0];
  adBlock.appendChild(dateOfApproval);

  const adsStatus = document.createElement('div');
  adsStatus.classList.add('ads-status');
  adBlock.appendChild(adsStatus);

  const statusDescription = document.createElement('p');
  statusDescription.classList.add('ads-status__description');
  statusDescription.textContent = `status: ${obj.status}`;
  adsStatus.appendChild(statusDescription);

  // if user call ads himself, status of moderation well be visible
  
  if (document.cookie.split(';')[0].split('=')[1] === obj.login || document.cookie.split(';')[0].split('=')[1] === 'moderator' || document.cookie.split(';')[0].split('=')[1] === 'admin') {
    const statusIcon = document.createElement('div');
    if (obj.status === 'moderation') {
      statusIcon.classList.add('ads-status__moderation');
    }
    if (obj.status === 'approved') {
      statusIcon.classList.add('ads-status__approved');
    }
    if (obj.status === 'rejected') {
      statusIcon.classList.add('ads-status__rejected');
    }
    adsStatus.appendChild(statusIcon);
  }
 

  const typeOfOperation = document.createElement('h3');
  typeOfOperation.classList.add('purchase-sale');
  typeOfOperation.textContent = obj.type;
  adBlock.appendChild(typeOfOperation);

  const prod = document.createElement('h3');
  typeOfOperation.classList.add('purchase-sale');
  typeOfOperation.textContent = obj.product;
  adBlock.appendChild(prod);

  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = obj.description;
  adBlock.appendChild(description);

  const price = document.createElement('h3');
  price.classList.add('purchase-sale');
  price.textContent = obj.price;
  adBlock.appendChild(price);

  adBlock.addEventListener('click', () => {
    const modalBack = document.querySelector('.modal-back');
    const modalWindow = document.querySelector('.modal-window');
    modalBack.classList.add('modal-back_active');

    const adBlock = document.createElement('div');
    adBlock.classList.add('card__extended');
    modalWindow.appendChild(adBlock);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    adBlock.appendChild(imgContainer);

    const img = document.createElement('img');
    img.classList.add('card__img');
    img.setAttribute('alt', 'icon');
    img.setAttribute('src', './img/camera-off-svgrepo-com.svg');
    imgContainer.appendChild(img);

    const dateOfApproval = document.createElement('p');
    dateOfApproval.classList.add('date__extended');
    dateOfApproval.textContent = obj.date.split(' ')[0];
    adBlock.appendChild(dateOfApproval);

    const typeOfOperation = document.createElement('h3');
    typeOfOperation.classList.add('purchase-sale');
    typeOfOperation.textContent = obj.type;
    adBlock.appendChild(typeOfOperation);

    const prod = document.createElement('h3');
    typeOfOperation.classList.add('purchase-sale');
    typeOfOperation.textContent = obj.product;
    adBlock.appendChild(prod);

    const description = document.createElement('p');
    description.classList.add('description__extended');
    description.textContent = obj.description;
    adBlock.appendChild(description);

    const price = document.createElement('h3');
    price.classList.add('purchase-sale');
    price.textContent = obj.price;
    adBlock.appendChild(price);

    // menu for delete/fix ads

    const menuButton = document.createElement('div');
    menuButton.classList.add('dot_menu');
    adBlock.appendChild(menuButton);

    const menuWrapper = document.createElement('div');
    menuWrapper.classList.add('menu-wrapper');
    modalWindow.appendChild(menuWrapper);

    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add('delete-btn');
    menuWrapper.appendChild(deleteBtn);

    const fixBtn = document.createElement('div');
    fixBtn.classList.add('fix-btn');
    menuWrapper.appendChild(fixBtn);

    menuButton.addEventListener('click', () => {
      if (!menuWrapper.classList.contains('menu-wrapper_active')) {
        menuWrapper.classList.add('menu-wrapper_active');
      } else {
        menuWrapper.classList.remove('menu-wrapper_active');
      }
    });

    deleteBtn.addEventListener('click', () => {
      const adsWrapper = document.querySelector('.ads');
      const operationOnAd = 'delete';
      const cardForm = document.querySelector('.card__extended');
      const menuWrapper = document.querySelector('.menu-wrapper');
      const modalWindowBack = document.querySelector('.modal-back');

      ajaxDeleteFixAds(obj.id, operationOnAd, '', '', '', '', '', '');

      while (adsWrapper.firstChild) {
        adsWrapper.removeChild(adsWrapper.firstChild);
      }
      
      menuWrapper.remove();
      cardForm.remove();
      modalWindowBack.classList.remove('modal-back_active');

       

      setTimeout(() => {
        ajaxShowMyAds(obj.login);
      }, 1000);
    });

    fixBtn.addEventListener('click', () => {
      const operationOnAd = 'fix';

      menuWrapper.remove();
      adBlock.remove();

      addForm();

      const adsForm = document.querySelector('.ads-form');
      const purchaseInput = document.getElementById('purchase');
      const saleInput = document.getElementById('sale');

      if (obj.type === 'purchase') {
        purchaseInput.checked;
      }
      if (obj.type === 'sale') {
        saleInput.checked;
      }
      const kindOfProductInput = document.getElementById('product');
      kindOfProductInput.value = obj.product;
      const descriptionInput = document.getElementById('description');
      descriptionInput.value = obj.description;
      const priceOfProductInput = document.getElementById('price');
      priceOfProductInput.value = obj.price;

      const submitBtn = document.createElement('button');
      submitBtn.classList.add('button');
      submitBtn.classList.add('fix-ads');
      submitBtn.setAttribute('type', 'button');
      submitBtn.textContent = 'Fix';
      adsForm.appendChild(submitBtn);

      submitBtn.addEventListener('click', () => {
        ajaxDeleteFixAds(obj.id, operationOnAd, obj.login, purchaseInput, saleInput, kindOfProductInput.value, descriptionInput.value, priceOfProductInput.value);
        
        const adsWrapper = document.querySelector('.ads');
        const adsForm = document.querySelector('.ads-form');
        const modalBack = document.querySelector('.modal-back');
        adsForm.remove();
        modalBack.classList.remove('modal-back_active');
        while (adsWrapper.firstChild) {
          adsWrapper.removeChild(adsWrapper.firstChild);
        }
        setTimeout(() => {
          ajaxShowMyAds(obj.login);
        }, 1500);
      })
    });
    closeWindow(adBlock);
  });
}
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

  const typeOfOperation = document.createElement('p');
  typeOfOperation.classList.add('purchase-sale');
  typeOfOperation.textContent = obj.type;
  adBlock.appendChild(typeOfOperation);

  const prod = document.createElement('h3');
  prod.classList.add('card__product');
  prod.textContent = obj.product;
  adBlock.appendChild(prod);

  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = obj.description;
  adBlock.appendChild(description);

  const price = document.createElement('p');
  price.classList.add('purchase-sale');
  price.textContent = obj.price;
  adBlock.appendChild(price);

  adBlock.addEventListener('click', () => {
    const modalBack = document.querySelector('.modal-back');
    const modalWindow = document.querySelector('.modal-window');
    modalBack.classList.add('modal-back_active');

    const body = document.querySelector('body');
    body.classList.add('body_inactive');

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
    prod.classList.add('purchase-sale');
    prod.textContent = obj.product;
    adBlock.appendChild(prod);

    const description = document.createElement('p');
    description.classList.add('description__extended');
    description.textContent = obj.description;
    adBlock.appendChild(description);

    const price = document.createElement('h3');
    price.classList.add('purchase-sale');
    price.textContent = obj.price;
    adBlock.appendChild(price);

    console.log(obj);

    // menu for delete/fix ads

    const menuButton = document.createElement('div');
    menuButton.classList.add('dot_menu');
    adBlock.appendChild(menuButton);

    if (document.cookie.split(';')[0].split('=')[1] !== obj.login) {
      menuButton.remove();
    }

    const menuWrapper = document.createElement('div');
    menuWrapper.classList.add('menu-wrapper');
    modalWindow.appendChild(menuWrapper);

    const deleteBtn = document.createElement('p');
    deleteBtn.textContent = 'delete';
    deleteBtn.classList.add('delete-btn');
    menuWrapper.appendChild(deleteBtn);

    const fixBtn = document.createElement('p');
    fixBtn.textContent = 'fix';
    fixBtn.classList.add('fix-btn');
    menuWrapper.appendChild(fixBtn);

    const rejectedBtn = document.createElement('p');
    rejectedBtn.textContent = 'reject';
    rejectedBtn.classList.add('rejected-btn');
    menuWrapper.appendChild(rejectedBtn);

    const approvedBtn = document.createElement('p');
    approvedBtn.textContent = 'approved';
    approvedBtn.classList.add('approved-btn');
    menuWrapper.appendChild(approvedBtn);

    menuButton.addEventListener('click', () => {
      if (!menuWrapper.classList.contains('menu-wrapper_active')) {
        menuWrapper.classList.add('menu-wrapper_active');
      } else {
        menuWrapper.classList.remove('menu-wrapper_active');
      }

      if (document.cookie.split(';')[3].split('=')[1] === '1' && decodeURIComponent(document.cookie.split(';')[0].split('=')[1]) !== obj.login) {
        deleteBtn.remove();
        fixBtn.remove();
      }
      if (document.cookie.split(';')[3].split('=')[1] !== '1') {
        rejectedBtn.remove();
        approvedBtn.remove();
      }
    });

    deleteBtn.addEventListener('click', () => {
      const adsWrapper = document.querySelector('.ads');
      const operationOnAd = 'delete';
      const cardForm = document.querySelector('.card__extended');
      const menuWrapper = document.querySelector('.menu-wrapper');
      const modalWindowBack = document.querySelector('.modal-back');
      const isModerator = false;

      ajaxDeleteFixAds(obj.id, operationOnAd, '', '', '', '', '', '');

      while (adsWrapper.firstChild) {
        adsWrapper.removeChild(adsWrapper.firstChild);
      }
      
      menuWrapper.remove();
      cardForm.remove();
      modalWindowBack.classList.remove('modal-back_active');
      body.classList.remove('body_inactive');

       

      setTimeout(() => {
        ajaxShowMyAds(obj.login, isModerator);
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
        ajaxDeleteFixAds(obj.id, operationOnAd, purchaseInput, saleInput, kindOfProductInput.value, descriptionInput.value, priceOfProductInput.value);
        
        const adsWrapper = document.querySelector('.ads');
        const adsForm = document.querySelector('.ads-form');
        const modalBack = document.querySelector('.modal-back');
        adsForm.remove();
        modalBack.classList.remove('modal-back_active');

        body.classList.remove('body_inactive');

        const isModerator = false;
      
        while (adsWrapper.firstChild) {
          adsWrapper.removeChild(adsWrapper.firstChild);
        }
        setTimeout(() => {
          ajaxShowMyAds(obj.login, isModerator);
        }, 1500);
      });
    });

    approvedBtn.addEventListener('click', () => {
      const adsWrapper = document.querySelector('.ads');
      const status = 'approved';
      const cardForm = document.querySelector('.card__extended');
      const menuWrapper = document.querySelector('.menu-wrapper');
      const modalWindowBack = document.querySelector('.modal-back');
      const isModerator = true;

      ajaxModeration(obj.id, status);

      while (adsWrapper.firstChild) {
        adsWrapper.removeChild(adsWrapper.firstChild);
      }
      
      menuWrapper.remove();
      cardForm.remove();
      modalWindowBack.classList.remove('modal-back_active');
      body.classList.remove('body_inactive');

      setTimeout(() => {
        ajaxShowMyAds(decodeURIComponent(document.cookie.split(';')[0].split('=')[1]), isModerator);
      }, 1000);
    });

    rejectedBtn.addEventListener('click', () => {
      const adsWrapper = document.querySelector('.ads');
      const status = 'rejected';
      const cardForm = document.querySelector('.card__extended');
      const menuWrapper = document.querySelector('.menu-wrapper');
      const modalWindowBack = document.querySelector('.modal-back');
      isModerator = true;

      ajaxModeration(obj.id, status);

      while (adsWrapper.firstChild) {
        adsWrapper.removeChild(adsWrapper.firstChild);
      }
      
      menuWrapper.remove();
      cardForm.remove();
      modalWindowBack.classList.remove('modal-back_active');
      body.classList.remove('body_inactive');
      
      setTimeout(() => {
        ajaxShowMyAds(decodeURIComponent(document.cookie.split(';')[0].split('=')[1]), isModerator);
      }, 1000);
    });

    closeWindow(adBlock);
  });
}
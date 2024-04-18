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

    const menuButton = document.createElement('div');
    menuButton.classList.add('dot_menu');
    adBlock.appendChild(menuButton);

    let menuWrapper = document.querySelector('.menu-wrapper');
    let deleteBtn = document.querySelector('.delete-btn');
    let fixBtn = document.querySelector('.fix-btn');

    menuButton.addEventListener('click', () => {
      
      if (!menuWrapper) {
        menuWrapper = document.createElement('div');
        menuWrapper.classList.add('menu-wrapper');
        modalWindow.appendChild(menuWrapper);

        deleteBtn = document.createElement('div');
        deleteBtn.classList.add('delete-btn');
        menuWrapper.appendChild(deleteBtn);

        fixBtn = document.createElement('div');
        fixBtn.classList.add('fix-btn');
        menuWrapper.appendChild(fixBtn);

        deleteBtn.addEventListener('click', () => {
          const operation = 'delete';
          ajaxDeleteFixAds(obj.id, operation);
        });

        fixBtn.addEventListener('click', () => {
          const operation = 'fix';
          menuWrapper.remove();
          adBlock.remove();
          createForm(modalWindow);
          ajaxDeleteFixAds(obj.id, operation);
          // add data from object to createForm function
        });
      } else {
        menuWrapper.remove();
      }
    });
    closeWindow(adBlock);
  });
}
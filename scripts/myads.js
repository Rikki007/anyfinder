function lookForAds(obj) {
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
}
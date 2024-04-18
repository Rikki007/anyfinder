function ajaxDeleteFixAds(id, operationType) {
  const data = {
    id: id,
    operation: operationType,
  }
  const request = new XMLHttpRequest();
  if (data.operation === 'delete') {
    request.open('POST', './php/deleteFix.php', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', () => {
      if (request.status >= 200 && request.status < 300) {
        const adsWrapper = document.querySelector('.ads');
        while (adsWrapper.firstChild) {
          adsWrapper.removeChild(adsWrapper.firstChild);
        }
        const cardForm = document.querySelector('.card__extended');
        const menuWrapper = document.querySelector('.menu-wrapper');
        const modalWindowBack = document.querySelector('.modal-back');
        menuWrapper.remove();
        cardForm.remove();
        modalWindowBack.classList.remove('modal-back_active');
        ajaxShowMyAds(document.cookie.split(';')[0].split('=')[1]);
      } else {
        console.error('request faild: ' + request.status);
      }
    });
    request.addEventListener('error', () => {
      console.error('request faild');
    });
    request.send(JSON.stringify(data));
  }
}
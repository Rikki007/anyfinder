function ajaxShowMyAds(login, isModerator) {
  const data = {
    login: login,
    isModerator: isModerator,
  }
  const request = new XMLHttpRequest();
  request.open('POST', './php/myAdsResponse.php', true);
  request.setRequestHeader('content-Type', 'application/json');
  request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 300) {
      const arrayAds = JSON.parse(request.response);

      for (let i = 0; i < arrayAds.length; i += 1) {
        myAds(arrayAds[i]);
      }

      const adBlock = document.querySelectorAll('.card');
      
      adBlock.forEach((item, ind) => {
        const adsStatus = document.createElement('div');
        adsStatus.classList.add('ads-status');
        item.appendChild(adsStatus);
        
        const statusDescription = document.createElement('p');
        statusDescription.classList.add('ads-status__description');
        statusDescription.textContent = `status: ${arrayAds[ind].status}`;
        adsStatus.appendChild(statusDescription);
      
        const statusIcon = document.createElement('div');
        if (arrayAds[ind].status === 'moderation') {
          statusIcon.classList.add('ads-status__moderation');
        }
        if (arrayAds[ind].status === 'approved') {
          statusIcon.classList.add('ads-status__approved');
        }
        if (arrayAds[ind].status === 'rejected') {
          statusIcon.classList.add('ads-status__rejected');
        }
        adsStatus.appendChild(statusIcon);
      });

    }else{
      console.error('request faild: ' + request.status);
    }
  });
  request.addEventListener('error', () => {
    console.error('request faild');
  });
  request.send(JSON.stringify(data));
}
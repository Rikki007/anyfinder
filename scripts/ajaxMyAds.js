function ajaxShowMyAds(login, isModerator) {
  const data = {
    login: login,
    isModerator: isModerator,
  }
  const request = new XMLHttpRequest();
  request.open('POST', './php/myAdsResponse.php', true);
  request.setRequestHeader('content-Type', 'application/json');
  request.addEventListener('load', ()=> {
    if (request.status >= 200 && request.status < 300) {
      const arrayAds = JSON.parse(request.response);
      console.log(arrayAds);
      for (let i = 0; i < arrayAds.length; i += 1) {
        myAds(arrayAds[i]);
      }
    }else{
      console.error('request faild: ' + request.status);
    }
  });
  request.addEventListener('error', () => {
    console.error('request faild');
  });
  request.send(JSON.stringify(data));
}
const loadAds = () => {
  const request = new XMLHttpRequest();
  request.open('POST', './php/loader.php', true);
  request.setRequestHeader('Content-Type', 'text/plain ');
  request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 300) {
      const arrayAds = JSON.parse(request.response);
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
  request.send();
}
document.addEventListener('DOMContentLoaded', loadAds);
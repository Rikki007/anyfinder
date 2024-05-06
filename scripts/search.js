const button = document.querySelector('.search__button');
const field = document.querySelector('.search__field');

function searchAds() {
  const value = field.value.toLowerCase();

  const request = new XMLHttpRequest;
  request.open('POST', './php/search.php', true);
  request.setRequestHeader('Content-Type', 'text.plain');

  request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 300) {

      const adsWrapper = document.querySelector('.ads');
      const arrayAds = JSON.parse(request.response);

      while (adsWrapper.firstChild) {
        adsWrapper.removeChild(adsWrapper.firstChild);
      }

      for (let i = 0; i < arrayAds.length; i += 1) {
        myAds(arrayAds[i]);
      }

    } else {

      console.error('request faild: ' + request.status);

    }
  });

  request.addEventListener('error', () => {

    console.error('request faild');

  });

  request.send(value);

}

button.addEventListener('click', searchAds);
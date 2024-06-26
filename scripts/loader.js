const loadMore = document.querySelector('.add-button');
const allAds = document.querySelector('.all-ads');
const search = document.querySelector('.search');

const loadAds = () => {

  const container = document.querySelector('.ads');
  let containerChildren = container.children.length;

  const request = new XMLHttpRequest();
  request.open('POST', './php/loader.php', true);
  request.setRequestHeader('Content-Type', 'text/plain ');
  request.addEventListener('load', () => {

    if (request.status >= 200 && request.status < 300) {

      if (request.response === 'ads is not exist') {
        alert('there are no more ads');
      }

      const arrayAds = JSON.parse(request.response);

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

  request.send(containerChildren);

}

allAds.addEventListener('click', () => {

  const adsWrapper = document.querySelector('.ads');
  adsWrapper.innerHTML = '';

  if (search.classList.contains('add-button_disactive')) {
    search.classList.remove('add-button_disactive');
  }

  if (loadMore.classList.contains('add-button_disactive')) {
    loadMore.classList.remove('add-button_disactive');
  }

  loadAds();
});

loadMore.addEventListener('click', loadAds);

document.addEventListener('DOMContentLoaded', loadAds);
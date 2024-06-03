// sort menu
const showBtn = document.querySelector('.sort-shower');
const menu = document.querySelector('.sort-fields');
let isOpen = false;
const searchFunc = document.querySelector('.search');
const addBtn = document.querySelector('.add-button');

const showMenu = () => {
  showBtn.classList.add('sort-shower_rotate');
  menu.classList.add('sort-fields_active');
  isOpen = true;
  searchFunc.classList.add('search_disabled');
  addBtn.classList.add('add-button_disactive');
}

const closeMenu = () => {
  showBtn.classList.remove('sort-shower_rotate');
  menu.classList.remove('sort-fields_active');
  isOpen = false;
  searchFunc.classList.remove('search_disabled');
  addBtn.classList.remove('add-button_disactive');
}

showBtn.addEventListener('click', () => {

  if (isOpen) {

    closeMenu();
    
  } else {

    showMenu();

  }

});

// radio buttons logic

const newDate = document.querySelector('.date-new__input');
const oldDate = document.querySelector('.date-old__input');
const typePurchase = document.querySelector('.type-purchase__input');
const typeSale = document.querySelector('.type-sale__input');
const sortBtn = document.querySelector('.sorting');

newDate.addEventListener('click', () => {

  oldDate.checked = false;

});

oldDate.addEventListener('click', () => {

  newDate.checked = false;

});

typePurchase.addEventListener('click', () => {

  typeSale.checked = false;

});

typeSale.addEventListener('click', () => {

  typePurchase.checked = false;

});

// request to server

sortBtn.addEventListener('click', () => {

  const obj = {
    date: 'empty',
    type: 'empty',
  };

  if (newDate.checked) {
    obj.date = 'new';
  }

  if (oldDate.checked) {
    obj.date = 'old';
  }

  if (typeSale.checked) {
    obj.type = 'sale';
  }

  if (typePurchase.checked) {
    obj.type = 'purchase';
  }

  const request = new XMLHttpRequest;
  request.open('POST', './php/sort.php', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 300) {

      const container = document.querySelector('.ads');
      container.innerHTML = '';

      const arrayAds = JSON.parse(request.response);

      for (let i = 0; i < arrayAds.length; i += 1) {

        myAds(arrayAds[i]);

      }

    } else {

      console.error('request faild:' + request.status);

    }
  });

  request.addEventListener('error', () => {
    console.error('request faild.');
  });
  request.send(JSON.stringify(obj));

});
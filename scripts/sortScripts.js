// sort menu
const showBtn = document.querySelector('.sort-shower');
const menu = document.querySelector('.sort-fields');
let isOpen = false;

const showMenu = () => {
  showBtn.classList.add('sort-shower_rotate');
  menu.classList.add('sort-fields_active');
  isOpen = true; 
}

const closeMenu = () => {
  showBtn.classList.remove('sort-shower_rotate');
  menu.classList.remove('sort-fields_active');
  isOpen = false;
}

showBtn.addEventListener('click', () => {

  if (isOpen) {

    closeMenu();
    
  } else {

    showMenu();

  }

});

// radio buttons logic

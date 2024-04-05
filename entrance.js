function entrance() {
  if (document.cookie) {
    const navList = document.querySelector('.navlist');
    const navItem = document.querySelectorAll('.navlist__item');
    navItem.forEach((item) => {
      if (item.classList.contains('log-in') || item.classList.contains('regist')) {
        item.classList.add('navlist__item_disabled');
      }
    });
  
    const logOut = document.createElement('li');
    logOut.classList.add('navlist__item');
    logOut.classList.add('log-out');
    logOut.textContent = 'Log out';
    navList.appendChild(logOut);
    
    const userProfile = document.createElement('li');
    userProfile.classList.add('navlist__item');
    userProfile.classList.add('user-profile');
    userProfile.textContent = 'Profile';
    navList.appendChild(userProfile);
  }
}

entrance();
function entrance() {
  const navList = document.querySelector('.navlist');
  const navItem = document.querySelectorAll('.navlist__item');
  const modalBack = document.querySelector('.modal-back');
  const modalWindow = document.querySelector('.modal-window');
  if (document.cookie) {
    navItem.forEach((item) => {
      item.classList.add('navlist__item_disabled');
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

    // user profile window

    userProfile.addEventListener('click', () => {
      modalBack.classList.add('modal-back_active');
      cookieValues = document.cookie.split(';').map(item => item.split('=')[1]);

      const profBlock = document.createElement('div');
      profBlock.classList.add('profile-block');
      modalWindow.appendChild(profBlock);
      
      const profName = document.createElement('h2');
      profName.classList.add('profile-block__name');
      profName.textContent = cookieValues[0];
      profBlock.appendChild(profName);

      const profAvatar = document.createElement('div');
      profAvatar.classList.add('profile-block__avatar');
      profAvatar.classList.add(`block${cookieValues[1]}`);
      profBlock.appendChild(profAvatar);

      const myAds = document.createElement('button');
      myAds.setAttribute('type', 'button');
      myAds.classList.add('button');
      myAds.textContent = 'My abs';
      modalWindow.appendChild(myAds);

      const createAdvertisement = document.createElement('div');
      createAdvertisement.classList.add('create-advertisement');
      modalWindow.appendChild(createAdvertisement);
    });

    // delete cookies and elements of navbar when the client is log out

    logOut.addEventListener('click', () => {
      document.cookie = "username=; max-age=-1; path=/";
      document.cookie = "avatar=; max-age=-1; path=/";
      console.log(document.cookie);
      logOut.remove();
      userProfile.remove();

      navItem.forEach((item) => {
        item.classList.remove('navlist__item_disabled');
      });
    });
  }
}

entrance();
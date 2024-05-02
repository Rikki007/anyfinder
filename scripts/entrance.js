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

    if (document.cookie.split(';')[3].split('=')[1] === '1') {
      const moderationBtn = document.createElement('li');
      moderationBtn.classList.add('navlist__item');
      moderationBtn.classList.add('moderation-btn');
      moderationBtn.textContent = 'Moderation';
      navList.appendChild(moderationBtn);
      
      moderationBtn.addEventListener('click', () => {
        const adsWrapper = document.querySelector('.ads');
        const isModerator = true;
        while (adsWrapper.firstChild) {
          adsWrapper.removeChild(adsWrapper.firstChild);
        }
        ajaxShowMyAds(decodeURIComponent(document.cookie.split(';')[0].split('=')[1]), isModerator);
      });
    }

    const allAds = document.createElement('li');
    allAds.classList.add('navlist__item');
    allAds.classList.add('all-ads');
    allAds.textContent = 'Ads';
    navList.appendChild(allAds);

    // user profile window

    userProfile.addEventListener('click', () => {
      modalBack.classList.add('modal-back_active');
      cookieValues = document.cookie.split(';').map(item => item.split('=')[1]);

      const profileWrapper = document.createElement('div');
      profileWrapper.classList.add('profile-wrapper');
      modalWindow.appendChild(profileWrapper);

      const profBlock = document.createElement('div');
      profBlock.classList.add('profile-block');
      profileWrapper.appendChild(profBlock);

      const profAvatar = document.createElement('div');
      profAvatar.classList.add('profile-block__avatar');
      profAvatar.classList.add(`block-${cookieValues[1]}`);
      profBlock.appendChild(profAvatar);

      const profName = document.createElement('h2');
      profName.classList.add('profile-block__name');
      profName.textContent = decodeURIComponent(cookieValues[0].split('%20').join(' '));
      profBlock.appendChild(profName);

      const myAds = document.createElement('button');
      myAds.setAttribute('type', 'button');
      myAds.classList.add('button');
      myAds.textContent = 'My abs';
      profileWrapper.appendChild(myAds);

      const createAdvertisement = document.createElement('div');
      createAdvertisement.classList.add('create-advertisement');
      profileWrapper.appendChild(createAdvertisement);

      const adsDesc = document.createElement('p');
      adsDesc.textContent = 'Create an advertisement -->';
      adsDesc.classList.add('field');
      createAdvertisement.appendChild(adsDesc);

      const adsImg = document.createElement('img');
      adsImg.src = './img/advertisement.svg';
      adsImg.alt = 'icon';
      adsImg.classList.add('advertisement-img');
      createAdvertisement.appendChild(adsImg);

      myAds.addEventListener('click', () => {
        const login = decodeURIComponent(document.cookie.split(';')[0].split('=')[1]);
        const isModerator = false;     
        modalBack.classList.remove('modal-back_active');
        profileWrapper.remove();
        const adsWrapper = document.querySelector('.ads');
        while (adsWrapper.firstChild) {
          adsWrapper.removeChild(adsWrapper.firstChild);
        }
        ajaxShowMyAds(login, isModerator);
      });

      closeWindow(profileWrapper);

      // creating ads
      adsImg.addEventListener('click', () => {
        profileWrapper.remove();
        adsFormCreate();
      });

    });

    // delete cookies and elements of navbar when the client is log out

    logOut.addEventListener('click', () => {
      document.cookie = "username=; max-age=-1; path=/";
      document.cookie = "avatar=; max-age=-1; path=/";
      document.cookie = "admin=; max-age=-1; path=/";
      document.cookie = "moderator=; max-age=-1; path=/";
      logOut.remove();
      userProfile.remove();
      allAds.remove();

      const moderationBtn = document.querySelector('.moderation-btn');
      if (moderationBtn) {
        moderationBtn.remove();
      }
      
      navItem.forEach((item) => {
        item.classList.remove('navlist__item_disabled');
      });

      const adsWrapper = document.querySelector('.ads');

      while (adsWrapper.firstChild) {
        adsWrapper.removeChild(adsWrapper.firstChild);
      }

      loadAds();
    });

    allAds.addEventListener('click', () => {
      const adsWrapper = document.querySelector('.ads');

      while (adsWrapper.firstChild) {
        adsWrapper.removeChild(adsWrapper.firstChild);
      }

      loadAds();
    })
  }
}

entrance();
function ajaxUsers () {

  const request = new XMLHttpRequest();
  request.open('GET', './php/users.php', true);

  request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 300) {
      
      userList = JSON.parse(request.response);
      const adsWrapper = document.querySelector('.ads');
      adsWrapper.innerHTML = '';


      userList.forEach((item) => {

        const userWrapper = document.createElement('div');
        userWrapper.classList.add('user-wrapper');
        adsWrapper.appendChild(userWrapper);

        const titleBlock = document.createElement('div');
        titleBlock.classList.add('title-block');
        userWrapper.appendChild(titleBlock);

        const avatar = document.createElement('div');
        avatar.classList.add('block');
        avatar.classList.add(`block-${item.avatar}`);
        titleBlock.appendChild(avatar);

        const name = document.createElement('p');
        name.classList.add('field');
        name.textContent = item.login;
        titleBlock.appendChild(name);

        const subTitleBlock = document.createElement('div');
        subTitleBlock.classList.add('subtitle-block');
        userWrapper.appendChild(subTitleBlock);

        const id = document.createElement('p');
        id.classList.add('field');
        id.textContent = `id: ${item.id};`;
        subTitleBlock.appendChild(id);

        const moderator = document.createElement('p');
        moderator.classList.add('field');
        let mStatus;
        if (item.moderator === '1') {
          mStatus = 'Yes';
        }

        if (item.moderator === '0') {
          mStatus = 'No';
        }

        moderator.textContent = `Moderator: ${mStatus};`;
        subTitleBlock.appendChild(moderator);

        const administrator = document.createElement('p');
        administrator.classList.add('field');
        let aStatus;
        if (item.admin === '1') {
          aStatus = 'Yes';
        }

        if (item.admin === '0') {
          aStatus = 'No';
        }

        administrator.textContent = `Administrator: ${aStatus};`;
        subTitleBlock.appendChild(administrator);

        const modalBack = document.querySelector('.modal-back');
        const modalWindow = document.querySelector('.modal-window');

        userWrapper.addEventListener('click', () => {

          modalBack.classList.add('modal-back_active');
          
          const eventsList = document.createElement('div');
          eventsList.classList.add('events-list');
          modalWindow.appendChild(eventsList);
          closeWindow(eventsList);

          const userAds = document.createElement('div');
          userAds.classList.add('options-block');
          eventsList.appendChild(userAds);
          const userAdsDescription = document.createElement('p');
          userAdsDescription.classList.add('field');
          userAdsDescription.textContent = 'show ads';
          userAds.appendChild(userAdsDescription);
          const userAdsBtn = document.createElement('button');
          userAdsBtn.classList.add('button');
          userAdsBtn.textContent = 'show';
          userAds.appendChild(userAdsBtn);

          const userToModerator = document.createElement('div');
          userToModerator.classList.add('options-block');
          eventsList.appendChild(userToModerator);
          const userToModeratorDescription = document.createElement('p');
          userToModeratorDescription.classList.add('field');
          userToModeratorDescription.textContent = 'moderator rights';
          userToModerator.appendChild(userToModeratorDescription);
          const userToModeratorBtn = document.createElement('button');
          userToModeratorBtn.classList.add('button');

          if (item.moderator === '1') {
            userToModeratorBtn.textContent = 'take';
          }

          if (item.moderator === '0') {
            userToModeratorBtn.textContent = 'give';
          }

          userToModerator.appendChild(userToModeratorBtn);

          const userToAdmin = document.createElement('div');
          userToAdmin.classList.add('options-block');
          eventsList.appendChild(userToAdmin);
          const userToAdminDescription = document.createElement('p');
          userToAdminDescription.classList.add('field');
          userToAdminDescription.textContent = 'admin rights';
          userToAdmin.appendChild(userToAdminDescription);
          const userToAdminBtn = document.createElement('button');
          userToAdminBtn.classList.add('button');

          if (item.admin === '1') {
            userToAdminBtn.textContent = 'take';
          }

          if (item.admin === '0') {
            userToAdminBtn.textContent = 'give';
          }

          userToAdmin.appendChild(userToAdminBtn);

          userAdsBtn.addEventListener('click', () => {

            const adsWrapper = document.querySelector('.ads');
            const isModerator = false;

            modalBack.classList.remove('modal-back_active');
            eventsList.remove();
            adsWrapper.innerHTML = '';
            ajaxShowMyAds(item.login, isModerator);

          });

          userToModeratorBtn.addEventListener('click', () => {

            const data = {};
            data.login = item.login;
            data.type = 'moderator';
            data.action = eventsList.children[1].lastChild.textContent;
            console.log(data);

            modalBack.classList.remove('modal-back_active');
            eventsList.remove();

            const request = new XMLHttpRequest();
            request.open('POST', './php/rights.php', true);
            request.setRequestHeader("Content-Type", "application/json");

            request.addEventListener('load', () => {
              if (request.status >= 200 && request.status < 300) {
                console.log(request.response);
              } else {
                console.error('request faild: ' + request.status);
              }
            });

            request.addEventListener('error', () => {
              console.error('request faild');
            });

            request.send(JSON.stringify(data));

          });

        });


      });

    } else {
      console.error('request faild: ' + request.status);
    }
  });

  request.addEventListener('error', () => {
    console.error('request faild');
  });

  request.send();

}
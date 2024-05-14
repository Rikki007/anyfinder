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
          
          const titleBlock = document.createElement('div');
          titleBlock.classList.add('title-block');
          modalWindow.appendChild(titleBlock);

          const avatar = document.createElement('div');
          avatar.classList.add('block');
          avatar.classList.add(`block-${item.avatar}`);
          titleBlock.appendChild(avatar);

          const name = document.createElement('p');
          name.classList.add('field');
          name.textContent = item.login;
          titleBlock.appendChild(name);


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
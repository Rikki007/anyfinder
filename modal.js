(function() {
  // window
  const regBtn = document.querySelector('.regist');
  const modalWindowBack = document.querySelector('.modal-back');
  const modalWindow = document.querySelector('.modal-window');
  const regObj = {
    NameLabel1: 'Create your login',
    NameLabel2: 'Create your password',
    ButtonTextContent: 'Register',
    offerTextContent: 'If you already have an account, you can log in',
    link: 'login-link',
  };

  logObj = {
    NameLabel1: 'Enter your login',
    NameLabel2: 'Enter your password',
    ButtonTextContent: 'Login',
    offerTextContent: 'If you do not an account yet, you can register',
    link: 'register-link',
  };

  const regWindow = (obj) => {
    modalWindowBack.classList.add('modal-back_active');
    const regForm = document.createElement('form');
    regForm.classList.add('form');
    regForm.action = '#';
    modalWindow.appendChild(regForm);

    const loginContainer = document.createElement('div');
    loginContainer.classList.add('fields');
    regForm.appendChild(loginContainer);

    const passwordContainer = document.createElement('div');
    passwordContainer.classList.add('fields');
    regForm.appendChild(passwordContainer);

    const labelLogin = document.createElement('label');
    labelLogin.classList.add('field');
    labelLogin.setAttribute('for', 'login');
    labelLogin.textContent = obj.NameLabel1;
    loginContainer.appendChild(labelLogin);

    const inputLogin = document.createElement('input');
    inputLogin.classList.add('field');
    inputLogin.classList.add('input-style');
    inputLogin.setAttribute('id', 'login');
    inputLogin.setAttribute('type', 'text');
    inputLogin.setAttribute('placeholder', 'Vanya1993');
    inputLogin.setAttribute('required', '');
    loginContainer.appendChild(inputLogin);

    const labelLogPas = document.createElement('label');
    labelLogPas.classList.add('field');
    labelLogPas.setAttribute('for', 'password');
    labelLogPas.textContent = obj.NameLabel2;
    passwordContainer.appendChild(labelLogPas);

    const inputLogPas = document.createElement('input');
    inputLogPas.classList.add('field');
    inputLogPas.classList.add('input-style');
    inputLogPas.setAttribute('id', 'password');
    inputLogPas.setAttribute('type', 'text');
    inputLogPas.setAttribute('placeholder', 'qwerty');
    inputLogPas.setAttribute('required', '');
    passwordContainer.appendChild(inputLogPas);

    if (obj.ButtonTextContent === 'Register') {
      const avatarContainer = document.createElement('div');
      avatarContainer.classList.add('avatar-container');
      regForm.appendChild(avatarContainer);

      const avaDes = document.createElement('p');
      avaDes.classList.add('field');
      avaDes.textContent = 'Choose your avatar';
      avatarContainer.appendChild(avaDes);

      const avaWrap = document.createElement('div');
      avaWrap.classList.add('avatar-wrapper');
      avatarContainer.appendChild(avaWrap);

      for (let i = 0; i < 8; i += 1 ) {
        const block = document.createElement('div');
        block.classList.add('block-item');
        block.classList.add(`block-${i}`);
        avaWrap.appendChild(block);
      }
    }

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('button');
    submitBtn.classList.add('submit-button');
    submitBtn.setAttribute('type', 'button');
    submitBtn.textContent = obj.ButtonTextContent;
    regForm.appendChild(submitBtn);

    const logBlock = document.createElement('div');
    logBlock.classList.add('login-block');
    regForm.appendChild(logBlock);

    const logOffer = document.createElement('p');
    logOffer.classList.add('login-offer');
    logOffer.textContent = obj.offerTextContent;
    logBlock.appendChild(logOffer);

    const logMenuBtn = document.createElement('button');
    logMenuBtn.classList.add(obj.link);
    logMenuBtn.classList.add('button');
    logMenuBtn.setAttribute('type', 'button');
    logMenuBtn.textContent = '-->';
    logBlock.appendChild(logMenuBtn);

    // close of window
    const closeWindow = () => {
      const profileWrapper = document.querySelector('.profile-wrapper');
      const adsForm = document.querySelector('.ads-form');
      modalWindowBack.classList.remove('modal-back_active');
      regForm.remove();
      if (profileWrapper) {
        profileWrapper.remove();
      }
      if (adsForm) {
        adsForm.remove();
      }
    }

    exitBtn = document.querySelector('.exit-button');

    exitBtn.addEventListener('click', closeWindow);
    modalWindowBack.addEventListener('click', (event) => {
      if (event.target === modalWindowBack) {
        closeWindow();
      }
    });

    const transition = document.querySelectorAll('.button');

    transition.forEach((item) => {
      if (item.classList.contains('login-link')) {
        item.addEventListener('click', () => {
          regForm.remove();
          regWindow(logObj);
        });
      }
      if (item.classList.contains('register-link')) {
        item.addEventListener('click', () => {
          regForm.remove();
          regWindow(regObj);
        });
      }
    });

    // choose of avatar logic

    let avatarNum;

    const avatarBlocks = document.querySelectorAll('.block-item');
    avatarBlocks.forEach((item, index) => {
      item.addEventListener('click', () => {
        avatarBlocks.forEach((block) => block.classList.remove('block-item_activ'));
        item.classList.add('block-item_activ');
        avatarNum = index;
      });
    });


    // submit data with help of ajax

    submitBtn.addEventListener('click', () => {
      const login = document.getElementById('login');
      const password = document.getElementById('password');
      let loginVal = login.value;
      let passwordVal = password.value;
      if (loginVal.length <= 3) {
        alert('Login is too short. It must be longer than 3 characters.');
      }
      if (submitBtn.textContent === 'Register' && avatarNum === undefined) {
        alert('Choose the avatar');
      }
      if (passwordVal.length <= 3) {
        alert('Password is too short. It must be longer than 3 characters.');
      } else if (loginVal.length > 3 && passwordVal.length > 3) {

        if (submitBtn.textContent === 'Register') {
          const typeOfAction = 'r';
          ajaxReg(loginVal, passwordVal, typeOfAction, avatarNum);
          closeWindow();
          entrance();
        }
        if (submitBtn.textContent === 'Login') {
          const typeOfAction = 'l';
          avatarNum = 'default';
          ajaxReg(loginVal, passwordVal, typeOfAction, avatarNum);
          closeWindow();
          entrance();
        }

      }
    });
    entrance();
    
  }

  regBtn.addEventListener('click', () => regWindow(regObj));

  // login window
  const logBtn = document.querySelector('.log-in');

  logBtn.addEventListener('click', () => regWindow(logObj));
})();
(function() {
  // register window
  const regBtn = document.querySelector('.register');
  const modalWindowBack = document.querySelector('.modal-back');
  const modalWindow = document.querySelector('.modal-window');
  const regObj = {
    NameLabel1: 'Create your login',
    NameLabel2: 'Create your password',
    ButtonClass: 'register',
    ButtonTextContent: 'Register',
    offerTextContent: 'If you already have an account, you can log in',
    link: 'login-link',
  };

  logObj = {
    NameLabel1: 'Enter your login',
    NameLabel2: 'Enter your password',
    ButtonClass: 'login',
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

    const exitBtn = document.createElement('div');
    exitBtn.classList.add('exit-button');
    regForm.appendChild(exitBtn);

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

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('button');
    submitBtn.classList.add(obj.ButtonClass);
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

    // close of reg window
    const closeWindow = () => {
      modalWindowBack.classList.remove('modal-back_active');
      regForm.remove();
    }
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
  }

  regBtn.addEventListener('click', () => regWindow(regObj));

  // login window
  const logBtn = document.querySelector('.log-in');

  logBtn.addEventListener('click', () => regWindow(logObj));
})();
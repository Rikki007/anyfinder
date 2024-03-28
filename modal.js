(function() {
  const logBtn = document.querySelector('.log-in');
  const regBtn = document.querySelector('.register');
  const modalWindowBack = document.querySelector('.modal-back');
  const modalWindow = document.querySelector('.modal-window')
  const regWindow = () => {
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
    labelLogin.textContent = 'Enter your login';
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
    labelLogPas.textContent = 'Enter your password';
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
    submitBtn.setAttribute('type', 'submit');
    submitBtn.textContent = 'Log in';
    regForm.appendChild(submitBtn);

    // close of reg window
    exitBtn.addEventListener('click', () => {
      modalWindowBack.classList.remove('modal-back_active');
      regForm.remove();
    });
  }
  // logBtn.addEventListener('click', );
  regBtn.addEventListener('click', regWindow);
  

  
})();
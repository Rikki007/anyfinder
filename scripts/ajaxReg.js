function ajaxReg(login, password, typeOfAction, avatarNum) {
  const formData = {
    login: login,
    password: password,
    action: typeOfAction,
    avatarNum: avatarNum,
  };
  const request = new XMLHttpRequest();
  request.open('POST', './php/checkAuth.php', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 300) {
      if (request.responseText == "New record created successfully" || request.responseText == "User is founded") {
        entrance();
      } else if (request.responseText.includes('Duplicate')) {
        alert(' user with this login already exist try another login.');
      } else if (request.responseText === 'user not found') {
        alert('Wrong login or password.');
      }
    } else {
      console.error('request faild: ' + request.status);
    }
  });
  request.addEventListener('error', () => {
    console.error('request faild');
  });
  request.send(JSON.stringify(formData));
}
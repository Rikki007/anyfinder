function ajax(login, password, typeOfAction) {
  const formData = {
    login: login,
    password: password,
    action: typeOfAction,
  };
  const request = new XMLHttpRequest();
  request.open('POST', 'checkAuth.php', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 300) {
      if (request.responseText == "New record created successfully") {
        entrance();
      } else if (request.responseText.includes('Duplicate')) {
        alert(' user with this login already exist try new login');
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
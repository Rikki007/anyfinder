function ajaxModeration (id, status) {
  const data = {
    id: id,
    status: status,
  }

  const request = new XMLHttpRequest();
  request.open('POST', './php/moderation.php', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 300) {
      console.log(data);
    } else {
      console.error('request faild: ' + request.status);
    }
  });
  request.addEventListener('error', () => {
    console.error('request faild');
  });
  request.send(JSON.stringify(data));
}
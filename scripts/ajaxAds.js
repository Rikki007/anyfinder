function ajaxAds(login, purchaseRadio, saleRadio, product, description, priceProd) {
  let operationType;
  if (purchaseRadio.checked) {
    operationType = 'purchase';
  }
  if (saleRadio.checked) {
    operationType = 'sale';
  }
  prod = product.value;
  descr = description.value;
  price = priceProd.value;
  const adsData = {
    login: login,
    operation: operationType,
    product: prod,
    description: descr,
    price: price,
  }

  const request = new XMLHttpRequest;
  request.open('POST', './php/adsproc.php', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 300) {
      if (request.responseText === 'Advertisement is created successfully') {
        alert('Your ad has been sent to the server and is awaiting moderation.');
      }
      if (request.responseText === 'Data too long for column \'price\' at row 1') {
        alert('Data in row price is too long it must be less then eight characters.');
      }
    } else {
      console.error('request faild:' + request.status);
    }
  });
  request.addEventListener('error', () => {
    console.error('request faild.');
  });
  request.send(JSON.stringify(adsData));
}
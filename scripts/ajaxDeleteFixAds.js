function ajaxDeleteFixAds(id, operationOnAd, login, purchaseRadio, saleRadio, prod, descr, price) {
  let operationType;
  if (operationOnAd === 'fix') {
    
    if (purchaseRadio.checked) {
      operationType = 'purchase';
    }
    if (saleRadio.checked) {
      operationType = 'sale';
    }
  }
  
  const data = {
    id: id,
    operationOnAd: operationOnAd,
    operation: operationType,
    product: prod,
    description: descr,
    price: price,
  }
  const request = new XMLHttpRequest();
  request.open('POST', './php/deleteFix.php', true);
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
/**

function updateCaseNumber(product, price, isIncreasing) {


  const caseInput = document.getElementById(product + "-number");

  let caseNumber = caseInput.value;
  
  if (isIncreasing == true) {
    caseNumber = parseInt(caseNumber) + 1;
  } else if (caseNumber > 0) {
    caseNumber = parseInt(caseNumber) - 1;
  }

  caseInput.value = caseNumber;

  // update case total
  const caseTotal = document.getElementById(product + "-total");
  caseTotal.innerText = caseNumber * price;
}

document.getElementById("case-plus").addEventListener("click", function () {
  updateCaseNumber('case', 59, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateCaseNumber('case', 59, false);
});

document.getElementById("phone-plus").addEventListener("click", function () {
  updateCaseNumber('phone', 1219, true);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updateCaseNumber('phone', 1219, false);
});

*/

/** 
document.getElementById("phone-plus").addEventListener("click", function () {
    const phoneInput = document.getElementById("phone-number");
    const phoneCount = parseInt(phoneInput.value);
    const phoneNewCount = phoneCount + 1;
    phoneInput.value = phoneNewCount;









});
*/





//when phone plus button click
document.getElementById("phone-plus").addEventListener("click", function () {
  
  //phone number
  const phoneNumber = parseInt(document.getElementById("phone-number").value);
  document.getElementById("phone-number").value = phoneNumber + 1;

  
  //phone price
  document.getElementById('phone-price').innerText = (phoneNumber + 1) * 1219;

  //sub-total
  const phonePrice = parseInt((document.getElementById("phone-price").innerText));
  const casePrice = parseInt((document.getElementById("case-price").innerText));
  document.getElementById("sub-total").innerText = phonePrice + casePrice;

  //total
  const subTotal = parseInt(document.getElementById("sub-total").innerText);
  const tax = parseInt(document.getElementById("tax").innerText);
  document.getElementById("total").innerText = subTotal + tax;

});



//when case plus button click
document.getElementById("case-plus").addEventListener("click", function () {
  
  //case number
  const caseNumber = parseInt(document.getElementById("case-number").value);
  document.getElementById("case-number").value = caseNumber + 1;

  //case price
  document.getElementById('case-price').innerText = (caseNumber + 1) * 59;

   //sub-total
   const phonePrice = parseInt((document.getElementById("phone-price").innerText));
   const casePrice = parseInt((document.getElementById("case-price").innerText));
   document.getElementById("sub-total").innerText = phonePrice + casePrice;
 
   //total
   const subTotal = parseInt(document.getElementById("sub-total").innerText);
   const tax = parseInt(document.getElementById("tax").innerText);
   document.getElementById("total").innerText = subTotal + tax;
});



//when phone minus button click
document.getElementById("phone-minus").addEventListener("click", function () {
  
  //case number
  const phoneNumber = parseInt(document.getElementById("phone-number").value);

  
  if (phoneNumber > 0) {
    document.getElementById("phone-number").value = phoneNumber - 1;

  //phone price
  document.getElementById('phone-price').innerText = (phoneNumber - 1) * 1219; 
  }
  

  //sub-total
  const phonePrice = parseInt((document.getElementById("phone-price").innerText));
  const casePrice = parseInt((document.getElementById("case-price").innerText));
  document.getElementById("sub-total").innerText = phonePrice + casePrice;

  //total
  const subTotal = parseInt(document.getElementById("sub-total").innerText);
  const tax = parseInt(document.getElementById("tax").innerText);
  document.getElementById("total").innerText = subTotal + tax;
});



//when case minus button click
document.getElementById("case-minus").addEventListener("click", function () {
  
  //case number
  const caseNumber = parseInt(document.getElementById("case-number").value);

  
  if (caseNumber > 0) {
    document.getElementById("case-number").value = caseNumber - 1;

  //case price
  document.getElementById('case-price').innerText = (caseNumber - 1) * 59; 
  }
  

  //sub-total
  const phonePrice = parseInt((document.getElementById("phone-price").innerText));
  const casePrice = parseInt((document.getElementById("case-price").innerText));
  document.getElementById("sub-total").innerText = phonePrice + casePrice;

  //total
  const subTotal = parseInt(document.getElementById("sub-total").innerText);
  const tax = parseInt(document.getElementById("tax").innerText);
  document.getElementById("total").innerText = subTotal + tax;
});








/*
Bast vaiya

//...........................................................................
//...............HANDLE PHONE INCREASE AND DECREASE..........................


document.getElementById('phone-plus').addEventListener('click', function () {
  updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
  updateProductNumber('phone', 1219, false);
})


//.................HANDLE PHONE INCREASE AND DECREASE......................
document.getElementById('case-plus').addEventListener('click', function () {
  updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
  updateProductNumber('case', 59, false);
})


//QUANTITY AND ADD PRICE.........................................................
function updateProductNumber(product, price, isIncreasing) {
  const productInput = document.getElementById(product + '-number');
  let productNumber = productInput.value;
  if (isIncreasing == true) {
      productNumber = parseInt(productNumber) + 1;
  }
  else if (productNumber > 0) {
      productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  // update total
  const productTotal = document.getElementById(product + '-total');
  productTotal.innerText = productNumber * price;
  // calculate total
  calculateTotal();
}

//CALCULATION.......................................................

function getInputValue(product) {
  const productInput = document.getElementById(product + '-number');
  const productNumber = parseInt(productInput.value);
  return productNumber;
}


function calculateTotal() {
  const phoneTotal = getInputValue('phone') * 1219;
  const caseTotal = getInputValue('case') * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const totalPrice = subTotal + tax;

  // update on the html
  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tax-amount').innerText = tax;
  document.getElementById('total-price').innerText = totalPrice;
}
//...................................................................................

*/




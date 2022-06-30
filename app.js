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






















function calculateTotal() {
  
  //sub-total
  const phonePrice = parseInt((document.getElementById("phone-price").innerText));
  const casePrice = parseInt((document.getElementById("case-price").innerText));
  document.getElementById("sub-total").innerText = phonePrice + casePrice;

  //tax
  const subTotal = parseInt(document.getElementById("sub-total").innerText);
  const tax = document.getElementById("tax");
  document.getElementById("tax").innerText = subTotal / 10;
  
  //total
  document.getElementById("total").innerText = subTotal + parseInt(tax.innerText);
}


//when phone plus button click
document.getElementById("phone-plus").addEventListener("click", function () {
  
  //phone count
  const phoneCount = parseInt(document.getElementById("phone-count").value);
  document.getElementById("phone-count").value = phoneCount + 1;

  //phone price
  document.getElementById('phone-price').innerText = (phoneCount + 1) * 1219;

  //call function
  calculateTotal()
});



//when case plus button click
document.getElementById("case-plus").addEventListener("click", function () {
  
  //case count
  const caseCount = parseInt(document.getElementById("case-count").value);
  document.getElementById("case-count").value = caseCount + 1;

  //case price
  document.getElementById('case-price').innerText = (caseCount + 1) * 59;

  //call function
  calculateTotal()
});




//when phone minus button click
document.getElementById("phone-minus").addEventListener("click", function () {
  
  //phone count
  const phoneCount = parseInt(document.getElementById("phone-count").value);
  
  
  if (phoneCount > 0) {
    document.getElementById("phone-count").value = phoneCount - 1;
  
  //phone price
  document.getElementById('phone-price').innerText = (phoneCount - 1) * 1219;
  }
  
  //call function
  calculateTotal()
});



//when case minus button click
document.getElementById("case-minus").addEventListener("click", function () {
  
  //case count
  const caseCount = parseInt(document.getElementById("case-count").value);
  
  if (caseCount > 0) {
    document.getElementById("case-count").value = caseCount - 1;

  //case price
  document.getElementById('case-price').innerText = (caseCount - 1) * 59;
  }
  
  //call function
  calculateTotal()
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



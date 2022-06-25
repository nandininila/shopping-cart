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

document.getElementById("phone-plus").addEventListener("click", function () {
    const phoneInput = document.getElementById("phone-number");
    const phoneCount = parseInt(phoneInput.value);
    const phoneNewCount = phoneCount + 1;
    phoneInput.value = phoneNewCount;









});










/**

document.getElementById("phone-plus").addEventListener("click", function () {
  
  //number
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

*/
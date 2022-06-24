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

const phonePlus = document.getElementById("phone-plus");
phonePlus.addEventListener("click", function () {

  const phoneAmount = document.getElementById("phone-number");
  const phoneNumber = parseInt(document.getElementById("phone-number").value);

  let phonePrice = document.getElementById('phone-price').innerText;
  let phPrice = parseFloat(document.getElementById('phone-price').innerText);

  if (phoneNumber > 0) {

  }
  document.getElementById("phone-number").value = phoneNumber + 1;
  document.getElementById('phone-price').innerText = (phoneNumber +1) * 1219;
  
});
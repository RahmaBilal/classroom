var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var submitEl = document.querySelector("#submit");

function calculateTip(total, tipPercentage) {
  var roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}

function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount);
}

total.preventDefault();
console.log(total);
var response = 
tipEl.value;
totalEl.value;
submitEl.addEventListener("click", addTip);

function addTip(event) {
  var tipPercentage = tipEl.value * .01;
  var total = totalEl.value;
  var tipAmount = calculateTip(total, tipPercentage);
  var newTotal = calculateTotal(tipAmount, total);
  document.querySelector("#tip-amount").textContent = tipAmount;
  document.querySelector("#new-total").textContent = newTotal.toFixed(2);
}

tipAmount.preventDefault();
console.log(tipAmount);



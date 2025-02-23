// loading the calculation when refresh or start
let calculation = localStorage.getItem('calculation');
showCalculation();

function updateCalculation(value) {
  calculation += value;
  
  showCalculation();

  // saving the calculation
  localStorage.setItem('calculation', calculation);
}

function showCalculation() {
  document.querySelector('.js-show-calculation')
    .innerHTML = calculation;
}
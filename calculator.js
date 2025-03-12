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

// click events
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent.trim(); // text of the button

    if (value === "=") {
      calculation = eval(calculation);
    } else {
      updateCalculation(value);
    }

    showCalculation();
    localStorage.setItem('calculation', calculation);
  });
});
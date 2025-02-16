// Task 1: Function Declaration
// Function to calculate the net salary
function calculateSalary(baseSalary, bonus, taxRate) {
    // Calculate the net salary using the formula
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    
    // Logging the net salary
    console.log(`Net Salary: $${netSalary.toFixed(2)}`);
  }
  
  // Employee's net salary
  calculateSalary(6000, 400, 0.12); 
  calculateSalary(8000, 1200, 0.18);

  // Task 2: Function Expression
  // Function expression to calculate the final price
const calculateDiscount = function(price, discountRate) {
    // Calculate the final price using the formula
    let finalPrice = price - (price * discountRate);
    
    // Logging the final price
    console.log(`Final Price: $${finalPrice.toFixed(2)}`);
  };
  // Final product price
  calculateDiscount(100, 0.2); 
  calculateDiscount(250, 0.15);
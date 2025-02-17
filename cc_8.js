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

  // Task 3: Arrow Function
// Arrow function to calculate the service fee
const calculateServiceFee = (amount, serviceType) => {
    let fee;
    if (serviceType === "Premium") {
      fee = amount * 0.15;
    } else if (serviceType === "Standard") {
      fee = amount * 0.10;
    } else if (serviceType === "Basic") {
      fee = amount * 0.05;
    }
    
    // Output the result
    console.log(`Service Fee: $${fee.toFixed(2)}`);
  };
  calculateServiceFee(150, "Premium");
  calculateServiceFee(725, "Standard");

  // Task 4: Parameters and Arguments
// Function to calculate the rental cost
function calculateRentalCost(days, carType, insurance = false) {
    let dailyRate;
  
    if (carType === "Economy") {
      dailyRate = 40;
    } else if (carType === "Standard") {
      dailyRate = 60;
    } else if (carType === "Luxury") {
      dailyRate = 100;
    }
  
    let totalCost = days * dailyRate;
  
    // Add insurance cost if applicable
    if (insurance) {
      totalCost += days * 20;
    }
  
    // Logging the total cost of the rental
    console.log(`Total Rental Cost: $${totalCost}`);
  }
  calculateRentalCost(5, "Economy", true);
  calculateRentalCost(9, "Luxury", false);

// Task 5: Returning Values
// Function to calculate the total loan payment
function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time);
    
    // Logging the total loan payment
    console.log(`Total Payment: $${totalPayment.toFixed(2)}`);
  }
  
  calculateLoanPayment(1250, 0.05, 2);
  calculateLoanPayment(6700, 0.07, 3);
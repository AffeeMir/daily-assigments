const Principal = parseFloat(prompt("Enter the Pricipal Amount:"));
const Rate = parseFloat(prompt("Enter the Rate of Interest per annum:"));
const Time = parseFloat(prompt("Enter the time period in years:"));
const SimpleInterest = (Principal * Rate * Time)/100;
console.log("Simple Interest:", SimpleInterest);
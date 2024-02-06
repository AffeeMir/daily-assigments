const number = prompt("Enter a number");

if (number > 0) {
    console.log("Enter a number : ${number}");
    console.log("The number is positive.");
} else if (number == 0) {
    console.log("Enter a number : ${number}");
    console.log("The number is zero.");
} else {
    console.log("Enter a number : ${number}");
    console.log("The number is negative.");
}
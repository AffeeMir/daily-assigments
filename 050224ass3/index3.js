let num = parseFloat(prompt("Enter the number"));

let from_unit = prompt("Enter the unit to convert from");

let to_unit = prompt("Enter the unit to covert to");

if (from_unit === "km" && to_unit === "miles")
 {
    console.log(num * 0.621371, "miles");
}
else if (from_unit === "Celsius" && to_unit === "Fahrenheit") {
    console.log((num * 9/5) + 32, "Fahrenheit");
}
else {
    console.log("Invalid  unit conversion");
}
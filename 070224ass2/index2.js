function sumValidNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            sum += arr[i];
        }
    }

    return sum;
}

const mixedArray = [1, 'two', 3, 'four', 5, 'six', 10];
const result = sumValidNumbers(mixedArray);
console.log("Sum of valid numbers:", result);
(()=>{
 let prices = [1,2,3,4,5,6,7,8];
 // prices.push('hola') -- Incorrect
prices.push(999) // Push method to add an element to the end of the array
console.log(prices);

let products = ['hola', true];
products.push(false); // Correct

let mixed: (number | string | boolean | Object)[] = ['hola', true];
mixed.push(12);
mixed.push('as');
mixed.push(true);
mixed.push({}); //Object
mixed.push([]); //Array
console.log(mixed);

let numbers = [1,2,3,4];
numbers = numbers.map(item => item * 2);
console.log(numbers);
})();

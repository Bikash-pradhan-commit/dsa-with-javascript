//  Q1 -> Create an Array  //

let numbers = [10,20,30,40,50];

console.log(numbers)


//  Q2 Access first second and last  elements of the array  //

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[numbers.length-1]);


//  Q3 -> Change 30 to 100

numbers[2] = 100;

console.log(numbers)


//  Q4 -> Find length  //


console.log(numbers.length)


//  Q5 -> Add 60 and 70 the numbers array  //

numbers.push(60,70)
console.log(numbers)


//  Q6 -> remove the last element of the array  //

numbers.pop(numbers.length-1)
console.log(numbers)


//  Q7 -> Add 5 to the begining of the array  //

numbers.unshift(5)
console.log(numbers)


//  Q8 -> remove the first element  //

numbers.shift(numbers[0])
console.log(numbers)


//  Q9 -> Print every element  //

for(let i=0; i<numbers.length; i++){
    console.log(numbers[i])
}


// Q10 -> Print every element using for...of  //

for(let number of numbers){
    console.log(number)
}


// Q11 print the index and their value  //

for(let i=0; i<numbers.length; i++){
    console.log("idx",i,numbers[i])
}


// Q12 print every element using forEach method  //

 numbers.forEach(function(num){
    console.log(num);
    
 })
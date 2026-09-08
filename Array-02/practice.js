// Lavel --> 01 (Array basic)


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



// lavel --> 02 (Array problem)



 // Q13 count numbers greater than 20 using for loop//


 let numarr = [10,25,15,40,30,5]

 let count = 0;

 for(let i = 0; i<numarr.length; i++){
    if(numarr[i]>20){
        count = count + 1;
    }
 }
 console.log(`${count} values are greater than 20 in this array`)



 // Q14 count numbers greater than 20 using for of loop//


let numarr = [10,25,15,40,30,5]
 let countnum = 0;
 for(num of numarr){
    if(num>20){
        countnum += 1
    }
 }
 console.log(`${countnum} values are greater than 20 in this array`)



  // Q15 count numbers greater than 20 using forEach method //


   let countgreater = 0;

  numarr.forEach(function(num){
    if(num > 20)
    countgreater += 1;
  })
  console.log(`${countgreater} values are greater than 20 in this array`)



  // Q16 Count even number //


  let arr = [10,15,22,31,40,55]

  counteven = 0;

  for(let i = 0; i<arr.length; i++){
    if(arr[i]%2 === 0){
        counteven += 1;
    }
  }
console.log(`${counteven} even values in this array`)



// Q17 Count odd number //


let array = [10,15,22,31,40,55]

  countodd = 0;

  for(let i = 0; i<arr.length; i++){
    if(arr[i]%2 !== 0){
        countodd += 1;
    }
  }
console.log(`${counteven} odd values in this array`)



// Q17 -> find sum on the given array //


let num_arr = [10,20,30,40,50]

let countsum = 0;

for(let i = 0; i<num_arr.length; i++){

    countsum += num_arr[i]
}

console.log(`sum is ${countsum}`)



// Q18 -> find average //


let num_arr = [10,20,30,40,50]
let avg ;
let sum = 0;

for(let i = 0; i<num_arr.length; i++){
     sum += num_arr[i]
     avg = sum / num_arr.length
}

console.log(`average is ${avg}`)



// Q19 -> find minimum value in this array // 


let  arr = [25,10,40,5,30]

let min = arr[0];

for(let i = 0; i<arr.length; i++){
    if(min > arr[i]){
        min = arr[i]
    }
}
console.log(`minimum value is ${min}`)



// Q20 -> find maximum value in this array // 


let array = [25,10,40,5,30]

let max = array[0]

for(let i = 0; i<array.length; i++){
    if(max < array[i]){
        max = array[i]
    }
}
console.log(`maximum value is ${max}`)
//  Chapter 2 -> Array  //


1. What is an Array ?

An array is a data structure used to store multiple values in a singel variable.

Example:  let numbers = [10, 20, 30, 40};
Array are commenly used to store collection of related data.


2. What is Array Index ?

An array index represent the poisition of an element.
Javascript used zero-based indexing.

Example:  let numbers = [10, 20, 30];
index:
0 -> 10
1 -> 20
2 -> 30

The first element is at index 0.
Accessing an element numbers[index]

Example: 
console.log(numbers[index]); //10


3. How to creating an Array ?

let name = ["a", "b", "c"]
Array can store multiple values.


4. How to Accessing an Element ?

let number = [10, 20, 50, 80];
console.log(numbers[3]) // 80


5. How to Updating an Element.

An array element can changed using its index.

Example:  let numberes = [10, 20, 30];

numbers[0] = 5;
result: [5, 20, 30]


6. What is Array length.

The length property gives the number of elements.

Example:  let numbers = [10, 20, 30, 40];
console.log(numbers.length) // 4

important:  
length = number of elements
index = position of an element 
Last index = length-1


7. push()

push() adds an element to the end.

Example:
let numbers = [10, 20];
numbers.push(30)

Result: [10, 20, 30];


8. pop()

pop delete an element to the end.

Example;
let numbers = [10, 20, 30];
numbers.pop()

Result: [10, 20];


9. unshift()

unshift() adds an element to the beginning.

Example:
let numbers = [20, 30]
numbers.unshift(10);

Result: [10, 20, 30]


10. shift()

shift() removes the first element.

Example:
let numbers = [10, 20, 30];
numbers.shift();

Result: [20, 30]


11. Traversing an Array

Traversal means visiting each element one by one.

Example:
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


12. for...of

for...of directly gives the values.

Example:
for (let number of numbers) {
    console.log(number);
}


13. forEach()

forEach() executes a function for every element.

Example:
numbers.forEach((number) => {
    console.log(number);
});

It can also provide the index:

numbers.forEach((number, index) => {
    console.log(index, number);
});



14. slice()

slice() returns a portion of an array as a new array.

Syntax:

array.slice(start, end)

The end index is not included.

Example:
let numbers = [10, 20, 30, 40, 50];
let result = numbers.slice(1, 4);

Result: [20, 30, 40]

slice() does not modify the original array.



15. splice()

splice() can add, remove, or replace elements.

Syntax:

array.splice(start, deleteCount, items...)

Example:
let numbers = [10, 20, 30, 40];
numbers.splice(1, 1);

Result: [10, 30, 40]

splice() modifies the original array.



16. Searching

includes() checks whether a value exists.

Example:
numbers.includes(30);

Returns true or false.

indexOf() returns the index of a value.

Example:
numbers.indexOf(30);

If the value does not exist, indexOf() returns -1.



17. Finding Minimum and Maximum

We can find the smallest or largest element by traversing the array and comparing values.



18. Sum of Elements

We can calculate the sum by traversing the array.

Example:
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}



19. Reverse an Array

Reversing means changing the order of elements.

Example:
[10, 20, 30, 40]

becomes:
[40, 30, 20, 10]

Different algorithms can be used to reverse an array.



20. Important Array Concepts

1. Arrays store multiple values.
2. Array indexing starts from 0.
3. length gives the number of elements.
4. push() adds at the end.
5. pop() removes from the end.
6. unshift() adds at the beginning.
7. shift() removes from the beginning.
8. Traversal means visiting elements one by one.
9. slice() returns a portion without modifying the original array.
10. splice() modifies the original array.
11. Access by index is O(1).
12. Traversal/search is generally O(n).


 21. Duplicate

A duplicate is a value that appears more than once in an array.

Example:
[10, 20, 30, 20]

20 is a duplicate.


22. Checking Duplicates

A basic approach is to compare each element with the elements after it.

Example:
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]) {
            // duplicate found
        }
    }
}



23. Frequency

Frequency means the number of times a value appears.

Example:
[10, 20, 10, 30, 10]

Frequency of 10 = 3

---

 Count Frequency of a Target

let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        count++;
    }
}


24. Frequency of Every Element

A frequency object can store:

value → number of occurrences

Example:

[10, 20, 10, 30, 20, 10]

Result:

10 → 3
20 → 2
30 → 1

Example:

let frequency = {};

for (let number of numbers) {
    if (frequency[number]) {
        frequency[number]++;
    } else {
        frequency[number] = 1;
    }
}



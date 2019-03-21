//ex1


function convert(amount) {
  let result = amount*8;
  console.log(result);
  return
}
convert(2)



// ex2(1)
function reverse(str) {
let resultStr = "";
for (let i = str.length -1; i >= 0; i--) {
resultStr += str[i]
}
return resultStr;
}
console.log(reverse('abc'))

// ex2(2)
//A function which returns reversed string.
function reverse(str) { 
return str.split('').reverse().join('');
 }
console.log(reverse('abc')) // 'cba'



// ex3

 function printStairs(n) {  	
	let result = n;
    let stair = '#';
    for (let i=0; i<result; i++) {
    console.log(stair); // виводиться #
 stair += "#";
	}
}
printStairs(3)


//ex4(1)

// rangeSum(start,end) gives the sum of the range from start to end.          
const sumRange = function(start,end){
 const arr = [];
 for (let i = start; i <= end; i++) 
 arr.push(i);
 return arr.reduce(function(a,b){
 return a + b;   
});
};

// console.log(sumRange(2, 4)) // 9


//ex4(2)

function sumRange(start, end) { 
	let sum = 0;
for (let i = start; i <= end; i++) {
	sum += i;
}
return sum;
}
console.log(sumRange(2, 4)) 



// //ex 5
// //Write a function which returns the smallest of three numbers.

function min(a, b, c) { 

if (a < b && c) {
	return  a;
 } else if (b < a && c) {
 	return  b;
 } else {
 	return  c;
 }
}
console.log(min(1, 2, 3)) // 5
console.log(min(3, 2, 1)) // 5
console.log(min(2, 3, 1)) // 5



//ex6
//A function which prints the pyramid picture of size n
function printPyramid(n) { 
let hole = " ";
let stair = "#";
for (var i = 0; i < n; i++) {
console.log(hole.repeat(n-i-1) + stair);
stair += "##";
}

}

printPyramid(7)

//ex7 
//A function which transforms first and last letter to uppercase (use built in string’s method).

function firstAndLastToUpper(str) {
return str[0].toUpperCase() + str.slice(1, [str.length-1]) + str[str.length-1].toUpperCase();
}

console.log(firstAndLastToUpper('abc'));

//ex8 

//A function which returns true if string contains ironman or cursor or ostap otherwise returns false. The function must be case-insensitive.
function cursorCheck(str) { 

const lowerStr = str.toLowerCase();

if (lowerStr.includes("cursor") || lowerStr.includes("ironman") || lowerStr.includes("ostap") ) {
	return true;
} else {
return false;
}
}
console.log (cursorCheck('Hello I am OstaP')) // true
console.log(cursorCheck('Superman is here')) // false

//ex9 

function toUppercase(str) {
    let upper = '';
    for(i = 0; i < str.length; i++) {
        upper += String.fromCharCode(str.charCodeAt(i) & 223);
    }
    return upper;
}
toUppercase('abc') // 'ABC'


//ex10
function removeDuplicationLetters(str) { 
let result = '';
for (let index = 0; index < str.length; index++) {
	let temp = result.toLowerCase();
	let char = str[index].toLowerCase();
	if (str[index] === ' ' || !temp.includes(char)) {
		result += str[index];
	}
}
return result;
}
console.log(removeDuplicationLetters('Hello I am Iron Man'));


//ex10 не повністю
//A function which removes duplication of letters in string. The function must be case-insensitive.
function removeDuplicationLetters(str) {
let words = str.split("");
let arr = [];
for (let i = 0; i < words.length; i++){
	if (!arr.includes(words[i])) {
		arr.push(words[i]);
	}
	}
	return arr.join("");
}
console.log(removeDuplicationLetters('Hello I am Iron Man')); // 'Helo I am rn '


//ex11
//A function that when given a number n returns the n-th number in the Fibonacci Sequence. The sequence starts from 1 and looks like this: 1, 1, 2, 3, 5, 8, 13, 21…
function fibonacci(n) {
  if(n == 0) {
    return 0;
  }
  if(n == 1) {
    return 1;
  }
  else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}

console.log(fibonacci(3)) // 2
console.log(fibonacci(5))  // 5
console.log(fibonacci(7))  // 13






//level 1=>01-strings=>02-numbers=>03-Arrays

//**01-Strings :-

// String handbook

// String: , indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

/*important:
length, slice(), split(),
*/
/*1) Length
function getLength(str){
    console.log("Original string:", str);
    console.log("Length:",str.length);
}
getLength("new message"); 
*/

/*2) indexOf 
 //at what point is the "word" present or at 
 //what index does it start from, 
 //indexOf searches the string from left to right
 //i.e. from starting to end.
 //it'll give "-1" if the target is not found in the string.
 function findIndexOf(str,target){
    console.log("Original String",str);
    console.log("Index",str.indexOf(target));
 }
 findIndexOf("hello world","world");//output = 6
*/

/* 3)lastIndexOf
 
  // if in the "indexof" we have same word 
  // appearing more then once then then the 
  // the output takes the first word coming 
  // from left to right way,
  // but what if we wanna know the index of
  // last word, for this we use "lastIndexOf".
  // lastIndexOf searches the string 
  // right to left i.e. ending to starting
  // which is opposite of indexOf.
  
 function findLastIndexOf(str, target){
    console.log("original string:", str);
    console.log("index:",str.lastIndexOf(target));
 }
 findLastIndexOf("hello world world", "world");// output: 12
*/

/* 4) slice
  function getSlice(str, start, end) {
    console.log("Original String:", str);
    console.log("After slice:", str.slice(start, end));
  }
  getSlice("Hello World", 0, 5);//it'll show the elements 0,1,2,3,4

  const str = "hello,World";// working at a low level this is how it's done
  console.log(str.slice(0,5));



*/

/* 5) substring
 function getSubstring(str, start, end) {
    console.log("Original String:", str);
    console.log("After substring:", str.substring(start, end));
  }
  getSubstring("Hello World", 2, 4);

  const str = "hello,world";// at a low level this is how it's done 
  console.log(str.substring(2,6))
*/  

/* 6) replace
function replaceString(str,target,replacement){
    console.log("original string:", str);
    console.log("After replacement :", str.replace(target,replacement));
}

replaceString("Hello, World", "World", "javascript");

var str = "hello , world ";//at a low level this is how it's done:-
console.log(str.replace("world","javascript"));
*/

/* 7) split
 //Turns a string into array based on a delimiter
 //this is an intersting and useful tool.
 function splitString(str, separator) {
    console.log("original string:",str);
    console.log("After split:",str.split(separator));
 }
 splitString("Hello , World", " ");// output:[ 'Hello', ',', 'World' ] here the delimiter is spcae(" ").
 
 const str = "hello , world , my name is prince";// at a low level this is how it's done
 console.log(str.split(","));//[ 'hello ', ' world ', ' my name is prince' ]

*/

// // trim
// function trimString(str) {
//   console.log("Original String:", str);
//   console.log("After trim:", str.trim());
// }
// trimString(" Hello World ");

//toString:- this is used to make an array an string

//// toUpperCase
// function toUpper(str) {
//   console.log("Original String:", str);
//   console.log("After toUpperCase:", str.toUpperCase());
// }
// toUpper("Hello World");

// toLowerCase
// function toLower(str) {
//   console.log("Original String:", str);
//   console.log("After toLowerCase:", str.toLowerCase());
// }
// toLower("Hello World");



//***/ 02-Numbers => parsrInt => parseFloat

// parseInt:- it is a global function that can be called anytime anywhere in js
// parseInt converts an string to integre
// console.log(parseInt("42")); // from "42" to 42;

// function explainParseInt(value){
//   console.log("Original value:", value);
//   let result = parseInt(value);
//   console.log("After parseInt:", result);
// }
// explainParseInt("45px"); 
// explainParseInt("45%");
// explainParseInt("45$");//anything at the ending =>converted
// explainParseInt("$45");//anything at the starting => not convert
// explainParseInt("3.141592653");


// parseFloat :  accept a string and convert it into a floating-point number
// console.log(parseFloat("201px"));

// function explainParseFloat(value) {
//   console.log("Original Value:", value);
//   let result = parseFloat(value);
//   console.log("After parseFloat:", result);
// }

// // Example Usage for parseFloat
// explainParseFloat("3.14");
// explainParseFloat("42");
// explainParseFloat("42px");



//**03-Arrays:-

// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()


//**1)push:- element elements at the end.
// const initialArray = [1, 2, 3];
// initialArray.push(4)
// console.log(initialArray);//[1, 2, 3, 4,];

// function pushEample(arr,element) {
//   console.log("original Array:", arr);

//   arr.push(element);
//   console.log("After push", arr);
// }
// pushEample([1,2,3],4);//=>[ 1, 2, 3, 4 ]

//**2) pop:- delete elements from ending
// const initialArray = [1,2,3,4];
// initialArray.pop();// this has to be empty(maybe).
// console.log(initialArray);//[ 1, 2, 3 ]

// function popExample(arr) {
//   console.log("Original Array:", arr);

//   arr.pop();
//   console.log("After pop",arr);
// }
// popExample([1,2,3,4,5]);//After pop [ 1, 2, 3, 4 ]

//*3) shift: same as pop but from front
// const inintialArray = [1,2,3,4,5];
// inintialArray.shift();
// console.log(inintialArray);//[ 2, 3, 4, 5 ]

// function shiftExample(arr){
//   console.log("oroginal Array:", arr);

//   arr.shift();
//   console.log("After shift", arr);
// }
// shiftExample([1,2,3,4,5]);

//*4) unnshift: same as push but from front
// const intialArray = [1,5,2,3,4];
// intialArray.unshift(1,10,0);
// console.log(intialArray);

// function unshiftExample(arr,element){
//   console.log("Original array:", arr);
//   arr.unshift(element);
//   console.log("After unshift:", arr);
// }
// unshiftExample([1,2,3,4], 10,20 );

//*5) concat()=> merges two arrays into one array
//  const firstArray = [ 1, 2, 3, 4 ];
//  const secondArray = [10,20,30,40];
//  let arr3 = firstArray.concat(secondArray);
//  console.log(arr3);

function concatExample(arr1,arr2){
  console.log("original Arrays:",arr1,arr2);

  let arr3 = arr1.concat(arr2);
  console.log("after concat:",arr3);
}
concatExample([1,2,3,4], [10,20,30,40]);
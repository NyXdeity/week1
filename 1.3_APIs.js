//strings :-

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












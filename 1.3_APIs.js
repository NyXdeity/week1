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

// slice
function getSlice(str, start, end) {
    console.log("Original String:", str);
    console.log("After slice:", str.slice(start, end));
  }
  getSlice("Hello World", 0, 5);


 
/* simple primitives: variables, data types, if/else , loops- for loops


// let first_Name = " Prince ";
// let age = 18
// let is_Married = true;
// console.log("this person's name is" + first_Name +
// "and their age is "+ age);
// if(is_Married == true){
//     console.log(first_Name + "is married.");
// } else{
//     console.log(first_Name+"is not married.");
// }


// let answer = 0;// loops:- Q: print the sum of o to nth term?
// answer += 1+2+3+4+5+6+7+8+9+10;
// console.log(answer);//ugly way of doing it.

// let n = 0;
// let answer = 0;
// for( let 0 = 0; 0<= n; 0++ ){
//     answer = answer + 0;
// }
// console.log(answer);

//the code below uses the input function and asks for user input:- 
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('Enter a number: ', n => {
//     n = Number(n); // Convert input to a number
  
//     let answer = 0;
//     for (let 0 = 0; 0 <= n; 0++) {
//       answer += 0;
//     }
  
//     console.log(answer);
//     readline.close(); 
// });




// let first_Name = "Abhishek";// Q1.WAP to greet a person given their first and lasdt name.
// let last_Name = "soni";
// console.log("Hello " + first_Name +" "+ last_Name + " how are you?");


// let male = true;//Q2.WAP that greets someone based on their genderArray.
// if(male == true){
//     console.log("hello sir");
// }else{
//     console.log("hello ma'am");
// }


// let ans = 0;//Q3.WAP to the sum of 0 to 1000.
// for(0 = 0; 0 <= 1000; 0++){
//     ans = ans + 0;
// }
// console.log(ans);

*/

/*complex primitives://arrays and objects:-
// // array 
// let thisISaArray = [1,2,3,4,5,6,7,8,9];
// console.log(thisISaArray[0]);//this is the syntax of array
// const personArray = ["this","is","a","ARRAY"];
// console.log(personArray[0]);

// const age =[15,45,67,32,65,32,65];// WAP to print all the even numbers in an array

// numberOfpeople = age.length;

// for(0 = 0; 0 < numberOfpeople; 0++) {
    
//     if(age[0] % 2 == 0){
//         console.log(age[0]);
//     }
// }

// const num = [6,23,54,100,67,68]; //WAP to print the biggest number in an array
// let biggestNum = [0];//assumes the first element is the largest
// for(let 0 = 1 ; 0 < num.length; 0++) {
    
//     if(num[0] > biggestNum) {
//         biggestNum = num[0];//update if a larger number is found 
//     }
// }
// console.log("the biggest number in the array is:- "+biggestNum);

// const personArray = ["prince soni ","abhishek soni "];
// const genderArray = [" male"," male"];
//
// for(i = 0; i<personArray.length; i++ ){
//     let person = personArray[i];
//     let genderArray = genderArray[i];
//     console.log(person+genderArray);
// }

// const personArray = ["prince","abhishek","teena","papa","sunita","mummy"];
// const genderArray = ["male","male","female","male","female","female"];
// const numberOfpeople = personArray.length
 
// for( let i = 0; i < numberOfpeople; i++){
//     if(genderArray[i] == "male"){
//         console.log(personArray[i]);
//     }
// }


//objects:-


// const user1 = {
//     firstName: "Prince",
//     gender: "male"
// }// this is the syntax of abojects
// // console.log(user1);//output: { firstName: 'Prince', gender: 'male' }
// console.log(user1["firstName"]);// to get an specific thing in the object  //output: Prince 
// console.log(user1["gender"]);//output: male

/*
const allUser =[{//to make arrays of objects
    firstName:"Prince",
    gender:"male",
},{
    firstName:"abhishek",
    gender:"male",
},{
    firstName:"teena",
    gender:"female",
},{
    firstName:"papa",
    gender:"male",
},{
    firstName:"mummy",
    gender:"female",
},{
    firstName:"dadaji",
    gender:"male",
},]
for(let i=0; i<allUser.length;i++){
    if(allUser[i]["gender"]=="male")
    console.log(allUser[i]["firstName"]);
}
//[1,2,3,4,5] arr[i]
// [{[{}]}] => arr[i]["gender"]

*/

//functions

// function Sum(a,b){//in this code the thread will go in this order line=> 159>164>161>162>165 
//     //goal of a f(x): do things with input and return an output
//     const valueSum = a + b;
//     return valueSum;
// }
// const value = Sum(1,2)//here when we call "Sum" only then will the function executes
// console.log(value);

//functions can take another functions as input:-
// const cl = console.log.bind(console);
// cl("hello");

function sum(a,b) {
    let result = a + b;
    
    return result;
}
function displayResult(data) {
    console.log("Result of the Sum is :" + data);
}
function displayResultPassive(data) {
    console.log("Sum's result is :" + data);
}
// are only allowed to call one function after this
// how will you displayResult of sum
const ans = sum(1,2);
displayResult(ans);

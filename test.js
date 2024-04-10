// const nestedObject =[{
//     firstName:"prince",
//     gender:"male",
//     metaData: {
//         age: 18,
//         address:"udaipur",
//         favPerson:"abhishek soni",
//         favDessert:"lava cake"
//     }
// }]
// for(let i=0; i<nestedObject.length;i++){
//     console.log(nestedObject[i]["metaData"]["age"]);
// }
// console.log(nestedObject[0]["metaData"]["favPerson"]);

// const allUser = [{
//     firstName:"Prince",
//     gender:"male",
// },{
//     firstName:"Abhishek",
//     gender:"male",
// },{
//     firstName:"Teena",
//     gender:"female",
// },{
//     firstName:"papa",
//     gender:"male",
// },{
//     firstName:"mummy",
//     gender:"female",
// }]

// console.log(allUser(firstName));
// make a call back function that calls which type of function we have to call and what will be the value;

function sum(a,b,fnToCall){
    result = a+b;
    fnToCall(result)
}
function displayResult(data){
    console.log("sum is:"+data);
}
function displayResultPassive(data){
    console.log("Result of the sum is:"+data);
}

const ans = sum(12,34,displayResultPassive);
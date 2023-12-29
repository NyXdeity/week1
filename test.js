const nestedObject =[{
    firstName:"prince",
    gender:"male",
    metaData: {
        age: 18,
        address:"udaipur",
        favPerson:"abhishek soni",
        favDessert:"lava cake"
    }
}]
for(let i=0; i<nestedObject.length;i++){
    console.log(nestedObject[i]["metaData"]["age"]);
}

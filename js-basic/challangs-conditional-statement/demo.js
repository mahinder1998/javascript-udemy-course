// Conditional Statement

const person1 = {
    name: "Mahinder",
    age: 20,
    status: "Residant"
}

const person2 = {
    name: "Ankit",
    age: 19,
    status: "Residant"
}


if(person1.age >= 18 && person2.age >= 18 && person1.status == "Residant" && person2.status == "Residant"){
    console.log("working...")
}else{
    console.log("both Conditions are not match")
}
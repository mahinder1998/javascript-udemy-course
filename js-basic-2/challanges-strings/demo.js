
//8 Strings

function fullName(firstName, lastName){
    let contact = `My first name is ${firstName}, last name is ${lastName}`;
    let result = contact.toUpperCase();
    console.log(result);
}

fullName("Mahinder", "Kumar");


// second method: supoose that chnage the argument value

function fullName1({firstName1, lastName1}){
    const fullName1 = `${firstName1} ${lastName1}`;
    return fullName1;
}

console.log(fullName1({lastName1: "kumar", firstName1:"Mahi"})) // output: Mahi Kumar
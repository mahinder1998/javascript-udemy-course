// callback function, heigher order function


// callback functions
function morning(name){
    return `Good morning ${name.toUpperCase()}`;
}

function afterNoon(name){
    return `Good afterNoon ${name}`;
}


// higher order function
function greet(name, cb){
    let myName = "Mahinder"
    console.log(`${cb(name)}, my name is ${myName}`)
}


greet("India", morning);
greet("Aus", afterNoon);
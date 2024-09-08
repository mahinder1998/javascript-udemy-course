
// 5. Functions 

// function calculateTotal(subTotal, tax){
//     return subTotal+tax;
// }


// const order1 = calculateTotal(20, 4);
// const order2 = calculateTotal(50, 7);
// const order3 = calculateTotal(44, 3);


// console.log(order1);
// console.log(order2);
// console.log(order3);



/** refactor function with expression */


const refFun = function(subTotal, tax){
    return subTotal+tax;
}

const order1 = refFun(33,6);
const order2 = refFun(3,6);
const order3 = refFun(10,9);


console.log(order1);
console.log(order2);
console.log(order3);
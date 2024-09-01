

// Objects 6

const car = {
    make: "Tata",
    model: 2023,
    year: 2023,
    colors: ["Black", "White", "Green"],
    hybrid: true,
    drive(){
        console.log("Start car");
    },
    stop(){
        console.log("Stop car");
    }
}


console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();
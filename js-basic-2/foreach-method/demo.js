// foreach nethod

let people = [
    "Mahi", "Virat", "Anil", "Anusshka"
    ]
    
    
    // callback function
    function showPeople(person){
        console.log(person)
    }
    people.forEach(showPeople)
    
    // anonymous functions
    people.forEach(function(pName){
        console.log(pName)
    })
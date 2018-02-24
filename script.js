// function declaration
function hello(name, numberOfLogs){
    for(var i = 0; i < numberOfLogs; i++) {
    console.log("Hello " + name + "!")
    }
}
//function call

hello("Mateusz", 1) //passing attribute Mateusz
hello("Ala", 2)
hello("Ela", 3)
hello({name: "Stanisława"}, 1)


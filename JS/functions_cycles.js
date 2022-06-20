// simple function--------

let f1 = () => console.log("Hello f1");
f1()


console.log("-------------------------------------------")


let fl1 = 11;
let fl2 = 12;
let func1 = (a, b) => {console.log("Hello func1", a + b)};
 func1(fl1, fl2)


 console.log("-------------------------------------------")

let num = 11

let func2 = (num < 10) ?
    (x , y) => {console.log("Hello part 1", x + y)}:
    (x , y) => {console.log("Hello part 2", x - y)};

func2(fl1, fl2)


// prototyping -------
console.log("---------------prototyping----------------------------")

function gasholder(){}; 

gasholder.prototype.holdGas = function(){
    console.log("Valve is closed")
}
                // the same function but in arrow => representation
gasholder.prototype.releaseGas = () => {
    console.log("Valve is open")
}

gasholder.prototype.emergensyGasRelease = (x, y) => {
    console.log("Emergency gas release for", x + y, "mc")
}

let gas = new gasholder();

gas.holdGas()
gas.releaseGas()
gas.emergensyGasRelease(fl1, fl2)



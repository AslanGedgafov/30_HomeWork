let name = "Aslan"
let name1 = true
console.log(name1);


let user_age = 30
let work_period = 10

let total_time = user_age + work_period
console.log(total_time);


let morning = false
console.log(morning, typeof(morning));

let evening = true

let apples = 15
let cherry = 20
let compare = apples <= cherry
console.log("compare = ", compare);


if (compare){
    console.log("Compare is", compare);
}else if(apples == 15){
    console.log("Apples ==", apples);
}else{
    console.log("!! Compare is", false);
}
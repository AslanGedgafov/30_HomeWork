

let yolochka1=20;
let yolochka2="hello";
let result = yolochka1 + yolochka2;
//yolochka1 = 15;
console.log(result)

console.log(typeof yolochka1)
console.log(typeof yolochka2)


console.log(true || true)
console.log(true || false)
console.log(false || true)

let item1 = 5;
let item2 = 3;
let item3 = item1 + item2;
let item4 = 'popa';
console.log(item3)
console.log(item3 + item4)
console.log(item3 * item4)
let item5 = item3;
console.log(item5)

let item6 = 15;
let item6_type = typeof(item6);
console.log("item 6 = " + item6)
console.log("type of item 6 = " + item6_type) 

let item7 = String(item6);
let item7_type = typeof(item7);
console.log("item7 = "+ item7)
console.log("type of item7 = "+ item7_type)

let age1 = 17;
let age2 = 18;
let age3 = 60;
if(age1 < age2){
    console.log("you dont have the access cause your age is " + age1 + " it is less then "+ age2)
}else if (age2 <= age1 && age1 <= age3){
    console.log("you are welcome")
}else if(age1 > age3){
    console.log("chill out and look culture channels")
}else{
    console.log("technical work")
}
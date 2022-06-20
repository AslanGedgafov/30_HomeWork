

let yolochka1=20;
let yolochka2="hello";
let result = yolochka1 + yolochka2;
//yolochka1 = 15;
console.log(result)

console.log(typeof yolochka1)
console.log(typeof yolochka2)


//for (let ii=0; ii<10; ii++){
  //console.log(ii)
//}


let q1 = "10";
let q2 = 30;
let sum_body = +q1 + q2;
console.log(sum_body)

let bool_true = true;
let bool_false = false;
console.log(bool_true, bool_false)
console.log(typeof bool_true)

let b_1 = bool_true * bool_false
console.log("------------------")
console.log(b_1)
console.log(typeof b_1)


let bool_true1 = +bool_true
console.log(bool_true)
console.log(bool_true1)

//---------------------------
let n1 = "30"
let n2 = 30
let compare_1 = n1 === n2
let compare_2 = n1 < n2

console.log("-----------------------")

if (compare_1) {
    let t1=5
    let t2 = 10
    let result = t1 + t2
    console.log("If Result is (comp 1) " + result)
}else if (compare_2) {
    console.log("Of Result is (comp 2) " + compare_1)
}else{
    console.log("whoops Result is " + compare_1)
}
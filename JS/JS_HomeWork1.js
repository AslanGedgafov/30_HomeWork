let item1 = 5
console.log(item1);

let item2 = 3
console.log(item2);

let item3 = item1 + item2
console.log(item3);

let item4 = 'yolochka'
console.log(item4);
console.log(item3 + item4);
console.log(item3 * item4);

let item5 = item3
console.log(item5);

let item6
let item6_type
item6 = 15
item6_type = typeof(item6);
console.log("item6 ==",item6);
console.log("item6_type ==",item6_type);

let item7 = String(item6)
let item7_type = typeof(item7)
console.log("item7 ==",item7);
console.log("item7_type ==",item7_type);


let age1 = 60
let age2 = 18
let age3 = 60

if (age1 < age2) {
    console.log("You don't have the access, your age is " + age1
     + " It's less then 18yo")
}else if(age1 >= age2 && age1 < age3){
    console.log("Welcome ! " + age1
     + " Years old furt")
}else if (age1 >= age3){
    console.log("Get some viagra, cordiologist approval(is a pluss) and welcome !")
}else{
    console.log("Technical work !!!")
};

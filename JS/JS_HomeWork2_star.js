
//----------------------------------------------

let age1 = 60
let age2 = 18
let age3 = 60


let checkAge = function()
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


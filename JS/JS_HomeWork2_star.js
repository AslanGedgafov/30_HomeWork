
//----------------------------------------------

// let age2 = 18
// let age3 = 60


// let checkAge = function(age1){
//     age1 = Number(age1);
//     console.log(age1)
// if (typeof(age1) == 'number'){

//     if (age1 < age2) {
//         console.log("You don't have the access, your age is " + age1
//         + " It's less then 18yo")
//     }else if(age1 >= age2 && age1 < age3){
//         console.log("Welcome ! " + age1
//         + " Years old furt")
//     }else if (age1 >= age3){
//         console.log("Get some viagra, cordiologist approval(is a pluss) and welcome !")
//     }else{
//         console.log("Technical work !!!")
//     };
// }else{console.log("Age need's to be a number")}
// };
// checkAge("abc") // ufter we try to transfer it to a int it will send NaN - not a number - which is Number type of data
// checkAge("17")
// checkAge(18)
// checkAge(59)
// checkAge(60)




//----------------------------------------------

let age2 = 18
let age3 = 60


let checkAge = function(age){
    
if (age && !isNaN(age)){         //if age1 = NaN - it have FALSE qality

    if (age < age2) {
        alert("You don't have the access, your age is " + age
        + " It's less then 18yo")
    }else if(age >= age2 && age < age3){
        alert("Welcome ! " + age
        + " Years old furt")
    }else if (age >= age3){
        alert("Get some viagra, cordiologist approval(is a pluss) and welcome !")
    }else{
        alert("Technical work !!!")
    };
}else{alert("Age need's to be a number")}
};
// checkAge("")
// checkAge("abc") 
// checkAge("0") 
// checkAge("17")
// checkAge(18)
// checkAge(59)
// checkAge(60) 

//let a = prompt('Enter your age')
//checkAge(a)



// let age_2 = 18
// let age_3 = 60

// let checkAges = function(...age){
//     age.forEach(el => {
//         if(el && !isNaN(el)){
//             if(el < age_2){
//                 console.log("You don't have the access, your age is " + age + " It's less then 18yo")
//             }else if(el >= age_2 && el < age_3){
//                 console.log("Welcome ! " + el + " Years old furt")
//             }else if (el >= age_3){
//                 console.log("Get some viagra, cordiologist approval(is a pluss) and welcome !")
//             }else{
//                 console.log("Technical work !!!");
//                     }
//         }else{console.log("Age need's to be a number")}
// })
// }
// checkAges('0','17',18,19,59,60,'','abc')


let age_2 = 18
let age_3 = 60

const div = document.getElementById('d')

let checkAges = function(...age){
    age.forEach(el => {
        if(el && !isNaN(el)){
            if(el < age_2){
                div.innerHTML += "You don't have the access, your age is " + age 
                + " It's less then 18yo"+ '<br />';
            }else if(el >= age_2 && el < age_3){
                div.innerHTML += "Welcome ! " + el + " Years old furt"+ '<br />';
            }else if (el >= age_3){
                div.innerHTML += "Get some viagra, cordiologist approval(is a pluss) and welcome !"+ '<br />';
            }else{
                div.innerHTML += "Technical work !!!"+ '<br />';
                    }
        }else{div.innerHTML += "Age need's to be a number"+ '<br />';}
})
}
checkAges('0','17',18,19,59,60,'','abc')
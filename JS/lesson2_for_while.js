// and - && 
// or - ||

let item1 = 5
let item2 = 16
let item3 = 50

if (item1 > 3 || item2 < 15 && item3 == 50){
    console.log("Oh my gosh i got a ticket")
} else {
    console.log("party is sold out")
}  
// same could be done in 1 line
let item4 = (item2>50)? console.log("item2 > 50") : console.log("item2 < 50")


//------while loop----------
counter = 0

while(counter < 10){
    counter++
    console.log("counter position = ",counter);
};

//------while loop----------
temp = 0
while(temp < 40){

    if(temp < 10){
        console.log(temp,"C Coold")
    }else if(temp >= 10 && temp < 30){
        console.log(temp,"C Warm")
    }else{
        console.log(temp, "C Florida Summer")
    }
    temp++
};


//-------for loop-----------

for(let i = 0; i<10;i+=2){
    console.log(i,"+ 2")
}
// or 

for(let i = 0; i<10;){
    console.log(i,"+ 2 =",i+=2)
}

//------for loop List iteration -------
let names = ['Kate','Ivan','Alex','Jastine','Anna','Tara']

for(let item1 in names){
    console.log(item1, names[item1])
};
// or 
for(let item1 of names){
    console.log(item1)
};
//----------
for(let item1 of names){
    if(item1 == "Anna"){
        break
    }
    console.log(item1)
};

//--- while loop list iteration-------
console.log("---------------while loop list iteration-------------------")

let names1 = ['Kate1','Ivan1','Alex1','Jastine1','Anna1','Tara1']

let items = names1.length
let count = 0
while(count < items){
    console.log(names[count])
    count++
}


  
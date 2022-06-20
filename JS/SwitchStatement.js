console.log(new Date().getDay());
let day

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break; 
    case 5:
        day = "Friday";
        break;   
    case 6:
        day = "Saturday";
        break;
    
    };
console.log("today is ",day)

//---------------------

let text
switch (new Date().getDay()) {

    default:
        text = "Week just started";
        break;
    case 4:
        text = "Almost there";
        break; 
    case 5:
        text = "Hppy Friday !!";
        break;   
    case 6:
    case 0:
        text = "Weekends";
    
    };
console.log("today is what? ",text)
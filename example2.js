var test = true;

function makemessage(test) {
    if (test) {
        console.log("Evaluated as True");
    } else {
        console.log("Evaluated as False");
    }
}

makemessage(1);


// makemessage(true);
// makemessage(false);
// makemessage(true);
// makemessage(false);
// makemessage(true);
// makemessage(false);

// //loops inside loops
// for(var num1 = 1; num1 < 9; num1++){
//     message = ""
//     for(var num2 = 1; num2 <= num1; num2++){
//         message = message + num2 + " ";
//     }
//     console.log(message);
//  }
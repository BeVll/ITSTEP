function Task1(dig1, dig2){
    if(dig1 < dig2){
        return -1;
    }
    else if(dig1 > dig2){
        return 1;
    }
    else{
        return 0;
    }
}

function Task2(digit){
    let res = 1;
    for(let i=1;i<digit;i++){
        res += res*i;
    }
    return res;
}

function Task3(dig1, dig2, dig3){
   let sum = String(dig1) + String(dig2) + String(dig3);
   return Number(sum);
}



function Task4(){
    if(arguments.length == 1){
        return arguments[0]*arguments[0];
    }
    else{
        return arguments[0]*arguments[1];
    }
}
function Task5(number) {
    let tmp = 0;
    for(var i=1;i<=number/2;i++) {
        if(number%i === 0) {
            tmp += i;
        }
    }

    if(tmp == number && tmp != 0) {
        return true;
    }  
    else {
        return false;
    }  
}
function Task6(min, max){
    let arr = [];
    for (let i = min; i <= max; i++) {
        if(Task5(i)){
            arr.push(i);
        }
        
    }
    console.log(arr);
}

function Task7(h, m, s){
    
}
Task6(1, 10000);
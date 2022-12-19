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

function Task4(l){
    return l*l;
}

function Task4(a, b){
    return a*b;
}


alert(Task4(4));
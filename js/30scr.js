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
    if(m == null && s == null){
        return(`${h}:00:00`);
    }
    else if(m == null){
        return(`${h}:00:${s}`);
    }
    else if(s == null){
        return(`${h}:${m}:00`);
    }
    else{
        return(`${h}:${m}:${s}`);
    }
}
function Task8(h, m, s){
    s += m*60;
    s += h*3600;
    return s;
}
function Task9(s){
    var hours = Math.floor(s / 3600);
    var minutes = Math.floor((s - (hours * 3600)) / 60);
    var seconds = s - (hours * 3600) - (minutes * 60);
    
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(hours < 10){
        hours = "0" + hours;
    }

    return hours + ':' + minutes + ':' + seconds;
}
function Task10(h1, m1, s1, h2, m2, s2){
    let res = Task8(h1, m1, s1) - Task8(h2, m2, s2);
    return Task9(res);
}

alert(Task10(6, 0, 0, 3, 15, 10));
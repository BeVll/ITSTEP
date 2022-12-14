function Task1(){
    let str = "546+0fsd-fsdf+dsf-sd-0";
    let min_count = 0;
    let min_count0 = 0;
    let plus_count = 0;
    let plus_count0 = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] == "+"){
            plus_count++;
        }
        else if(str[i] == "-"){
            min_count++;
        }
        
        if(str[i] == "+" && str[i+1] == "0"){
            min_count0++;
        }
        else if(str[i] == "-" && str[i+1] == "0"){
            plus_count0++;
        }
    }
    console.log(plus_count);
    console.log(min_count);
    console.log(plus_count0);
    console.log(min_count0);
}
function Task2(){
    let str = "fdgfegfd";
    for (let i = 0; i < str.length; i++) {
        if(str[i] == "w"){
            console.log("w");
            break;
        }
        else if(str[i] == "x"){
            console.log("x");
            break;
        }

        if(i == str.length-1){
            console.log("Немає");
        }
    }
}
function Task3(){
    let str = "abcfdgfegfd";
    if(str.substr(0, 3) == "abc"){
        str = "www" + str.substr(3);
    }
    else{
        str += "zzz";
    }
    console.log(str);
}
Task3();
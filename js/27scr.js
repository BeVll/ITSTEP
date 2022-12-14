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
function Task1_2(){
    let str = "abc";
    str = str.split('');
    let a = str.find(item => item != "a" && item != "b" && item != "c");
    if(a == undefined){
        console.log("Тільки ці символи!");
    }
    else{
        console.log("Є інші символи!");
    }
}
function Task2_2(){
    let str = "123456789";
    str = str.split('');
    let arr = [];
    for (let i = 2; i < str.length; i += 3) {
        arr.push(str.filter(item => item == str.at(i)));
    }
    console.log(arr);
}
function Task2_3(){
    let str = "abcdafavdksbsf";
    str = str.split('');
    let arr = [];
    str = str.map(item => item.replace("a", "A"));
    str = str.map(item => item.replace("b", "B"));
    console.log(str);
}
function Task2_4(){
    
    let arr = [];
    for(let i=0;i<15;i++){
        arr.push(i);
    }
    arr = arr.map(item => (arr.indexOf(item)*arr.indexOf(item)));
    console.log(arr);
}
function Task2_5(){
    
    let arr = ["fdsfdsf", "fdsf", "safddsaf", "afdsfasddsfsdfsdfs", "as"];

    arr = arr.sort(function(a, b) {
        if (a.length > b.length) return 1;
        if (a.length == b.length) return 0;
        if (a.length < b.length) return -1;
      });
    console.log(arr);
}
function Task2_6(){
    let str = "Good";
    str = str.split('');

    str = str.reverse();
    console.log(str);
}
function Task2_7(){
    let str = "Берестюк Владислав";
    str = str.split(' ');
    str = str.reverse();
    str = str.join(' ');
    console.log(str);  
}
Task2_7();
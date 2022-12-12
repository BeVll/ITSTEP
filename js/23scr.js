function Task1(){
    let res = prompt("Введіть вік: ");
    if(res >= 0 && res < 12) {
        alert("Ви дитина!");
    }
    else if(res >= 12 && res < 18) {
        alert("Ви підліток!");
    }
    else if(res >= 18 && res < 60) {
        alert("Ви дорослий!");
    }
    else if(res >= 60) {
        alert("Ви пенсіонер!");
    }
}
function Task2(){
    let res = prompt("Введіть цифру: ");
    switch (res) {
        case '1':
            alert("!");
            break;
        case '2':
            alert("@");
            break;
        case '3':
            alert("#");
            break;
        case '4':
            alert("$");
            break;
        case '5':
            alert("%");
            break;
        case '6':
            alert("^");
            break;  
        case '7':
            alert("&");
            break;
        case '8':
            alert("*");
            break;
        case '9':
            alert("(");
            break;
        case '0':
            alert(")");
            break;  
        default:
            break;
    }
}
function Task3(){
    let res = prompt("Введіть число: ");
    let array = (""+res).split("").map(Number);
    let check = false;
    
            if(array[0] == array[1] || array[0] == array[2] || array[1] == array[2]){
                check = true;
                
            }
    
   let ag = check ? "Є однакові цифри" : "Немає однакових цифр";
    alert(ag);
}

function Task4(){
    let res = prompt("Введіть рік: ");
    let kr = res % 400;
    if((res % 4) == 0 && (res % 100) != 0){
        alert("Високосний рік");
    }
    else{
        alert("Невисокосний рік");
    }
    
}
function Task5(){
    let res = prompt("Введіть число: ");
    let array1 = (""+res).split("").map(Number);
    let array2 = [];
    let check = true;
    for(let i=array1.length-1;i >= 0;i--){
        array2.push(array1[i]);
    }
    for (let i = 0; i < array1.length; i++) {
        if(array1[i] != array2[i]){
            check = false;
            break;
        }
        
    }
    if(check){
        alert('Число є паліндромом!');
    }
    else{
        alert("Число непаліндром!");
    }
}
Task6();
function prac(){
   let user = {
    name: 'Jay',
    branch: 'Computer Science'
   }
   console.log(user.name + " | " + user.branch);
}
// function SumOfNum(num) {
//     let sum = 0
//     while (num) {
//         sum += num % 10;
//         num = (num - num % 10) / 10;
//     }
//     return sum;
// }

// alert(SumOfNum(26368));

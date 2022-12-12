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
function Task6(){
    event.preventDefault();
    var second_val = document.getElementById('currency').selectedIndex;
    let kurs = 0;
    switch (second_val) {
        case 0:
            kurs = document.getElementById('value1').value * 0.95;
            document.getElementById('result').innerHTML = kurs + " EUR";
            break;
        case 1:
            kurs = document.getElementById('value1').value * 36.91;
            document.getElementById('result').innerHTML = kurs + " UAH";
            break;
        case 2:
            kurs = document.getElementById('value1').value * 1.70;
            document.getElementById('result').innerHTML = kurs + " AZN";
            break;
        default:
            break;
    }
}
function Task7(){
    let res = prompt("Введіть суму: ");
    if(res >= 200 && res < 300) {
       res = res - (res * 0.03);
    }
    else if(res >= 300 && res < 500) {
        res = res - (res * 0.05);
    }
    else if(res >= 500) {
        res = res - (res * 0.07);
    }
    alert("Сума зі знижкою: " + res);
}
function Task8(){
    let c = prompt("Введіть довжину кола: ");
    let p = prompt("Введіть периметр квадрата: ");
    let d = c/3.14;
    let l = p/4;
    if(d < l){
        alert("Поміститься!");
    }
    else{
        alert("Не поміститься!");
    }
}
function Task9(){
    let capital = prompt('Столиця України? 1 - London 2 - New York 3 - Kyiv');
    let capital2 = prompt('Столиця США? 1 - New York 2 - Washington 3 - Chicago');
    let capital3 = prompt('Столиця Іспанії? 1 - Barcelona 2 - Madrid 3 - Valencia');
    let score = 0;
    if (capital == 3)
        score += 2;
    if (capital2 == 2)
        score += 2;
    if (capital3 == 2)
        score += 2;
    alert('Балів: ' + score);
}
function Task10(){
    let date = prompt('Введіть дату(xx-xx-xxxx): ');
    let oldDate = new Date(date); 
    oldDate.setDate(oldDate.getDate()+1);
    alert(oldDate);
}
Task10();
function Task1(){
    let st = prompt("Введіть початок діапазону: ");
    let end = prompt("Введіть кінець діапазону: ");
    let sum = 0;
    for (let i = st; i <= end; i++) {
       sum += Number(i);
    }
    console.log(sum);
}
function Task2(){
    let st = prompt("Введіть перше число: ");
    let end = prompt("Введіть друге число: ");
    let i;
    if(end > st){
        i = end;
    }
    else{
        i = st;
    }
    while(st % i != 0 && end % i != 0){
        i--;
    }
    console.log(i);
}
function Task3(){
    let digit = prompt("Введіть число: ");
    let arr = [];
    for (let i = digit; i > 0; i--) {
        if(digit % i == 0){
            arr.push(i);
        }
    }
    console.log(arr);
}
function Task4(){
    let digit = prompt("Введіть число: ");
    console.log(digit.length);
}
function Task5(){
    let plus = 0;
    let minus = 0;
    let nulls = 0;
    let parni = 0;
    let neparni = 0;
    for(let i=0;i<10;i++){
        let res = prompt(`Введіть число(${i+1}): `);
        res = Number(res);
        if(res > 0){
            plus++;
        }
        else if(res < 0){
            minus++;
        }
        else{
            nulls++;
        }
        if(res % 2 == 0){
            parni++;
        }
        else{
            neparni++;
        }
    }
    console.log("> 0: " + plus);
    console.log("< 0: " + minus);
    console.log("== 0: " + nulls);
    console.log("Парні: " + parni);
    console.log("Непарні: " + neparni);
}
function Task6(){
    let check = false;
    do {
        let dig1 = Number(prompt("Введіть перше число: "));
        let znak = prompt("Введіть дію: ");
        let dig2 = Number(prompt("Введіть друге число: "));
        switch (znak) {
            case "+":
                alert(dig1+dig2);
                break;
            case "-":
                alert(dig1-dig2);  
                break;
            case "/":
                alert(dig1/dig2);
                break;
            case "*":
                alert(dig1*dig2);  
                break;
        
            default:
                break;
        }
        let cont = prompt("Продовжити? (Так +, Ні -) ");
        if(cont == "+"){
            check = true;
        }
        else{
            check = false;
        }
    } while (check);
}
function Task7(){
    let arr = [];
    let digit = prompt("Введіть число: ");
    let count = prompt("Введіть кількість пересувань: ");
    if(digit.length < count){
        console.log("Кількість пересувань більше за число!");
    }

    else{
        
        for(let i=0;i<digit.length;i++){
            arr.push(digit[i]);
        }
        for (let i = 0; i < count; i++) {
            arr.push(arr.shift());
            
        }
    }
    console.log(arr);
}
function Task8(){
    let arr = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
    let i = 0;
    do {
        alert(arr[i]);
        if(i == 6){
            i=0;
        }
        else{
            i++;
        }
    } while (confirm("Наступний день?"));
}
function Task9(){
    for (let i = 2; i <= 9; i++) {
        for(let x = 1; x <= 10; x++){
            console.log(i + " * " + x + " = " + i*x);
        }
        console.log("");
    }
}
function Task10() {
    // alert("Загадайте число від 0 до 100");
    // let res = "";
    // do {
    //     let rnd = Math.floor(Math.random() * 101);
    //     res = prompt(`Ваше число > {rnd}`)
    // } while (res != "=");

let arr = [];
for (let i = 0; i <= 100; i++) {
    arr.push(i.toString());  
}
while(true){
  let res = prompt(`Введіть > чи <, чи == за це значенння ${arr[Math.floor(arr.length / 2)]} ?`);
  if(res == '=='){
    alert(`Ви загадали число ${arr[Math.floor(arr.length / 2)]}`);
    break;
  }
  if(res == '>'){
    arr = arr.slice(Math.floor(arr.length / 2));
  }
  if(res == '<') {
    arr = arr.slice(0, Math.floor(arr.length / 2));
  }
}
}
Task10();
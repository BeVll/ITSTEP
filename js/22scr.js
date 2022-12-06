function Task1(){
    let pr = prompt("Введіть ім'я:");
    alert("Привіт, " + pr + "!");
}
Task10();
function Task2(){
    let pr = prompt("Введіть дату народження(xx.xx.xxxx):");
    
    const current_date = new Date();
    let age = current_date - Date.parse(pr);
    age = age / 31536000000;
    alert(Math.round(age));
}
function Task3(){
    let pr = prompt("Введіть довжину сторони:");
    alert("Периметр: " + pr*4 );
}
function Task4(){
    let pr = prompt("Введіть радіус кола:");
    alert("Площа: " + 3.14*pr*pr );
}
function Task5(){
    let length = prompt("Введіть відстань:");
    let time = prompt("Введіть час(хв):");
    time = time/60;
    alert(`Швидкість: ${length/time} км/год`);
}
function Task6(){
    const kurs = 1.05;
    let count = prompt("Введіть кількість доларів:");
    
    alert(`USD-EUR: ${count/1.05}`);
}
function Task7(){
    let count = prompt("Введіть об'єм флешки(Гб):");
    count = count * 1024;
    alert(`Файлів: ${count/820}`);
}
function Task8(){
    let count = prompt("Введіть суму грошей в гаманці:");
    let price = prompt("Введіть ціну 1 шоколадки:");
    let ostacha = count % price;
    let full_count = (count-ostacha) / price;
    alert(`Шоколадок: ${full_count}`);
    alert(`Решта: ${ostacha} грн`);
}
function Task9(){
    let count = prompt("Введіть число з 3-х цифр:");
    let num3 = count % 10;
    let num2 = (count % 100) - num3;
    num2 = num2 / 10;
    let num1 = ((count % 1000) - count % 100) / 100;
    alert("Число: " + num3 + "" + num2 + "" + num1);
    alert(`Решта: ${ostacha} грн`);
}
function Task10(){
    let count = prompt("Введіть ціле число :");
    alert(((count % 2) == 0) || "непарне");
}
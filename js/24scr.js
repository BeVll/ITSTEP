function Task1(){
    let str = "Привіт!";
    console.log(str);
    alert("Перший: " + str[0]);
    alert("Останній: " + str[str.length - 1]);
    if(str.length % 2 != 0){
        let id = (str.length - 1) / 2;
        console.log(id);
        console.log(str.length);
        alert("Середній: " + str[id]);
    }
}
function Task2(){
    let arr = [];
    let digit = 0;
    for(let i=0;i<15;i++){
        arr.push(digit);
        if(digit == 0){
            digit = 1;
        }
        else{
            digit = 0;
        }
    }
    console.log(arr);
}
function Task3(){
    let children = {
        name: "Ivan",
        surname: "Ivanov", 
        age: 15
    }
    let children2 = {
        name: "Ivan2",
        surname: "Ivanov2", 
        age: 18
    }
    console.log(children);
    console.log(children2);
}
Task3();
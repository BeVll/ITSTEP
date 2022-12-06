let num1 = null;
let num2 = null;
let znak = null;
function btn_click(){
    
    if(event.target.innerHTML == "C"){
        document.getElementById("res").innerHTML = "";
        num1 = null;
        num2 = null;
        znak = null;
    }
    else if(event.target.innerHTML == "="){
        let res;
        let number1 = parseInt(num1, 10);
        let number2 = parseInt(num2, 10);
        switch (znak) {
            case "/":
                res = number1 / number2;
                break;
            case "*":
                res = number1 * number2;
                break;
            case "+":
                res = number1 + number2;
                break;
            case "-":
                res = number1 - number2;
                break;
            default:
                break;
        }
        document.getElementById("res").innerHTML = res;
        num1 = null;
        num2 = null;
        znak = null;
    }
    else{
        let text = event.target.innerHTML;
        if(text == "/" || text == "*" || text == "+" || text == "-"){
            if(znak == null && num1 != null){
                document.getElementById("res").innerHTML += text;
                znak = text;
            }
            else{
                document.getElementById("res").innerHTML = "Error";
                num1 = null;
                num2 = null;
                znak = null;
            }
        }
        else{
            if(znak == null){
                if(document.getElementById("res").innerHTML == "Error"){
                    document.getElementById("res").innerHTML = "";
                }
                document.getElementById("res").innerHTML += text;
                if(num1 == null){
                    num1 = text;
                }
                else{
                    num1 += text;
                }
            }
            else{
                if(document.getElementById("res").innerHTML == "Error"){
                    document.getElementById("res").innerHTML = "";
                }
                document.getElementById("result").innerHTML += text;
                if(num2 == null){
                    num2 = text;
                }
                else{
                    num2 += text;
                }
            }
        }
        
    }
}
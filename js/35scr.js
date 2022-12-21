let rect = `<rect xmlns="http://www.w3.org/2000/svg" fill="#50C878" stroke="#222222" stroke-width="2" stroke-linejoin="round" stroke-dashoffset="" fill-rule="nonzero" id="need" x="2.209945112137669" y="2.209942185409241" width="96.13259751608798" height="96.68508317576106" style="color: rgb(0, 0, 0);" class="selected"/>`;
let kolo = `<path xmlns="http://www.w3.org/2000/svg" fill="#50C878" fill-opacity="1" stroke="#222222" stroke-opacity="1" stroke-width="2" stroke-dasharray="none" stroke-linejoin="round" stroke-linecap="butt" stroke-dashoffset="" fill-rule="nonzero" opacity="1" marker-start="" marker-mid="" marker-end="" d="M1.657458964458614,50.33049067342218 C1.657458964458614,23.441259001279743 23.391548505293542,1.6609813468443662 50.22375781496629,1.6609813468443662 C77.05596712463904,1.6609813468443662 98.79005666547397,23.441259001279743 98.79005666547397,50.33049067342218 C98.79005666547397,77.21972234556463 77.05596712463904,99 50.22375781496629,99 C23.391548505293542,99 1.657458964458614,77.21972234556463 1.657458964458614,50.33049067342218 z" id="need" class=""/>`
let tryk = `<path xmlns="http://www.w3.org/2000/svg" fill="#50C878" fill-opacity="1" stroke="#222222" stroke-opacity="1" stroke-width="2" stroke-dasharray="none" stroke-linejoin="round" stroke-linecap="butt" stroke-dashoffset="" fill-rule="nonzero" opacity="1" marker-start="" marker-mid="" marker-end="" id="need" d="M49.95192024119672,1.994103804574464 L1.6625264639637942,98.34254293657433 L98.89502761511719,98.34254293657433 L49.95192024119672,1.994103804574464 z" style="color: rgb(0, 0, 0);" class=""/>`;

let forms = [];
forms.push(rect, kolo, tryk);

let colors = ["#eb1a1a", "#318CE7", "#F4CA16"];

let need_color = 0;
let need_form = 0;

class Cake {
    constructor(form, color) {
      this.form = form;
      this.color = color;
    }
    showToNeed(){
        document.getElementById("svg_need").innerHTML = this.form;
        document.getElementById("need").style.fill = this.color;
    }
  }

  document.addEventListener("DOMContentLoaded", ready);
  function ready(){
    let list = document.querySelectorAll(".form li");
    list.forEach(element => {
        element.addEventListener( "click" , () => {
            list.forEach(e => {
                e.classList.remove("active");
            });

            element.classList.add("active");
        }); 
    });
  }

  document.addEventListener("DOMContentLoaded", ready2);
  function ready2(){
    let list = document.querySelectorAll(".color li");
    list.forEach(element => {
        element.addEventListener( "click" , () => {
            list.forEach(e => {
                e.classList.remove("active");
            });

            element.classList.add("active");
        }); 
    });
  }

  function createRandom(){
    need_form = Math.floor(Math.random() * 3);
    need_color = Math.floor(Math.random() * 3);
    let figura = new Cake(forms[need_form], colors[need_color]);
    figura.showToNeed();
  }


  function checkRight(){
    let list_colors = document.querySelectorAll(".color li");
    let index_color = -1;
    for (let i = 0; i < list_colors.length; i++) {
        if(list_colors[i].classList.contains("active")){
            index_color = i;
            break;
        }
    }
    
    let list_forms = document.querySelectorAll(".form li");
    let index_form = -1;
    for (let i = 0; i < list_forms.length; i++) {
        if(list_forms[i].classList.contains("active")){
            index_form = i;
            break;
        }
    }

    if(need_color != index_color && need_form != index_form){
        alert("Неправильний колір та форма!");
    }
    else if(need_color != index_color){
        alert("Неправильний колір!");
    }
    else if(need_form != index_form){
        alert("Неправильна форма!");
    }
    else{
        alert("Все правильно! Натисність, щоб розпочати нову гру...");
        createRandom();
    }
  }
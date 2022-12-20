//================Settings===================
  let anim_speed = 25;
  let start_satiety = 50;
  let start_gladness = 50;
  let start_sleep = 50;
  let start_health = 50;
//================Settings===================
let current_animal = "Вівця";

let animal = {
    name: "Animal",
    satiety: start_satiety,
    gladness: start_gladness,
    sleep: start_sleep,
    health: start_health,
    eat() {
      if(this.satiety != 100){
        this.satiety += 20;
        if(this.satiety > 100){
          this.satiety = 100;
        }
        this.health += 5;
        this.gladness += 5;
        document.getElementById("emotion").innerHTML = "Ням-Ням... Смачно";
      }
      else{
        this.health -= 10;
        this.gladness -= 5;
        this.sleep -= 5;
        document.getElementById("emotion").innerHTML = "Ням-Ням... Але забагато";
      }
      setAnimal(this);
      
    },
    fun() {
      if(this.gladness != 100){
        this.gladness += 20;
        if(this.gladness > 100){
          this.gladness = 100;
        }
        this.sleep -= 15;
        this.satiety -= 5;
        this.health -= 5;
        document.getElementById("emotion").innerHTML = "Ура-ураа... граємось";
      }
      else{
        this.health -= 10;
        this.satiety -= 10;
        this.sleep -= 10;
        document.getElementById("emotion").innerHTML = "Я дуже втомився";
      }
      setAnimal(this);
    },
    sleeping() {
      if(this.sleep != 100){
        this.sleep += 20;
        if(this.sleep > 100){
          this.sleep = 100;
        }
        this.satiety -= 15;
        document.getElementById("emotion").innerHTML = "Z-z-z-z-z-z-z";
      }
      else{
        this.satiety -= 20;
        this.health -= 10;
        this.gladness -= 5;
        document.getElementById("emotion").innerHTML = "Z-z-z-z-z-z-z";
      }
    
        setAnimal(this);
    },
    treated() {
      if(this.health != 100){
        this.health += 20;
        if(this.health > 100){
          this.health = 100;
        }
        this.sleep -= 10;
        this.satiety -= 10;
        this.gladness += 10;
        document.getElementById("emotion").innerHTML = "Ура-ураа... Я здоровий";
      }
      else{
        this.satiety -= 15;
        this.gladness -= 10;
        this.sleep -= 15;
        document.getElementById("emotion").innerHTML = "Хмм... Навіщо? Я був здоровим";
      }
        setAnimal(this);
    },
    
  };

let ovca = {
  name: "Вівця",
  __proto__: animal
};
let chicken = {
  name: "Курка",
  __proto__: animal
};

function eat(){
  switch(current_animal){
    case "Вівця":
      ovca.eat();
    break;
    case "Курка":
      chicken.eat();
    break;
    default:
      break;
  }

}
function fun(){
  switch(current_animal){
    case "Вівця":
      ovca.fun();
    break;
    case "Курка":
      chicken.fun();
    break;
    default:
      break;
  }
}
function sleep(){
  switch(current_animal){
    case "Вівця":
      ovca.sleeping();
    break;
    case "Курка":
      chicken.sleeping();
    break;
    default:
      break;
  }
}
function treated(){
  switch(current_animal){
    case "Вівця":
      ovca.treated();
    break;
    case "Курка":
      chicken.treated();
    break;
    default:
      break;
  }
}

setAnimal(ovca);

function setAnimal(anim){
  document.getElementById("animal_name").innerHTML = anim.name;
  if(anim.name == "Вівця"){
    document.getElementById("logo").src = "../images/ovca.png";
  }
  else if(anim.name == "Курка"){
    document.getElementById("logo").src = "../images/chicken.png";
  }
  setEat(anim.satiety);
  setFun(anim.gladness);
  setSleep(anim.sleep);
  setHealth(anim.health);
}

function setEat(need) {
      let elem = document.getElementById("syt_prog");
      let height = elem.style.height;
      height = Number(height.replace("%", ""));
      let id = setInterval(frame, anim_speed);
      function frame() {
        if (height == need) {
          clearInterval(id);
        } 
        else {
            if(need > height && height < 100){
                height ++;
            }
          else if(height != 0){
            height--;
          }
          elem.style.height = height + "%";
        }
        if(height > 95){
          elem.style.borderRadius = "5px";
        }
        else{
          elem.style.borderRadius = "0 0 5px 5px";
        }
      }
  }

  function setFun(need) {
    let elem = document.getElementById("fun_prog");
      let height = elem.style.height;
      height = Number(height.replace("%", ""));
      let id = setInterval(frame, anim_speed);
      function frame() {
        if (height == need) {
          clearInterval(id);
        } 
        else {
          if(need > height && height < 100){
                height++;
            }
          else if(height != 0){
            height--;
          }
          elem.style.height = height + "%";
        }
        if(height > 95){
          elem.style.borderRadius = "5px";
        }
        else{
          elem.style.borderRadius = "0 0 5px 5px";
        }
      } 
  }

  function setSleep(need) {
    let elem = document.getElementById("sleep_prog");
      let height = elem.style.height;
      height = Number(height.replace("%", ""));
      let id = setInterval(frame, anim_speed);
      function frame() {
        if (height == need) {
          clearInterval(id);
        } 
        else {
          if(need > height && height < 100){
                height++;
            }
          else if(height != 0){
            height--;
          }
          elem.style.height = height + "%";
        }
        if(height > 95){
          elem.style.borderRadius = "5px";
        }
        else{
          elem.style.borderRadius = "0 0 5px 5px";
        }
      } 
  }

  function setHealth(need) {
    let elem = document.getElementById("health_prog");
      let height = elem.style.height;
      height = Number(height.replace("%", ""));
      let id = setInterval(frame, anim_speed);
      function frame() {
        if (height == need) {
          clearInterval(id);
        } 
        else {
          if(need > height && height < 100){
                height++;
            }
          else if(height != 0){
            height--;
          }
          elem.style.height = height + "%";
        }
        if(height > 95){
          elem.style.borderRadius = "5px";
        }
        else{
          elem.style.borderRadius = "0 0 5px 5px";
        }
      } 
  }

  function changeAnimal(elem){
    if(elem == "Курка"){
      current_animal = "Курка";
      setAnimal(chicken);
    }
    else if(elem == "Вівця"){
      current_animal = "Вівця";
      setAnimal(ovca);
    }
  }
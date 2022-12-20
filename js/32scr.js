let animal = {
    satiety: 25,
    gladness: 25,
    sleep: 50,
    health: 50,
    eat() {
      this.satiety += 25;
      setEat(this.satiety);
    },
    fun() {
        this.gladness += 25;
        setFun(this.gladness);
    },
    sleeping() {
        this.sleep += 25;
    },
    treated() {
        this.health += 25;
    },
  };

let ovca = {
    __proto__: animal
};

function eat(){
    ovca.eat();
}
function fun(){
    ovca.fun();
}


function setEat(need) {
      let elem = document.getElementById("syt_prog");
      let height = elem.style.height;
      let id = setInterval(frame, 15);
      function frame() {
        if (height >= 100 || height == need) {
          clearInterval(id);
        } 
        else {
            if(need > height){
                height++;
            }
          else{
            height--;
          }
          elem.style.height = height + "%";
        }
      }
  }

  function setFun(need) {
    let elem = document.getElementById("fun_prog");
    let height = elem.style.height;
    let id = setInterval(frame, 15);
    function frame() {
      if (height >= 100 || height == need) {
        clearInterval(id);
      } 
      else {
          if(need > height){
              height++;
          }
        else{
          height--;
        }
        elem.style.height = height + "%";
      }
    }
}
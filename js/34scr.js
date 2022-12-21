class Dog {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    show() {
      console.log(this.name);
      console.log(this.age);
    }
    sleep(){
        console.log("Собака: спить...");
    }
    voice(){
        console.log("Собака: Гав-гав...");
    }
  }
  let dog = new Dog("Patron", 4);
  dog.show();
  dog.sleep();
  dog.voice();
function Cat(name, age){
    this.name = name;
    this.age = age;
}
Cat.prototype.show = function(){
    console.log(this.name);
    console.log(this.age);
}
Cat.prototype.sleep = function(){
    console.log("Кіт: спить...");
}
Cat.prototype.voice = function(){
    console.log("Кіт: Мяу-Мяу...");
}
let cat = new Cat("Mars", 2);
cat.show();
cat.sleep();
cat.voice();
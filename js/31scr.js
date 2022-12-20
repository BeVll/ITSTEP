function Task1(digit, steps) {
    if (steps == 1) {
      return digit;
    } 
    else {
      return digit * Task1(digit, steps-1);
    }
  }
  function Task2(a, b) {
      if (b == 0){
        return a;
      }  
      if (a > b)
          return Task2 (b, a % b);
      else
          return Task2 (a, b % a);
  }
  function Task3(number) {
    if (number < 10) {
        return number;
    }
    else{
        return Math.max(number % 10, Task3(Math.round(number / 10)));
    } 
  }
  function Task4(number, i) {
    if (number == i){
        return "Просте";
    }
    if (number % i == 0){
        return "Непросте";
    }  
    else{
        return Task4(number, i+1);
    }   
}
   function Task5(a, arr, b) {
    if(b > Math.sqrt(a)) {
      arr.push(a);
      return arr;
    } 
    else if(a % b == 0) {
      arr.push(b);
      Task5(a / b, arr, b);
    } 
    else{
        Task5(a, arr, b+1);
    }
    return arr.join("*");
  }

  function Task6(i) {
    if(i <= 1){
      return i;
    }
    else{
      return Task6(i - 1) + Task6(i - 2);
    }
  }
    
alert(Task6(10));
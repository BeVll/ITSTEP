function Task1(){
    let arr = [
        {
            name: "Coca-cola", quantity: 30, bought: true,
        },
        {
            name: "Pepsi", quantity: 15, bought: false,
        },
        {
            name: "Burger", quantity: 19, bought: false,
        },
        {
            name: "Sprite", quantity: 18, bought: true,
        },
    ] ;

    show(arr);

    show(Task1_1(arr));  

    let el = {
            name: "Sprite2", quantity: 2, bought: true,
        };

    arr = addElement(el, arr);
    show(arr);

    arr = buyProdut('Pepsi', arr);
    show(arr);

    function Task1_1(array){
        array.sort(function compareFn(a, b) { 
        if(a.bought){
            return 1;
        }  
        else{
            return -1;
        }
            
     })
     return array;
    }

    function show(array){
        console.log("==========================");
        array.forEach(e => {
            console.log(`name: ${e.name}, quantity: ${e.quantity}, bought: ${e.bought}`);
        }); 
        console.log("==========================");
    }

    function addElement(element, array){
        let found = array.find(e => e.name == element.name);

        if(found != null){
            let index = array.indexOf(found);
            array[index].quantity += element.quantity;
        }
        else{
            array.push(element);
        }
        return array;
    }

    function buyProdut(name, array){
        let found = array.find(e => e.name == name);
        if(found != null){
            let index = array.indexOf(found);
            array[index].bought = true;
        }
        else{
            console.log('Немає такого продукту!');
        }
        return array;
    }
}

function Task2() {
    let arr = [
        {
            name: "Coca-cola", quantity: 1, price: 30,
        },
        {
            name: "Pepsi", quantity: 2, price: 28,
        },
        {
            name: "Burger", quantity: 2, price: 60,
        },
        {
            name: "Sprite", quantity: 1, price: 24,
        },
    ] ;

    show(arr);

    console.log(sum(arr));  
    console.log(max(arr));
    console.log(avg(arr));

    function show(array){
        console.log("==========================");
        array.forEach(e => {
            console.log(`name: ${e.name}, quantity: ${e.quantity}, price: ${e.price}`);
        }); 
        console.log("==========================");
    }

    function sum(array){
        let sum = 0;    
        array.forEach(element => {
            sum += element.price * element.quantity;
        });
        return sum;
    }

    function max(array){
        let max = Math.max.apply(Math, array.map(function(o) { return o.price; }))
        return max;
    }

    function avg(array){
        let avg = 0;
        let lenght = 0;
        array.forEach(element => {
            avg += element.price;
            lenght++;
        });

        avg = avg / lenght; // array.lenght не працює
        return avg;
    }
}
function Task3() {
    let styles = [
        {
            name: "font-size", property: '28px',
        },
        {
            name: "color", property: 'red',
        },
        {
            name: "text-decoration", property: 'underline',
        },
        {
            name: "font-weight", property: 'bold',
        },
    ] ;
    let style_str = '';
    styles.forEach(e => {
        style_str += e.name + ': ' + e.property + '; ';
    });
    document.write('<p style="'+style_str+'">Uraaaa</p>');
    
}
function Task4() {
    let rooms = [
        {
            name: "Room-1", count_seats: 12, facul: "Програмування",
        },
        {
            name: "Room-2", count_seats: 16, facul: "Дизайн",
        },  
        {
            name: "Room-3", count_seats: 14, facul: "Системне адміністрування",
        },
        {
            name: "Room-4", count_seats: 17, facul: "Програмування",
        },
    ] ;
    let group = {
        name: "Room-1", students: 13, facul: "Програмування",
    }
    show(rooms);
    showForFacul(rooms, 'Програмування');
    showForGroup(rooms, group);
    show(sortBySeats(rooms));
    show(sortByNames(rooms));
    function show(array){
        console.log("==========================");
        array.forEach(e => {
            console.log(`name: ${e.name}, count_seats: ${e.count_seats}, facul: ${e.facul}`);
        }); 
        console.log("==========================");
    }
    function showForFacul(array, name){
        console.log("==========================");
        array = array.filter(e => e.facul == name);
        array.forEach(e => {
            console.log(`name: ${e.name}, count_seats: ${e.count_seats}, facul: ${e.facul}`);
        }); 
        console.log("==========================");
    }
    function showForGroup(array, group){
        console.log("==========================");
        array = array.filter(e => e.facul == group.facul && e.count_seats >= group.students);
        array.forEach(e => {
            console.log(`name: ${e.name}, count_seats: ${e.count_seats}, facul: ${e.facul}`);
        }); 
        console.log("==========================");
    }
    function sortBySeats(array){
        array.sort(function compareFn(a, b) { 
            return a.count_seats - b.count_seats;
         })
         return array;
    }
    function sortByNames(array){
        array.sort(function compareFn(a, b) { 
            if(a.name > b.name){
                return 1;
            }  
            else{
                return -1;
            }
         })
         return array;
    }
}
Task4();
// ===================Task1===================
let car = {
    company: "Mercedes-Benz",
    model: "Vito",
    year: 2015,
    avg_speed: 4,
    show(){
        alert(this.company + "\n" + this.model + "\n" + this.year + "\n" + this.avg_speed);
    },
    check_time(lenght){
        let t = lenght/this.avg_speed;
        if(t > 4){
            t += 1 * (t - t%4) / 4;
        }
        alert("Time: " + t);
    }
    
}


// ===================Task2===================
let drob = {
    chysl: 1,
    znam: 2,
    plus(dr1, dr2){
        let dr_res = {
            chysl: 0,
            znam: 0,
            __proto__: this
        }
        console.log(dr1);
        console.log(dr2);
        if(dr1.znam == dr2.znam){
            dr_res = dr1;
            dr_res.chysl += dr2.chysl;
            dr_res.znam = dr1.znam;
        }
        else{
            if(dr1.znam > dr2.znam){
                for (let i = dr1.znam; i < 9999; i++) {
                    if(i % dr1.znam == 0 && i % dr2.znam == 0){
                        dr_res.znam = i;
                        break;
                    }
                }
            }
            else{
                for (let i = dr2.znam; i < 9999; i++) {
                    if(i % dr1.znam == 0 && i % dr2.znam == 0){
                        dr_res.znam = i;
                        break;
                    }
                }
            }
            dr1.chysl = dr1.chysl * (dr_res.znam/dr1.znam);
            dr2.chysl = dr2.chysl * (dr_res.znam/dr2.znam);
            dr_res.chysl = dr1.chysl + dr2.chysl;
        }
        return `${dr_res.chysl}/${dr_res.znam}`;
    },
    minus(dr1, dr2){
        let dr_res = {
            chysl: 0,
            znam: 0,
            __proto__: this
        }
        console.log(dr1);
        console.log(dr2);
        if(dr1.znam == dr2.znam){
            dr_res = dr1;
            dr_res.chysl -= dr2.chysl;
            dr_res.znam = dr1.znam;
        }
        else{
            if(dr1.znam > dr2.znam){
                for (let i = dr1.znam; i < 9999; i++) {
                    if(i % dr1.znam == 0 && i % dr2.znam == 0){
                        dr_res.znam = i;
                        break;
                    }
                }
            }
            else{
                for (let i = dr2.znam; i < 9999; i++) {
                    if(i % dr1.znam == 0 && i % dr2.znam == 0){
                        dr_res.znam = i;
                        break;
                    }
                }
            }
            dr1.chysl = dr1.chysl * (dr_res.znam/dr1.znam);
            dr2.chysl = dr2.chysl * (dr_res.znam/dr2.znam);
            dr_res.chysl = dr1.chysl - dr2.chysl;
        }
        return `${dr_res.chysl}/${dr_res.znam}`;
    },
    mnoz(dr1, dr2){
        let dr_res = {
            chysl: 0,
            znam: 0,
            __proto__: this
        }
        console.log(dr1);
        console.log(dr2);
        dr_res.chysl = dr1.chysl * dr2.chysl;
        dr_res.znam = dr1.znam * dr2.znam;
        return `${dr_res.chysl}/${dr_res.znam}`;
    },
    dil(dr1, dr2){
        let dr_res = {
            chysl: 0,
            znam: 0,
            __proto__: this
        }
        console.log(dr1);
        console.log(dr2);
        dr_res.chysl = dr1.chysl * dr2.znam;
        dr_res.znam = dr1.znam * dr2.chysl;
        return `${dr_res.chysl}/${dr_res.znam}`;
    },
    scor(dr){
        let dr_res = {
            chysl: dr.chysl,
            znam: dr.znam,
            __proto__: this
        }   
        for (let i = 2; i <= dr.chysl; i++) {
            if (dr.chysl % i === 0 &&  dr.znam % i === 0){
                dr_res.chysl = dr.chysl / i;
                dr_res.znam = dr.znam / i;
            }
        }
        return `${dr_res.chysl}/${dr_res.znam}`;
    }
}
let drob1 = {
    chysl: 21,
    znam: 35,
    __proto__: drob
}
let drob2 = {
    chysl: 4,
    znam: 5,
    __proto__: drob
}
// alert(drob.scor(drob1));


// ===================Task3===================
let time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    show(){
        return `${this.hours}:${this.minutes}:${this.seconds}`;
    },
    addseconds(count){
        let d = new Date("1995-12-17 " + this.show());
        d.setSeconds(d.getSeconds() + count);
        this.hours = d.getHours();
        this.minutes = d.getMinutes();
        this.seconds = d.getSeconds();
    },
    addminutes(count){
        let d = new Date("1995-12-17 " + this.show());
        d.setMinutes(d.getMinutes() + count);
        this.hours = d.getHours();
        this.minutes = d.getMinutes();
        this.seconds = d.getSeconds();
    },
    addhours(count){
        let d = new Date("1995-12-17 " + this.show());
        d.setHours(d.getHours() + count);
        this.hours = d.getHours();
        this.minutes = d.getMinutes();
        this.seconds = d.getSeconds();
    }
}

console.log(time.show());
time.addseconds(115);
console.log(time.show());
time.addminutes(30);
console.log(time.show());
time.addhours(4);
console.log(time.show());
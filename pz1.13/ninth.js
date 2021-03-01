 class Worker {
     constructor(name, surname, rate, days) {
         this.name = name;
         this.surname = surname;
         this.rate = rate;
         this.days = days;
     }
     getSalary() { return console.log(`Salary worker: ${this.days * this.days}`) }
 }
 let w1 = new Worker('Michael', 'Chepuretnikov', 400, 15)
 let w2 = new Worker('Waldemar', 'Kovalenko', 150, 10)
 let w3 = new Worker('Alex', 'Sherlok', 340, 20)
 w1.getSalary();
 w2.getSalary();
 w3.getSalary();
 console.log(w1)
 console.log(w2)
 console.log(w3)
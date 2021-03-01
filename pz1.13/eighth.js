 class Task {
     constructor(name, description, startDate, endDate) {
         this.name = name;
         this.description = description;
         this.startDate = startDate;
         this.endDate = endDate;
     }
     subtask(){
         let today = new Date();
         return Math.round(( ( today - Date.parse(this.startDate)) / ( Date.parse(this.endDate) - Date.parse(this.startDate) ) ) * 100) + "%"
     }
 }

 let t1 = new Task('Learn english', 'Have to learn!', 'Jan 22, 2021','October 25, 2021' )
 console.log(t1)
 console.log(t1.subtask())
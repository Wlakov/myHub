let characters = [
     {name: "Barney", age: 36},
     {name: "Fred", age: 40}
 ];

 function pluck(array) {
     return array.map(item => item.name)
         .filter((value, index, self) => self.indexOf(value) === index)
 }

 console.log(pluck(characters)); //['Barney', 'Fred'];
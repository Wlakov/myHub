//halftriangle
for (let i = 5; i >= 1; i--) {
    let star = "";
    for (let j = i; j <= 5; j++) {
        star += "*";
    }
    console.log(star);
}

//pyramid
for (let i = 0; i < 5; i++) {
    let star = '';
    for (let j = 1; j < 5-i; j++) {
        star = star + ' ';
    }
    for (let k = 1; k <= (2*i+1); k++) {
        star = star + '*';
    }
    console.log(star);
}

 for (let i = 1; i <= 8 / 2; i++) {
     let countOfStars = i * 2 - 1;
     let countOfSpaces = 8 - countOfStars;
     let string = '';
   for (let j = 0; j < countOfSpaces / 2; j++) {
         string += ' ';
     }
     for (let j = 0; j < countOfStars; j++) {
         string += '*';
     }
     for (let j = 0; j < countOfSpaces / 2; j++) {
         string += ' ';
     }
     console.log(string);
 }
 let string = '';
 for (let i = 0; i < 8; i++) {
     string += '*'
 }
 console.log(string)

 for (let i = 1; i <= 8 / 2; i++) {
     let countOfStars = 8 - 2 * i;
     let countOfSpaces = 8 - countOfStars;
     let string = '';
     for (let j = 0; j < countOfSpaces / 2; j++) {
         string += ' ';
     }
     for (let j = 0; j < countOfStars; j++) {
         string += '*';
     }
     for (let j = 0; j < countOfSpaces / 2; j++) {
         string += ' ';
     }
     console.log(string);
 }
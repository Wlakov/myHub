function sequence(start, step) {
     return () => (start === 0 ? start += 1 : start += step)
 }
 generator = sequence(10, 3);
 let generator2 = sequence(7,1);

 console.log(generator());
 console.log(generator2());
 console.log(generator());
 console.log(generator2());
 console.log(generator());
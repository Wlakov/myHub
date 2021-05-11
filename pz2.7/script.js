let fs = require('fs');
let path = 'D:\\Documents\\ProjectX\\capital_country.csv';
let csv = require('csv-parse');
let rl= require('readline');
let pathofnewfile='D:\\Documents\\ProjectX\\data.js'
let util = require('util');
const readline=rl.createInterface({
    input:process.stdin,
    output:process.stdout
});
/*
let promise= new Promise(function (resolve){
    readline.question('Type name of your file ',answer => {
        resolve(answer);
    })
*/

function newFile (newFileName) {
    fs.open(__dirname + '/' + newFileName,'w', (err) => {
            if (err) {
                console.log("\n\nУпссс...\n\n");
            }
            console.log('Файл створений');
        })
    }
    //readline.close();

/*newFile('data.js');*/
function crs(path) {
    fs.createReadStream(path)
        .pipe(csv())
        .on('data', (row) => {
            console.log(row);
            return row;
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
        });
}

crs(path);






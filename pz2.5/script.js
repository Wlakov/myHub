let fs = require('fs');
let events = require('events');
let readline = require('readline');
let path = require('path');
let emitter = new events.EventEmitter();
let colors = require('colors');
__dirname = "D:\\Documents\\Projects\\trpz";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
Menu();
function Menu() {
    rl.question('Файловий менеджер\n1. Подивитися папку\n2. Змінити папку\n3. Створити файл/папку' +
        '\n4. Прочитати файл\n5. Змінити файл\n6. Змінити імя\n7. Видалити\n8. Інфо про файл/папку' +
        '\n9. Вихід\n\nТи зараз тут ' + __dirname + '\n', (answer) => {
        switch (answer) {
            case "1":
                if (__dirname === "") {
                    console.log("Ти не вибрав папку");
                    Menu();
                    break;
                }
                else {
                    emitter.emit('content');
                    Menu();
                    break;
                }
            case "2":
                emitter.emit('change');
                break;
            case "3":
                rl.question('Створити файл/директорію. 1 для файлу,2 для папки\n', (typeOfCreation) => {
                    switch (typeOfCreation) {
                        case "1":
                            emitter.emit('createFile');
                            break;
                        case "2":
                            emitter.emit('createDir');
                            Menu();
                            break;
                        default:
                            console.log("Неправильний ввід\n\n");
                            Menu();
                            break;
                    }
                });
                break;
            case "4":
                emitter.emit('readFile');
                break;
            case "5":
                emitter.emit('modifyFile');
                break;
            case "6":
                emitter.emit('rename');
                break;
            case "7":
                rl.question('Видалити файл або папку. 1 для файлу,2 для папки\n', (typeOfCreation) => {
                    switch (typeOfCreation) {
                        case "1":
                            emitter.emit('deleteFile');
                            break;
                        case "2":
                            emitter.emit('deleteDir');
                            break;
                        default:
                            console.log("Неправильни ввід\n\n");
                            Menu();
                            break;
                    }
                });
                break;
            case "8":
                emitter.emit('info');
                break;
            case "9":
                emitter.emit('Exit');
                break;
            default:
                Menu();
                break;
        }
    });
}
emitter.on('content', function () {
    fs.readdir(__dirname, function (err, items) {
        for (let i = 0; i < items.length; i++) {
            fs.stat(__dirname + '/' + items[i], (err, stats) => {
                if(err){
                    console.log("\n\nЩось пішло не так\n\n");
                    Menu();
                }
                if (stats.isFile()) {
                    console.log(colors.green(items[i].toString()));
                }
                else if (stats.isDirectory()) {
                    console.log(colors.blue(items[i].toString().blue));
                }
            });
        }
        console.log("Натисність будь-яку клавішу");
    });
});
emitter.on('change', function () {
    rl.question('Напишіть шлях\n', (pathToDir) => {
        __dirname = path.normalize(pathToDir);
        console.log("\n\nУспіх\n\n")
        Menu();
    });
});
emitter.on('createFile', function () {
    rl.question('Напишіть назву файлу і формат\n', (newFileName) => {
        fs.open(__dirname + '/' + newFileName, 'w', (err) => {
            if(err){
                console.log("\n\nУпссс...\n\n");
                Menu();
            }
            console.log('Файл створений');
            Menu();
        });
    });
});
emitter.on('createDir', function () {
    rl.question('Напишіть назву нової папки\n', (newDirectoryName) => {
        fs.mkdir(__dirname + '/' + newDirectoryName, err => {
            if(err){
                console.log("\n\nУпссс...\n\n");
                Menu();
            }
            console.log('Папка створена!');
            Menu();
        });
    });
});
emitter.on('readFile', function () {
    rl.question('Напишіть назву файлу,який хочете прочитати\n', (fileName) => {
        fs.readFile(__dirname + '/' + fileName, 'utf8', (err, data) => {
            if(err){
                console.log("\n\nУпссс...\n\n");
                Menu();
            }
            console.log(data + '\n');
            Menu();
        });
    });
});
emitter.on('rename', function () {
    rl.question('Напишіть назву старої папки або файлу\n', (oldName) => {
        rl.question('Напишіть нову назву папки або файлу\n', (newName) => {
            fs.rename(__dirname + '/' + oldName, __dirname + '/' + newName, (err) => {
                if(err){
                    console.log("\n\nУпссс...\n\n");
                    Menu();
                }
                console.log("Папка " + oldName + " перейменована " + newName + "\n");
                Menu();
            });
        });
    });
});
emitter.on('deleteFile', function () {
    rl.question('Напишіть назву файлу для видалення\n', (deleteFileName) => {
        fs.rm(__dirname + '/' + deleteFileName, { recursive:true }, (err) => {
            if(err){
                console.log("\n\nУпссс....\n\n");
                Menu();
            }
            console.log("Файл видалений");
            Menu();
        });
    });
});
emitter.on('deleteDir', function () {
    rl.question('Напишіть назву папки\n', (deleteDirectoryName) => {
        fs.rmdir(__dirname + '/' + deleteDirectoryName, (err) => {
            if(err){
                console.log("\n\nУпссс...\n\n");
                Menu();
            }
            console.log("Папка видалена");
            Menu();
        });
    });
});
emitter.on('info', function () {
    rl.question('Назва для отримання інформаціїї\n', (infoName) => {
        fs.stat(__dirname + "/" + infoName, (err, stats) => {
            if(err){
                console.log("\n\nУпсс...\n\n");
                Menu();
            }
            console.log(parseInt(stats.mode.toString(8), 10));
            console.log(stats.size);
            console.log(stats.uid + '\n');
            Menu();
        });
    });
});
emitter.on('modifyFile', function () {
    rl.question('Назва файлу для зміни його вмісту\n', (fileName) => {
        rl.question('Напишіть ,що ви хочете записати\n', (information) => {
            rl.question('Додати або переписати\n', (operation) => {
                if (operation === "1") {
                    fs.appendFile(__dirname + '/' + fileName, information, function (err) {
                        if(err){
                            console.log("\n\nУпсс...\n\n");
                            Menu();
                        }
                        console.log("Файл успішно змінений");
                        Menu();
                    });
                }
                if (operation === "2") {
                    fs.writeFile(__dirname + '/' + fileName, information, function (err) {
                        if(err){
                            console.log("\n\nУпсс...\n\n");
                            Menu();
                        }
                        console.log("Файл успішно змінений");
                        Menu();
                    });
                }
            });
        });
    });
});
emitter.on('Exit', function() {
    console.log("Пакеда");
    rl.close();
});
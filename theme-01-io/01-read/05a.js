fs = require('fs'); // создаём объект

fileName = "data.txt"; // имя файла

// асинхронное чтение
fs.readFile(fileName, 'utf8', 
    function(error, line) {
        console.log("Асинхронное чтение файла");
        if (error) throw error; // если возникла ошибка
        console.log(line); // выводим считанные данные
});

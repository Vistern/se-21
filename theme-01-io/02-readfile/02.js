// синхронное чтение

console.log('+ + +');

console.log( // вывести на экран
    require("fs") // объект для работы с файлами
        .readFileSync("input.txt", "utf-8") // читаем файл
        .split("\r\n") // разбиваем на массив из строк файла
        .map(line => line.trim()) // уберём лишние пробелы
        .filter(line => !!line) // берём только не пустые
        .map(line => +line) // переводим в числа
        .sort((a, b) => a-b) // сортируем
);

console.log('- - -');

console.log( // вывести на экран
    require("fs") // объект для работы с файлами
        .readFileSync("setup.cfg", "utf-8") // читаем файл
        .split("\r\n") // разбиваем на массив из строк файла
        .filter(line => line[0]=='[') // берём только с атрибутами
        .map(line => line.slice(1,line.length-1)) // без скобок
        .sort() // отсортируем
        .join(", ") // элементы массива в строку
);
    
// передать аргументы в программу из консоли
console.log(process.argv);

// let nodePath = process.argv[0];
// let appPath = process.argv[1];

let arr = process.argv.slice(2);
if (arr.length > 0) {
    for (let item of arr) {
        console.log(item);
    }

    console.log(arr.reduce((a,b) => a+b));
    console.log(arr
        .map((item) => Number(item))
        .reduce((acc,next) => acc+next));
}



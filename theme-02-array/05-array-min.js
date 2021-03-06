// как найти минимум в массиве

let example_1 = function (arr) {
    let min = arr[0];
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}

let example_2 = function (arr) {
    return Math.min.apply(null, arr);
}

let example_3 = function (arr) {
    return Math.min(...arr);
}

Array.prototype.min = function () {
    let min = this[0];
    for (let i = 2; i < this.length; i++) {
        if (this[i] < min) min = this[i];
    }
    return min;
};

let example_4 = function (arr) {
    return arr.min();
}

let example_5 = function (arr) {
    let min = arr[0];
    arr.forEach((item, index) => {
        if ((index > 0) && (item < min)) min = item;
    });
    return min;
}

let example_6 = function (arr) {
    return arr.reduce((a, b) => a < b? a: b);
}

let arr = [8, 6, 1, 2, 5, 4];

console.log(example_1(arr));
console.log(example_2(arr));
console.log(example_3(arr));
console.log(example_4(arr));
console.log(example_5(arr));
console.log(example_6(arr));

function drawLine(num) {
    return '━'.repeat(num);
};

function drawTopBorder(num) {
    return '┏' + '━'.repeat(num) + '┓';
};

function drawMiddleBorder(num) {
    return '┣' + '━'.repeat(num) + '┫';
};

function drawBottomBorder(num) {
    return '┗' + '━'.repeat(num) + '┛';
};

function drawBarsAround(str, num) {
    return '┃' + str + ' '.repeat(num - str.length) + '┃';
};

function boxIt(arr) {
    let longest = arr[0];
    let result = '';

    for (let str of arr) {
        if (str.length > longest.length) {
            longest = str
        }
    }
    const num = longest.length;

    for (let i = 0; i < arr.length; i++) {
        if (arr.length === 1) {
            result += `${drawTopBorder(num)}\n${drawBarsAround(arr[i], num)}\n${drawBottomBorder(num)}`;
        } else if (i === 0) {
            result += `${drawTopBorder(num)}\n${drawBarsAround(arr[i], num)}\n`;
        } else if (i > 0 && i < arr.length - 1) {
            result += `${drawMiddleBorder(num)}\n${drawBarsAround(arr[i], num)}\n${drawMiddleBorder(num)}\n`;
        } else {
            result += `${drawBarsAround(arr[i], num)}\n${drawBottomBorder(num)}`;
        }
    }
    return result;
};

console.log(boxIt(['Jon Snow']));
console.log(boxIt(['Jon Snow', 'Cersei Lannister', 'Daenerys Targaryen']));
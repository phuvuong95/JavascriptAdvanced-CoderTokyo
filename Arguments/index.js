//Array-like object & arguments (luôn tồn tại trong scope)
// const names = ['Thanh', 'Trang', 'Thủy'];
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// const obj = {
//     0: 'Thanh',
//     1: 'Trang',
//     2: 'Thủy',
//     length: 3
// };
// for (let i = 0; i < obj.length; i++) {
//         console.log(obj[i]);
//     }

// function sum() {
//     let result = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         result += arguments[i];
//     }
//     return result;
// }
// sum(1, 2, 3, 4, 10, 20);

function sum() {
    const numbers = Array.from(arguments);
    return numbers.reduce(function(sum, number) {
        return sum + num
    }, 0);
}
sum(1, 2, 3, 4, 10, 20);
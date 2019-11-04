//...rest
function sum(...nums) {
    return nums.reduce(() => a + b, 0);
}

sum(1, 2, 3, 4, 5);

function concat(separator, ...strings) {
    return strings.join(separator);
}

concat('.', 'a', 'b', 'c'); // 'a.b.c'
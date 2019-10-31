// global context
// function context
// bind: Trả về 1 hàm, hàm này hoạt động giống như function sayHi, khi đc gọi thì biến this của nó là biến mouse

function run(cb) {
    console.log('run...');
    cb();
}

var mouse = {
    name: 'Mickey',
    sayHi: function() {
        console.log(this.name);
    }
};

run(mouse.sayHi.bind(mouse));
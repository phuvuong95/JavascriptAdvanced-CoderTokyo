// var a = {
//     name: 'AAA',
//     run: function() {
//         var run2 = () => {
//             console.log(this.name);
//         };
//         run2(); //Bind trả về 1 hàm nên phải có ()
//     }
// };

// console.log(a.run());

var a = {
    foo: 'bar',
    run: function() {
        setTimeout(() => {
            console.log(this.foo);   
        }, 2000);
    }
};

console.log(a.run());
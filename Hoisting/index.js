//Nên khai báo biến ở đầu hàm
var x = 10;
function run() {
    //var x;
    console.log(x);





    var x = 5;
}

run();

//Nếu khai báo biến ở giữa hoặc ở cuối hàm thì hoisting trong js sẽ xảy ra
//Khi hàm được chạy thì js sẽ mặc định tạo ra 1 biến x và ko có giá trị => undefined 
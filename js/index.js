// // INPUT
// chuỗi 
// Xử lý 
// Nhập số
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// OUTPUT 
// kết quả
var parameter = [];
document.getElementById("btn0").onclick = function () {
    var num = document.getElementById("num").value;
    parameter.push(num);
    document.getElementById("string1").innerHTML = "Chuối số: " + parameter.join(", ");
};
document.getElementById("btn1").onclick = function () {
    var sum = 0;
    for (var i = 0; i < parameter.length; i++) {
        if (parameter[i] > 0) {
            sum += +parameter[i]
        }
    };
    document.getElementById("demo1").innerHTML = "Tổng các số dương: " + sum;
};
document.getElementById("btn2").onclick = function () {
    var sum = 0;
    for (var j = 0; j < parameter.length; j++) {
        if (parameter[j] > 0) {
            sum += 1;
        }
    }
    document.getElementById("demo2").innerHTML = "Đếm số dương: " + sum;
}
document.getElementById("btn3").onclick = function () {
    var min = parameter[0];
    for (var j = 0; j < parameter.length; j++) {
        var value = +parameter[j]
        if (value < min) {
            min = value
        }
    }
    document.getElementById("demo3").innerHTML = "Số nhỏ nhất: " + min;
}
document.getElementById("btn4").onclick = function () {
    var min = parameter[0];
    for (var j = 0; j < parameter.length; j++) {
        var value = +parameter[j]
        if (+parameter[j]>0 && value < min) {
            min = value
        }
    }
    document.getElementById("demo4").innerHTML = "Số dương nhỏ nhất: " + min;
}
document.getElementById("btn5").onclick = function () {
    var lastEven = -1;
    for (var j = parameter.length - 1; j >= 0; j--) {
        var value = parameter[j]
        if (value % 2 === 0) {
            lastEven = value
            break
        }
    }
    document.getElementById("demo5").innerHTML = "Số chẵn cuối cùng: " + lastEven;
}
// document.getElementById("btn6").onclick = function () {}
// document.getElementById("btn7").onclick = function () {}
// document.getElementById("btn8").onclick = function () {}
// document.getElementById("btn9").onclick = function () {}
// document.getElementById("btn10").onclick = function () {}

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
var parameter = ["4", "13", "-1", "-13", "-3", "-4"];
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
        if (+parameter[j] > 0 && value < min) {
            min = value
        }
    }
    document.getElementById("demo4").innerHTML = "Số dương nhỏ nhất: " + min;
}
document.getElementById("btn5").onclick = function () {
    var lastEven = -1;
    for (var j = parameter.length - 1; j >= 0; j--) {
        var value = parameter[j];
        if (value % 2 === 0) {
            lastEven = value
            break
        }
    }
    document.getElementById("demo5").innerHTML = "Số chẵn cuối cùng: " + lastEven;
}
document.getElementById("btn6").onclick = function () {
    var i = document.getElementById("change1").value;
    var j = document.getElementById("change2").value;
    var a = parameter[i - 1];
    var b = parameter[j - 1]
    parameter[i - 1] = b
    parameter[j - 1] = a
    document.getElementById("demo6").innerHTML = "Chuối số: " + parameter.join(", ");
}
document.getElementById("btn7").onclick = function () {
    parameter.sort(function sortt(x, y) { return x - y });
    document.getElementById("demo7").innerHTML = "Sắp xếp mảng theo thứ tự tăng dần: " + parameter.join(", ");;
}
document.getElementById("btn8").onclick = function () {
    for (var i = 0; i < parameter.length; i++) {
        if (parameter[i]= 2) {
            num = parameter[i];
            break
        } else if (num > 2) {
            for (j = 2; j < parameter[i]; j++) {
                if (num % j !== 0){
                    num = parameter[i]
                    break
                } else {
                    num = "Không tìm thấy số nguyên tố"
                }
            }
        }
    }
    document.getElementById("demo8").innerHTML = "Số nguyên tố đầu tiên: " + num;
}
document.getElementById("btn9").onclick = function () {
    for (var i = 0; i < parameter.length; i++) {
        console.log(Number.isInteger(parameter[2])); 
        
        
}
}
// document.getElementById("btn10").onclick = function () {}

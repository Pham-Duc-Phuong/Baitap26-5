var parameter = [];
document.getElementById("btn0").onclick = function () {
    var num = document.getElementById("num").value;
    parameter.push(num);
    document.getElementById("string1").innerHTML = "Chuối số: " + parameter.join(", ");
};
// BÀI 1 BÀI 1 BÀI 1 BÀI 1 BÀI 1 BÀI 1 BÀI 1 BÀI 1 
document.getElementById("btn1").onclick = function () {
    var sum = 0;
    for (var i = 0; i < parameter.length; i++) {
        if (parameter[i] > 0) {
            sum += +parameter[i]
        }
    };
    document.getElementById("demo1").innerHTML = "Tổng các số dương: " + sum;
};
// BÀI 2 BÀI 2 BÀI 2 BÀI 2 BÀI 2 BÀI 2 BÀI 2 BÀI 2  
document.getElementById("btn2").onclick = function () {
    var sum = 0;
    for (var j = 0; j < parameter.length; j++) {
        if (parameter[j] > 0) {
            sum += 1;
        }
    }
    document.getElementById("demo2").innerHTML = "Đếm số dương: " + sum;
}
// BÀI 3  BÀI 3 BÀI 3 BÀI 3 BÀI 3 BÀI 3 BÀI 3 BÀI 3
document.getElementById("btn3").onclick = function () {
    var min = +parameter[0];
    for (var j = 0; j < parameter.length; j++) {
        debugger;
        var value = +parameter[j]
        if (value < min) {
            min = value
        }
    }
    document.getElementById("demo3").innerHTML = "Số nhỏ nhất: " + min;
}
// BÀI 4  BÀI 4 BÀI 4 BÀI 4 BÀI 4 BÀI 4 BÀI 4 BÀI 4
document.getElementById("btn4").onclick = function () {
    var min = parameter[0]
    for (var j = 0; j < parameter.length; j++) {
        var a = parameter[j]
        if (min <= 0){
            min = parameter[j+1]
        } else if (a > 0 && a < min) {
            min = a
        }
    }
    document.getElementById("demo4").innerHTML = "Số dương nhỏ nhất: " + min;
}
// BÀI 5  BÀI 5 BÀI 5 BÀI 5 BÀI 5 BÀI 5 BÀI 5 BÀI 5
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
// BÀI 6 BÀI 6 BÀI 6 BÀI 6 BÀI 6 BÀI 6 BÀI 6 BÀI 6
document.getElementById("btn6").onclick = function () {
    var i = document.getElementById("change1").value;
    var j = document.getElementById("change2").value;
    var a = parameter[i - 1];
    var b = parameter[j - 1]
    parameter[i - 1] = b
    parameter[j - 1] = a
    document.getElementById("demo6").innerHTML = "Chuối số: " + parameter.join(", ");
}
// BÀI 7  BÀI 7 BÀI 7 BÀI 7 BÀI 7 BÀI 7 BÀI 7 BÀI 7
document.getElementById("btn7").onclick = function () {
    var sortxy = parameter;
    sortxy.sort(function sortt(x, y) { return x - y });
    document.getElementById("demo7").innerHTML = "Sắp xếp mảng theo thứ tự tăng dần: " + sortxy.join(", ");;
}
// BÀI 8  BÀI 8 BÀI 8 BÀI 8 BÀI 8 BÀI 8 BÀI 8 BÀI 8
document.getElementById("btn8").onclick = function () {
    for (var i = 0; i < parameter.length; i++) {
        // debugger;
        var num = +parameter[i];
        if (num === 2) {
            num = 2;
            break
        } else if (num > 2 && +parameter[i] > 0) {
            for (j = 2; j < num; j++) {
                if (num % j === 0){
                    num = "Không tìm thấy số nguyên tố"
                } else {
                    num = +parameter[i]
                }
            }  
        }
        
    }
    document.getElementById("demo8").innerHTML = "Số nguyên tố đầu tiên: " + num;
}
// BÀI 9  BÀI 9 BÀI 9 BÀI 9 BÀI 9 BÀI 9 BÀI 9 BÀI 9
document.getElementById("btn9").onclick = function () {    
    var sum = 0
    for (var i = 0; i < parameter.length; i++) {
        var a = Number.isInteger(+parameter[i])
        if (a === true){
            sum += 1
        }  
}
document.getElementById("demo9").innerHTML = "Số lượng số nguyên: " + sum;
}
// BÀI 10 BÀI 10 BÀI 10 BÀI 10 BÀI 10 BÀI 10 BÀI 10
document.getElementById("btn10").onclick = function () {
    var sumPosi = 0;
    var sumNegav = 0;
    for ( var i = 0 ; i < parameter.length; i++){
        if (+parameter[i] > 0){
            sumPosi += 1;
        } else {
            sumNegav += 1;
        }
    }
    if (sumPosi > sumNegav){
        document.getElementById("demo10").innerHTML = "số dương: "+ sumPosi + " > " + "số âm: " + sumNegav;
    } else {
        document.getElementById("demo10").innerHTML = "số dương: "+ sumPosi + " < " + "số âm: " + sumNegav;
    }
    
}

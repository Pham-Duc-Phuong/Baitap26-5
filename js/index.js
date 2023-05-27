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
document.getElementById("btn0").onclick = function myfunction(){
    var num = document.getElementById("num").value;
    parameter.push(num);
    document.getElementById("string1").innerHTML = "Chuối số: " + parameter.join(", ");
};


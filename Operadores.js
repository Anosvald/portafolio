function Sumar(){
    /*parseInt(); parseFloat();*/
    var num1,num2, result;
    num1=parseFloat(document.getElementById("num1").value);
    num2=parseFloat(document.getElementById("num2").value);
    result=parseFloat(num1)+parseInt(num2);
    document.getElementById("resultado").innerHTML=result;
}
function Restar(){
    /*parseInt(); parseFloat();*/
    var num1,num2, result;
    num1=parseFloat(document.getElementById("num1").value);
    num2=parseFloat(document.getElementById("num2").value);
    result=parseFloat(num1)-parseInt(num2);
    document.getElementById("resultado").innerHTML=result;
}
function Multiplicar(){
    /*parseInt(); parseFloat();*/
    var num1,num2, result;
    num1=parseFloat(document.getElementById("num1").value);
    num2=parseFloat(document.getElementById("num2").value);
    result=parseFloat(num1)*parseInt(num2);
    document.getElementById("resultado").innerHTML=result;
}
function Dividir(){
    /*parseInt(); parseFloat();*/
    var num1,num2, result;
    num1=parseFloat(document.getElementById("num1").value);
    num2=parseFloat(document.getElementById("num2").value);
    result=parseFloat(num1)/parseInt(num2);
    document.getElementById("resultado").innerHTML=result;
}
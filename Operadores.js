function Suma(){
    /*parseInt(); parseFloat();*/
    var num1,num2, result;
    num1=parseFloat(document.getElementById("num1").value);
    num2=parseFloat(document.getElementById("num2").value);
    result=parseFloat(num1)+parseInt(num2);
    document.getElementById("resultado").innerHTML=result;
}
function Rest(){
    /*parseInt(); parseFloat();*/
    var num1,num2, result;
    num1=parseFloat(document.getElementById("num1").value);
    num2=parseFloat(document.getElementById("num2").value);
    result=parseFloat(num1)-parseInt(num2);
    document.getElementById("resultado").innerHTML=result;
}
function Multipli(){
    /*parseInt(); parseFloat();*/
    var num1,num2, result;
    num1=parseFloat(document.getElementById("num1").value);
    num2=parseFloat(document.getElementById("num2").value);
    result=parseFloat(num1)*parseInt(num2);
    document.getElementById("resultado").innerHTML=result;
}
function Div(){
    /*parseInt(); parseFloat();*/
    var num1,num2, result;
    num1=parseFloat(document.getElementById("num1").value);
    num2=parseFloat(document.getElementById("num2").value);
    result=parseFloat(num1)/parseInt(num2);
    document.getElementById("resultado").innerHTML=result;
}
function Suma(){
    /*parseInt(); parseFloat();*/
    var num1,num2, result;
    num1=prompt("Escribe un numero", "");
    num2=prompt("Escribe otro numero", "");
    result=parseInt(num1)+parseInt(num2);
    alert("La suma es; "+result); //signo mas concatenacion//
}
function Restar(){
    /*parseInt(); parseFloat();*/
    var num1,num2, result;
    num1=prompt("Escribe un numero", "");
    num2=prompt("Escribe otro numero", "");
    result=parseInt(num1)-parseInt(num2);
    alert("La resta es; "+result); //signo mas concatenacion//
}
function Multiplicar(){
    /*parseInt(); parseFloat();*/
    var num1,num2, result;
    num1=prompt("Escribe un numero", "");
    num2=prompt("Escribe otro numero", "");
    result=parseInt(num1)*parseInt(num2);
    alert("La multiplicacion es; "+result); //signo mas concatenacion//
}
function Dividir(){
    /*parseInt(); parseFloat();*/
    var num1,num2, result;
    num1=prompt("Escribe un numero", "");
    num2=prompt("Escribe otro numero", "");
    result=parseInt(num1)/parseInt(num2);
    alert("La Dividicion es; "+result); //signo mas concatenacion//
}
function posito(){
    /*parseInt(); parseFloat();*/
    var num1,num2;
    num1=prompt("Escribe un numero", "");
    if(parseInt(num1)>0)
        alert("Es positivo; ");
    else
        if(parseInt(num1)<0)
            alert("Es negativo; ");        
}
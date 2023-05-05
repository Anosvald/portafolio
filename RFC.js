function Resultado(){
    var resultado1;
    var nom= document.getElementById("nombre").value;
    var apePa= document.getElementById("app").value;
    var apeMa= document.getElementById("apm").value;
    var year=document.getElementById("num1").value;
    var month=document.getElementById("num2").value;
    var day=document.getElementById("num3").value;

    erefc=app.charAt(0);
    erefc+=app.charAt(1);
    erefc+=apm.charAt(0);
    erefc+=nombre.charAt(0);
    erefc+=num1.charAt(2);
    erefc+=num1.charAt(3);
    erefc+=num2.charAt(0);
    erefc+=num2.charAt(1);
    erefc+=num3.charAt(0);
    erefc+=num3.charAt(1);

    var resultado2=resultado1.toUpperCase();

    document.getElementById("resultado").innerHTML=resultado2;
}

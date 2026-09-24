function calcular() {

    var salario = Number(document.getElementById("salario").value);

    var porcentagem;

    if (salario <= 1000) {
        porcentagem = 20;
    }
    else if (salario <= 3000) {
        porcentagem = 15;
    }
    else if (salario <= 8000) {
        porcentagem = 10;
    }
    else {
        porcentagem = 5;
    }

    var aumento = salario * porcentagem / 100;
    var novoSalario = salario + aumento;

    document.getElementById("resultado").innerHTML =
        "Novo salário = R$ " + novoSalario.toFixed(2) + "<br>" +
        "Aumento = R$ " + aumento.toFixed(2) + "<br>" +
        "Porcentagem = " + porcentagem + "%";
}
function calcular() {
    const idade = document.getElementById("idade").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    const imc = calcularIMC(peso, altura);
    const situacaoIMC = obterSituacaoIMC(imc);

    const precoA = calcularPrecoA(idade, peso, altura);
    const precoB = calcularPrecoB(idade, peso, altura);

    let recomendacao = "";
    if (precoA < precoB) {
        recomendacao = "Operadora A é mais vantajosa.";
    } else if (precoB < precoA) {
        recomendacao = "Operadora B é mais vantajosa.";
    } else {
        recomendacao = "Ambas as operadoras têm preços iguais.";
    }

    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<h3>Resultados</h3>
                                   <p>IMC: ${imc.toFixed(2)} (${situacaoIMC})</p>
                                   <p>Operadora A:</p>${precoA}
                                   <p>Operadora B:</p>${precoB}
                                   <p>${recomendacao}</p>`;
}

function calcularPrecoA(idade, peso, altura) {
    const imc = calcularIMC(peso, altura);
    const precoBasico = 100 + (idade * 10 * (imc / 10));
    const precoStandard = (150 + (idade * 15)) * (imc / 10);
    const precoPremium = (200 - (imc * 10) + (idade * 20)) * (imc / 10);

    return `<strong>Plano Básico:</strong> R$ ${precoBasico.toFixed(2)}<br>
            <strong>Plano Standard:</strong> R$ ${precoStandard.toFixed(2)}<br>
            <strong>Plano Premium:</strong> R$ ${precoPremium.toFixed(2)}`;
}

function calcularPrecoB(idade, peso, altura) {
    const imc = calcularIMC(peso, altura);
    const fatorComorbidade = obterFatorComorbidade(imc);
    const precoBasico = 100 + (fatorComorbidade * 10 * (imc / 10));
    const precoStandard = (150 + (fatorComorbidade * 15)) * (imc / 10);
    const precoPremium = (100 + (imc * 10) + (fatorComorbidade * 20)) * (imc / 10);

    return `<strong>Plano Básico:</strong> R$ ${precoBasico.toFixed(2)}<br>
            <strong>Plano Standard:</strong> R$ ${precoStandard.toFixed(2)}<br>
            <strong>Plano Premium:</strong> R$ ${precoPremium.toFixed(2)}`;
}

function calcularIMC(peso, altura) {
    const alturaEmMetros = altura / 100;
    return peso / (alturaEmMetros * alturaEmMetros);
}

function obterFatorComorbidade(imc) {
    if (imc < 18.5) {
        return 10;
    } else if (imc < 24.9) {
        return 1;
    } else if (imc < 29.9) {
        return 6;
    } else if (imc < 34.9) {
        return 10;
    } else if (imc < 39.9) {
        return 20;
    } else {
        return 30;
    }
}

function obterSituacaoIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 24.9) {
        return "Peso normal";
    } else if (imc < 29.9) {
        return "Sobrepeso";
    } else if (imc < 34.9) {
        return "Obesidade grau I";
    } else if (imc < 39.9) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III";
    }
}


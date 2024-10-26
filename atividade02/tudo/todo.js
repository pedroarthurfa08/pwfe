/*Questão 1*/
function boaTarde() {
    document.getElementById("saudacao").innerHTML = "Boa tarde!";
}

function boaNoite() {
    document.getElementById("saudacao").innerHTML = "Boa noite!";
}

/*Questão 2*/
function boaTarde() {
    let nome =
    document.getElementById('nome').value;
    document.getElementById("saudacao").innerHTML = `Boa tarde, ${nome}!`;
}

function boaNoite() {
    let nome =
    document.getElementById('nome').value;
    document.getElementById("saudacao").innerHTML = `Boa noite, ${nome}!`;
}

/*Questão 3*/
function numeroAleatorio() {
    let numero = Math.floor(Math.random() * 10) + 1;
    document.getElementById('aleatorio').innerHTML = `O número número aleatório ${numero}.`;
}

function valorAbsoluto() {
    let numero = parseFloat(document.getElementById("numeroAbs").value);
    document.getElementById("absoluto").innerHTML = `O valor absoluto será ${Math.abs(numero)}`;
}

function maiorNumero() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("maior").innerHTML = `O maior número é ${Math.max(num1, num2)}`;
}

function arredondamento() {
    let numero = parseFloat(document.getElementById("arredondar").value);
    document.getElementById("arredondado").innerHTML = `Número arredondado: ${Math.round(numero)}`;
}

function potencia() {
    let base = parseFloat(document.getElementById("base").value);
    let expoente = parseFloat(document.getElementById("expoente").value);
    document.getElementById("potencia").innerHTML = `Potência: ${Math.pow(base, expoente)}`;
}

/*Questão 4*/
function manipularTexto(){
    let tamanho = texto.length;
    document.getElementById("resultado").innerHTML += `Tamanho da string: ${tamanho}<br>`;

    let textoMinusculo = texto.toLowerCase();
    document.getElementById("resultado").innerHTML += `Texto em minúsculo: ${textoMinusculo}<br>`;

    let textoSubstituido = textoMinusculo.replace(/a/g, "@")
                                      .replace(/e/g, "3")
                                      .replace(/i/g, "1")
                                      .replace(/o/g, "0");
    document.getElementById("resultado").innerHTML += `Texto substituído: ${textoSubstituido}<br>`;

    let textoTrimmado = texto.trim();
    document.getElementById("resultado").innerHTML += `Texto trimmado: ${textoTrimmado}<br>`;

}

/*Questão 5*/
function nomeCompleto() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    document.getElementById("nome-completo").innerHTML = `Nome Completo: ${nome} ${sobrenome}`;
    }
    
function somaEDiferenca() {
let num1 = parseFloat(document.getElementById("num1").value);
let num2 = parseFloat(document.getElementById("num2").value);
let soma = num1 + num2;
let diferenca = num1 - num2;
document.getElementById("resultado-soma").innerHTML = `Soma: ${soma}`;
document.getElementById("resultado-diferenca").innerHTML = `Diferença: ${diferenca}`;
}

function limparCaixa() {
document.getElementById("caixa").value = "";
}

function copiarTexto() {
let textoOrigem = document.getElementById("caixa-origem").value;
document.getElementById("caixa-destino").value = textoOrigem;
}

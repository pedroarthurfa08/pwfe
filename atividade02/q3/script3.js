function numeroAleatorio() {
    let numero = Math.floor(Math.random() * 10) + 1;
    document.getElementById('aleatorio').innerHTML =`O número número aleatório ${numero}.`
}

function valorAbsoluto() {
    let numero = parseFloat(document.getElementById("numeroAbs").value);
    document.getElementById("absoluto").innerHTML = `O valor absoluto será ${Math.abs(numero)}`
}

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
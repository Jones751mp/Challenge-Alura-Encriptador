let input = document.getElementById("input");
let btn = document.getElementById("encriptar");
let btnDesencriptar = document.getElementById("desencriptar");
let salida = document.getElementById("salida");
let content = document.getElementById("content");
let btnCopiar = document.getElementById("copiar");
let cajaSalida = document.getElementById("caja-salida");
let aux = [];
const letras = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

function analizar(letra) {
    for (let i = 0; i < input.value.length; i++) {
        switch (letra[i]) {
            case 'a':
                letra[i] = letras.a
                // salida
                break;
            case 'e':
                letra[i] = letras.e;
                break;

            case 'i':
                letra[i] = letras.i;
                break;

            case 'o':
                letra[i] = letras.o;
                break;

            case 'u':
                letra[i] = letras.u;
                break;

        }
        aux = letra
        aux = aux.join("")
    }
    return aux;
}


function desencriptarTexto() {
    let texto = "";
    texto = input.value
    for (let i = 0; i < texto.length; i++) {
        if (texto.includes(letras.a)) {
            texto = texto.replace(letras.a, "a")
        } else if (texto.includes(letras.e)) {
            texto = texto.replace(letras.e, "e")

        } else if (texto.includes(letras.i)) {
            texto = texto.replace(letras.i, "i")

        } else if (texto.includes(letras.o)) {
            texto = texto.replace(letras.o, "o")

        } else if (texto.includes(letras.u)) {
            texto = texto.replace(letras.u, "u")

        }
    }
    content.style.display = "none"
    cajaSalida.style.display = "block"
    salida.innerHTML = texto
}

function encriptarTexto() {
    let texto = [];
    for (let i = 0; i < input.value.length; i++) {
        texto.push(input.value[i]);
    }
    content.style.display = "none"
    cajaSalida.style.display = "block"

    salida.innerHTML = analizar(texto);
}

function copiar() {
    console.log(salida.textContent);
    navigator.clipboard
    .writeText(salida.textContent)
    .then(
        () => alert("texto copiado")
    );
}



btn.onclick = encriptarTexto;
btnDesencriptar.onclick = desencriptarTexto;
btnCopiar.onclick = copiar;
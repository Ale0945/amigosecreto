// El principal objetivo de este desafío es fortalecer 
// tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

window.agregarAmigo = function () {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/.test(nombre)) {
        alert("Ingrese un nombre válido.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    inputAmigo.value = "";
};

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = amigos.map(nombre => `<li>${nombre}</li>`).join("");
}

window.sortearAmigo = function () {
    if (amigos.length < 2) {
        alert("Mínimo 2 participantes.");
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = `<li>El amigo secreto es: ${sorteado}</li>`;
    document.getElementById("listaAmigos").innerHTML = "";
    amigos = [];
};


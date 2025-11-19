
let contador = 0;
function agregarElemento() {
    let nombre = document.getElementById("id_nombre").value;
    let apellido = document.getElementById("id_apellido").value;

    let lista = document.getElementById("id_lista");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre + " " + apellido;
    lista.appendChild(nuevoElemento);
}

function mostrarenInput() {
    elementos = document.getElementById("id_lista").getElementsByTagName("li");
    let lista = document.getElementById("id_lista");
    let elementos = lista.getElementsByTagName("li");
    let nombresCompletos = [];

    elementos.style.display = "block";

    for (let i = 0; i < elementos.length; i++) {
        nombresCompletos.push(elementos[i].textContent);
    }
}
let listaRegistros = [];

const objRegistro = {
    id: "",
    nombre: "",
    apellido: "",
    usuario: "",
    contrasena: ""
}

let editando = false;

const formulario = document.querySelector("#formulario");
const nombreInput = document.querySelector("#nombre");
const apellidoInput = document.querySelector("#apellido");
const usuarioInput = document.querySelector("#usuario");
const contrasenaInput = document.querySelector("#contrasena");
const btnRegistrar = document.querySelector("#btnRegistrar");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if (nombreInput.value === "" || apellidoInput.value === "" || usuarioInput.value === "" || contrasenaInput.value === "") {
        alert("Todos los campos son obligatorios");
        return;
    }
}
//No usar estas def de variables:
variable = "hola";
var nombre = "Isra"

//Usar estas def de variables:
let provincia = "SJ"; 
const pais = "CR";

console.log('variable:', variable);
console.log('nombre:', nombre);
console.log('provincia:', provincia);
console.log('pais:', pais);

//deprecated
function sumar() {
   console.log ('funcion sumar');
}

//Mejor usar esta sintaxis, se usa en React / C# 
const suma = () => {
    console.log ('funcion suma');
}

sumar();
suma();

document.addEventListener("DOMContentLoaded", function () {
    console.log ('WebApp Completed Loading');
    console.log ("WebApp Completed Loading" + nombre);
    console.log (`WebApp Completed Loading, hola ${nombre}`);

    const button = document.querySelector("#btn_cargar");
    //const button2 = document.getElementById('btn_cargar');

    console.log('button:', button);
    //console.log('button2:', button2);

    //button.addEventListener('click', sumar);
    //button.addEventListener('click', saludar);

    button.addEventListener('click', cargarClientes);

});

const saludar = () => {
    console.log ('Hola');

}

const cargarClientes = () => {
    console.log ('Llamando a func cargarClientes');
    

    console.log ('Clientes han sido cargados');
}


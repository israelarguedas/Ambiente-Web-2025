// console.log('saludo:', saludo);
// console.log('nombre:', nombre);
// console.log('provincia:', provincia);
// console.log('pais:', pais);

saludo = 'hola';
var nombre = 'Bryan Cerdas';
let provincia = 'Cartago';
const pais = 'CR';

provincia = [];
provincia = 700;

console.log('saludo:', saludo);
console.log('nombre:', nombre);
console.log('provincia:', provincia);
console.log('pais:', pais);

function sumar() { 
    console.log('funcion sumar');
}

const suma = () => {
    console.log('funcion suma');
}

sumar();
suma();


document.addEventListener("DOMContentLoaded", function () {

    const nombre = 'Bryan Cerdas';
    const edad = 15;


    console.log('mi pagina termino de cargar');
    console.log("mi pagina termino de cargar " + nombre);
    console.log(`mi pagina termino de cargar, hola ${nombre} su edad es ${edad}`);


    const button  = document.querySelector('#btnCargar');
    // const button2  = document.getElementById('btnCargar');

    console.log('button:', button);
    // console.log('button2:', button2);

    // button.addEventListener('click', sumar);
    // button.addEventListener('click', saludar);

    button.addEventListener('click', cargarClientes);
    //button.addEventListener('click', cargarClientesHTML);

    const input = document.querySelector('#input-nombre');
    input.addEventListener('change', mostrarNombre);

    document.querySelector('.chk')

});

const mostrarNombre = (event) => {

    console.log({event});

    console.log('Llamando a mostrar nombre');

    //const input = document.querySelector('#input-nombre');
    const texto = document.querySelector('#texto-nombre');

    //texto.textContent = input.value; 
    texto.textContent = event.target.value; 
}

const persona = {
    nombre: "Isra",
    apellido1: "Arguedas",
    apellido2: "Gonzalez",
    edad: "25",
    direccion: "San Miguel",
    ubicacion: {
        provincia: "San Jose",
        canton: "Desamparados",
        distrito: "San Miguel"
    },
    pasatiempos: ["Crochet", "Cera perdida", "Cocinar"]
}

const arreglo = ['Hola', 25, ['', true]];

const clientes = [
    {codigo: 1, nombre: "Cliente 1", correo:"cliente.1@ufide.ac.cr", telefono: "2225-5258"},
    {codigo: 2, nombre: "Cliente 2", correo:"cliente.2@ufide.ac.cr", telefono: "2225-6581"},
    {codigo: 3, nombre: "Cliente 3", correo:"cliente.3@ufide.ac.cr", telefono: "2225-8452"},
    {codigo: 4, nombre: "Cliente 4", correo:"cliente.4@ufide.ac.cr", telefono: "2225-6488"}
];

const tbody = document.querySelector('#tbody-section'); 
tbody.innerHTML

const cargarClientes = () => {
    console.log('llamando a mi funcion cargar clientes');

    /*console.log(persona.nombre);
    console.log(persona.apellido1);
    console.log(persona.apellido2);
    console.log(persona.ubicacion.provincia);

    console.log(clientes);*/

    clientes.forEach(cliente => {
            const fila = document.createElement('tr') //crea una fila nueva en la tabla, por eso tr
            
            const celdaCodigo = document.createElement('td');
            celdaCodigo.textContent = cliente.codigo; // agrega un elemento en la columna

            const celdaNombre = document.createElement('td');
            celdaNombre.textContent = cliente.nombre; // agrega un elemento en la columna

            const celdaCorreo = document.createElement('td');
            celdaCorreo.textContent = cliente.correo; // agrega un elemento en la columna

            const celdaTelefono = document.createElement('td');
            celdaTelefono.textContent = cliente.telefono; // agrega un elemento en la columna
        
            fila.appendChild(celdaCodigo);
            fila.appendChild(celdaNombre);
            fila.appendChild(celdaCorreo);
            fila.appendChild(celdaTelefono);

            tbody.appendChild(fila);
        });
}



/*const cargarClientesHTML = () => {
    console.log('llamando a mi funcion cargar clientes HTML');
    let filas = '';

    clientes.forEach(cliente => {
        filas += '<tr>'
                    '<th>'${clientes.codigo}'</th>'
                    '<td>'${clientes.nombre}'</td>'
                    '<td>'${clientes.correo}'</td>'
                    '<td>'${clientes.telefono}'</td>'
                '</tr>'
    }); 
}*/

const saludar = () => {
    console.log('Hola, bienvenido!');
}




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

    // button.addEventListener('click', cargarClientes);
    button.addEventListener('click', cargarClientesHtml);

    const input = document.querySelector('#input-nombre');
    input.addEventListener('change', mostrarNombre);


});



const mostrarNombre = (event) => {

    console.log({event});

    console.log('llamando a mostrar nombre');

    // const input = document.querySelector('#input-nombre');
    const texto = document.querySelector('#texto-nombre');

    texto.textContent = event.target.value;
}


const persona = {
    nombre : 'Bryan',
    apellido1 : 'Cerdas',
    apellido2 : 'Salas',
    edad: 15,
    direccion: 'San Pedro, CR',
    ubicacion : {
        provincia : 'San Jose',
        canton: 'Montes de Oca'
    },
    pasatiempos: ['Jugar Fut', 'Programar']
}


const arreglo = ['Hola', 25, ['', true]];


const clientes = [
    { 
        codigo: 1, 
        nombre: 'Cliente uno', 
        correo: 'cliente@correo.com', 
        telefono: '2222-4488' 
    },
    { codigo: 2, nombre: 'Cliente dos', correo: 'cliente@correo.com', telefono: '2222-4488' },
    { codigo: 3, nombre: 'Cliente tres', correo: 'cliente@correo.com', telefono: '2222-4488' },
    { codigo: 4, nombre: 'Cliente cuatro', correo: 'cliente@correo.com', telefono: '2222-4488' },
    { codigo: 5, nombre: 'Cliente cinco', correo: 'cliente@correo.com', telefono: '2222-4488' },
]

const tbody = document.querySelector('#tbody-section');
tbody.innerHTML = '';

const cargarClientes = () => {
    console.log('llamando a mi funcion cargar clientes');

    // console.log(clientes);

    clientes.forEach(cliente => {

        const fila  = document.createElement('tr');

        const celdaCodigo = document.createElement('td');
        celdaCodigo.textContent = cliente.codigo;

        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = cliente.nombre;

        const celdaCorreo = document.createElement('td');
        celdaCorreo.textContent = cliente.correo;

        const celdaTelefono = document.createElement('td');
        celdaTelefono.textContent = cliente.telefono;

        fila.appendChild(celdaCodigo);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaCorreo);
        fila.appendChild(celdaTelefono);

        tbody.appendChild(fila);
    });

}

const cargarClientesHtml = () => {

    let filas = '';

    clientes.forEach(cliente => {

        filas += `<tr>
                      <td><input type="checkbox" 
                                class="chkCliente" 
                                data-id="${cliente.codigo}">
                      </td>
                      <td>${cliente.codigo}</td>
                      <td>${cliente.nombre}</td>
                      <td>${cliente.correo}</td>
                      <td>${cliente.telefono}</td>
                  </tr>`;

    });

    tbody.innerHTML = filas;

    
    document.querySelectorAll('.chkCliente').forEach(chk => {
        chk.addEventListener('click', handleCheckCliente);
    });
}

const saludar = () => {
    console.log('Hola, bienvenido!');
}


const handleCheckCliente = (event) => {
    console.log('handle check cliente');
    console.log(event)

    const checkbox = event.target;
    const codigoCliente = checkbox.dataset.id;
    
    console.log({codigoCliente});

    const cliente = clientes.find(c => c.codigo == codigoCliente);

    if(cliente) {
        console.log(cliente);

        mostrarTarjetaCliente(cliente);

    } else {
        console.log('El cliente no se encuentra');
    }

}


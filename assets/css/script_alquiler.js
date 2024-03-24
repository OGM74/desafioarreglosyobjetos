
const cardcontainer = document.querySelector('.alquileres');
let allalquileres="";

const propiedades_alquiler = [{
    
    nombre: 'Casa 1',
    src: '',
    descripción: 'Casa de lujo',
    ubicación: 'Providencia 1455',
    habitaciones: 5,
    costo: 950000,
    smoke: false,
    mascotas: true,

}, {
    nombre: 'Casa 2',
    src: '',
    descripción: 'Casa remodelada',
    ubicación: 'Manuel Montt 451',
    habitaciones: 3,
    costo: 650000,
    smoke: true,
    mascotas: false,

}, {
    nombre: 'Casa 3',
    src: '',
    descripción: 'Hermosa casa con jardín',
    ubicación: 'Errázuriz 6543',
    habitaciones: 5,
    costo: 1050000,
    smoke: false,
    mascotas: false,

}, {
    nombre: 'Casa 4',
    src: '',
    descripción: 'Casa modelo primavera',
    ubicación: 'Francisco Javier Krugger 412',
    habitaciones: 5,
    costo: 650.000,
    smoke: true,
    mascotas: false,
}
]

for (let index = 0; index < propiedades_alquiler.length; index++) {
    allalquileres += `
    <div>
    <h4>Nombre:${propiedades_alquiler[index].nombre}</h4>
    <h5>Descripción:${propiedades_alquiler[index].descripción}</h5>
    <p>Ubicación:${propiedades_alquiler[index].ubicación}</p>
    <p>Habitaciones:${propiedades_alquiler[index].habitaciones}</p>
    <p>Costo:${propiedades_alquiler[index].costo}</p>
    <p>Smoke:${propiedades_alquiler[index].smoke?'<span style="color: green">SI</span> ':'<span style="color: red">NO</span>' }</p>
    <p>Mascotas:${propiedades_alquiler[index].mascotas?'<span style="color: green">SI</span> ':'<span style="color: red">NO</span>'}</p>
    </div>
    `
    } 
    
    



cardcontainer.innerHTML= allalquileres;

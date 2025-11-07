class Persona {
    constructor(nombre, apellido,dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

    presentarse() {
        return `${this.nombre} ${this.apellido} - DNI: ${this.dni}`;
    }
}

class Jugador extends Persona {
    constructor(nombre, apellido, dni, categoria, deporte, fechaIngreso) {
        super(nombre, apellido,dni);
        this.categoria = categoria;
        this.deporte = deporte;
        this.fechaIngreso = fechaIngreso;
    }

    presentarse() {
        return `${this.nombre} ${this.apellido} DNI:${this.dni} - Categoría ${this.categoria} - Deporte: ${this.deporte} , Fecha de Ingreso: ${this.fechaIngreso}`;
        // Sobrescribe el método presentarse de Persona
    }
}

// Elementos del DOM
const form = document.getElementById("formJugador");//Formulario
const listaDiv = document.getElementById("listaJugadores");//Div para mostrar jugadores

// Obtener jugadores guardados o array vacío
let jugadores = JSON.parse(localStorage.getItem("jugadores")) || [];//

function mostrarJugadores() {//Función para mostrar jugadores
    listaDiv.innerHTML = "";//Limpiar lista antes de mostrar
    jugadores.forEach(j => {//Recorrer jugadores
        const div = document.createElement("div");//Crear div para cada jugador
        div.classList.add("jugador");//Agregar clase CSS
        div.textContent = new Jugador(j.nombre, j.apellido, j.dni, j.categoria, j.deporte, j.fechaIngreso).presentarse();
        //Mostrar presentación del jugador
        listaDiv.appendChild(div);//Agregar al contenedor
    });
}

function guardarJugadores() { //Función para guardar jugadores en localStorage
    localStorage.setItem("jugadores", JSON.stringify(jugadores));//Convertir array a JSON y guardar
}

form.addEventListener("submit", e => {//Evento al enviar formulario
    e.preventDefault();//Prevenir recarga de página

    const nombre = document.getElementById("nombre").value;//Obtener valores del formulario
    const apellido = document.getElementById("apellido").value;
    const dni = document.getElementById("dni").value;
    const categoria = document.getElementById("categoria").value;
    const deporte = document.getElementById("deporte").value;
    const fechaIngreso = document.getElementById("fechaIngreso").value;

    const nuevoJugador = new Jugador(nombre, apellido,dni, categoria, deporte, fechaIngreso);//Crear nuevo jugador
    jugadores.push(nuevoJugador);//Agregar al array

    guardarJugadores();
    mostrarJugadores();
    form.reset();
});

// Mostrar los jugadores al cargar la página
mostrarJugadores();
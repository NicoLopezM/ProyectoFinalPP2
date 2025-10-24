class persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}
class Alumno extends persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }
    presentarse() {
        return `Hola soy ${this.nombre} y tengo ${this.edad} años. Estoy en el curso ${this.curso}.`;
    }
}
const form=document.getElementById("formalumno");
const ListaAlumnosDiv=document.getElementById("ListaDeAlumnos");
//metodo getItem obtiene datos de la variable "alumnos" , o no crea nada "[]"
let Alumnos=JSON.parse(localStorage.getItem("alumnos"))||[];
function mostrarAlumnos()
    {
        ListaAlumnosDiv.innerHTML(="");
        Alumnos.forEach(Alumno=>f {
            const div=document.createElement("div");
            div.classList.add("alumno");
            div.textContent=new Alumno(alumno.nombre,alumno.edad,alumno.curso).presentarse();
            ListaAlumnosDiv.appendChild(div);
        }
    }
//console.log(form,ListaAlumnosDiv);
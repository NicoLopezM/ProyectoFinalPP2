class Persona{//clase persona
    constructor(nombre, edad){//constructor de la clase persona
        this.nombre = nombre;//asignamos el nombre
        this.edad = edad;//asignamos la edad
    }
    presentarse (){//metodo para presentarse
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;//retornamos el mensaje de presentacion
        }
    }
    class Alumno extends Persona{//clase alumno que hereda de persona
        constructor(nombre, edad, curso){//constructor de la clase alumno
            super (nombre, edad);//llamamos al constructor de la clase padre
            this.curso = curso;//asignamos el curso
        }
        presentarse (){//metodo para presentarse
            return `Hola, soy ${this.nombre}, tengo ${this.edad} años y curso ${this.curso}.`;//retornamos el mensaje de presentacion
        }
    }

    const form= document.getElementById("formAlumno");//obtenemos el formulario del DOM 
    const listaAlumnosdiv= document.getElementById("listaAlumnos");//obtenemos el div donde se mostraran los alumnos
    console.log(form, listaAlumnosdiv);//verificamos que se obtuvieron correctamente

    let alumnos=JSON.parse(localStorage.getItem("alumnos"))||[];//obtenemos los alumnos del localstorage o un array vacio si no hay nada

    function mostrarAlumnos(){//funcion para mostrar los alumnos
        listaAlumnosdiv.innerHTML="";//limpiamos el div antes de mostrar los alumnos
        alumnos.forEach(alumno=>{//recorremos el array de alumnos
            const div= document.createElement("div");//creamos un div para cada alumno
            div.classList.add("alumno");//agregamos una clase al div
            div.textContent=new Alumno(alumno.nombre, alumno.edad, alumno.curso).presentarse();//creamos un nuevo alumno y llamamos al metodo presentarse
            listaAlumnosdiv.appendChild(div);//agregamos el div al contenedor de alumnos
        });
    }
    function guardarAlumnos(){//funcion para guardar los alumnos en localstorage
        localStorage.setItem("alumnos", JSON.stringify(alumnos));//almacenar en localstorage
        //actualizar la lista nesesitamos covertirlo en una variable alumnos
    }
    form.addEventListener("submit", (e)=>{//sabemos que el evento submit se activa al enviar el formulario
        e.preventDefault();//para que no se recargue la pagina
        const nombre= document.getElementById("nombre").value;//obtenemos el valor del campo nombre
        const edad= parseInt(document.getElementById("edad").value);//obtenemos el valor del campo edad
        const curso= document.getElementById("curso").value;//obtenemos el valor del campo curso
        const nuevoAlumno= new Alumno(nombre, edad, curso);//creamos un nuevo alumno
        alumnos.push(nuevoAlumno);//agregamos el nuevo alumno al array
        guardarAlumnos();//guardamos en localstorage
        mostrarAlumnos();
        form.reset();//limpiamos el formulario
    });

    //mostrar los alumnos al cargar la pagina
    mostrarAlumnos();
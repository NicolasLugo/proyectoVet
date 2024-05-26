// Código JavaScript para manejar la funcionalidad de administración de postulantes
const formRegistro = document.getElementById("formRegistro");
const listaEspera = document.getElementById("listaEspera");
const btnRegistrar = document.getElementById("btnRegistrar");
const btnActualizar = document.getElementById("btnActualizar");

// Obtener los datos almacenados en localStorage (si existen)
let postulantes = JSON.parse(localStorage.getItem("postulantes")) || [];

// Función para renderizar la lista de postulantes
function renderizarPostulantes() {
    listaEspera.innerHTML = "";
    postulantes.forEach((postulante, index) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = `${postulante.nombre} / ${postulante.tipo} / ${postulante.contacto})`;

        const btnEditar = document.createElement("button");
        btnEditar.classList.add("btn", "btn-sm", "btn-primary", "ms-2");
        btnEditar.textContent = "Editar";
        btnEditar.addEventListener("click", () => editarPostulante(index));

        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn", "btn-sm", "btn-danger", "ms-2");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", () => eliminarPostulante(index));

        li.appendChild(btnEditar);
        li.appendChild(btnEliminar);
        listaEspera.appendChild(li);
    });
}

// Función para agregar una nueva mascota (CREATE)
function agregarPostulante(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const tipo = document.getElementById("tipo").value;
    const contacto = document.getElementById("contacto").value;

    postulantes.push({ nombre, tipo, contacto });
    localStorage.setItem("postulantes", JSON.stringify(postulantes));
    formRegistro.reset();
    renderizarPostulantes();
}

// Función para editar una mascota (UPDATE)
function editarPostulante(index) {
    const postulante = postulantes[index];
    document.getElementById("nombre").value = postulante.nombre;
    document.getElementById("tipo").value = postulante.tipo;
    document.getElementById("contacto").value = postulante.contacto;

    btnRegistrar.disabled = true;
    btnActualizar.disabled = false;

    btnActualizar.addEventListener("click", () => actualizarPostulante(index), {
        once: true,
    });
}

function actualizarPostulante(index) {
    const nombre = document.getElementById("nombre").value;
    const tipo = document.getElementById("tipo").value;
    const contacto = document.getElementById("contacto").value;

    postulantes[index] = { nombre, tipo, contacto };
    localStorage.setItem("postulantes", JSON.stringify(postulantes));
    formRegistro.reset();
    btnRegistrar.disabled = false;
    btnActualizar.disabled = true;
    renderizarPostulantes();
}

// Función para eliminar una mascota (DELETE)
function eliminarPostulante(index) {
    postulantes.splice(index, 1);
    localStorage.setItem("postulantes", JSON.stringify(postulantes));
    renderizarPostulantes();
}

// Eventos
formRegistro.addEventListener("submit", agregarPostulante);
renderizarPostulantes();
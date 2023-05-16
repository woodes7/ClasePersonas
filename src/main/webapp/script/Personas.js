class Personas {
  constructor(id, nombre, apellidos, edad, dni) {
    this._id = id;
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._edad = edad;
    this._dni = dni;
  }
  
  GuardaPersonas() {
    localStorage.setItem("personaId_" + this._id, this._id.toString());
    localStorage.setItem("personaNombre_" + this._id, this._nombre);
    localStorage.setItem("personaApellidos_" + this._id, this._apellidos);
    localStorage.setItem("personaEdad_" + this._id, this._edad.toString());
    localStorage.setItem("personaDni_" + this._id, this._dni);
  }
}
function FormuilarioPeronas(form) {
  var contadorId = parseInt(localStorage.getItem("contadorId")) || 0;
  var id = GeneradorID(contadorId);
  var nombre = form.nombre.value;
  var apellidos = form.apellidos.value;
  var edad = form.edad.value;
  var dni = form.dni.value;

  function GeneradorID(contadorId) {
    // Incrementar el contadorId para generar un nuevo ID único
    contadorId++;
    // Guardar el nuevo valor de contadorId en el localStorage
    localStorage.setItem("contadorId", contadorId.toString());
    // Retornar el contadorId actualizado como el ID generado
    return contadorId;
  }

  var persona = new Personas(id, nombre, apellidos, edad, dni);
  persona.GuardaPersonas();
  window.location.href = "bienvenido.html";
}


function Resetear()
{
	
	  localStorage.clear();
	  
	    console.log('Lista reseteada');
}

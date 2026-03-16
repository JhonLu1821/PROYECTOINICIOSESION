// Referenciación a los elementos del DOM
const formulario = document.getElementById('formulario-registro');
const password = document.getElementById('contraseña');
const seguridad = document.getElementById('nivelseguridad');
const usuario = document.getElementById('nombreusuario');
const correoElectronico = document.getElementById('correo');

// Medidor de nivel de fortaleza de la contraseña en tiempo real
// El addEventListener actúa como un disparador o trigger cada vez
// que se ingresa algún caracter por el teclado
password.addEventListener('input', () => {
    const valor = password.value;
    let fortaleza = 0;

    // Se valida en el primer if la longitud de la contraseña
    // En el segundo if se valida si contiene letras mayúsculas
    // El tercer if valida si la contraseña contiene números
    if (valor.length > 5) fortaleza += 30;
    if (valor.match(/[A-Z]/)) fortaleza += 30;
    if (valor.match(/[0-9]/)) fortaleza += 40;

    // Se cambia el tamaño (ancho) de la barra o div (en CSS)
    seguridad.style.width = fortaleza + '%';

    // Cambiar color (de div) según el nivel de dificultad de la contraseña
    if (fortaleza < 40) seguridad.style.background = '#ef4444';
    else if (fortaleza < 70) seguridad.style.background = '#f59e0b';
    else seguridad.style.background = '#22c55e';
});

// Validación al enviar, este listener se dispara o ejecuta cuando se hace clic
// en el botón "Registrarme" el cual es de tipo submit
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Esta función revisa internamente si se cumplen todos los required, email y pattern.
    // Devuelve true si todo está perfecto o false si falta algo.
    if (formulario.checkValidity()) {

        const datoUsuario = {
            nombreusuario: usuario.value,
            email: correoElectronico.value,
            password: password.value,
            fecha: new Date().toLocaleString()
        };

        localStorage.setItem('usuarioRegistrado', JSON.stringify(datoUsuario));

        alert('🚀 ¡Registro exitoso! Datos listos para enviar al servidor.');

        console.log('Datos en LocalStorage:', JSON.parse(localStorage.getItem('usuarioRegistrado')))

        formulario.reset();
        seguridad.style.width = '0%';
    } else {
        alert('❌ Por favor, corrige los errores en el formulario.');
    }
});


const formularioInicio = document.getElementById("formulario-inicio");

formularioInicio.addEventListener("submit", function(e){

e.preventDefault();

const usuarioLogin = document.getElementById("loginUsuario").value;
const passwordLogin = document.getElementById("loginPassword").value;

const datosGuardados = JSON.parse(localStorage.getItem("usuarioRegistrado"));

if(datosGuardados){

if(usuarioLogin === datosGuardados.nombreusuario && passwordLogin === datosGuardados.password){

alert("Inicio de sesión exitoso");

}else{

alert("Usuario o contraseña incorrectos");

}

}else{

alert("No hay usuarios registrados");

}

});

const botonRegistro = document.getElementById("botonRegistro");
const botonVolver = document.getElementById("botonVolver");

const formularioinicio = document.getElementById("formulario-inicio");
const formularioregistro = document.getElementById("formulario-registro");
//const contenedorprincipal = document.getElementsByClassName("contenedor-principal");
//const contenedorsecundario = document.getElementsByClassName("contenedor-secundario");

botonRegistro.addEventListener("click", function(){
    //contenedorprincipal.style.display="none";
    formularioinicio.style.display = "none";
    //contenedorsecundario.style.display= "block";
    formularioregistro.style.display = "block";
});

botonVolver.addEventListener("click", function(){
    ///contenedorsecundario.style.display= "none";
    formularioregistro.style.display = "none";
    formularioinicio.style.display = "block";
    
});

const togglePassword = document.getElementById("togglePassword");
const contraseña = document.getElementById("password");

togglePassword.addEventListener("click", function(){

if(password.type === "password"){
password.type = "text";
togglePassword.textContent = "Ocultar";
}else{
password.type = "password";
togglePassword.textContent = "Ver";
}

});

const togglePassword2 = document.getElementById("togglePassword2");
const password2 = document.getElementById("loginPassword");

togglePassword2.addEventListener("click", function(){

if(password2.type === "password"){
password2.type = "text";
togglePassword2.textContent = "Ocultar";
}else{
password2.type = "password";
togglePassword2.textContent = "Ver";
}

});

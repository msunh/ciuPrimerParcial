var formulario = document.getElementById('formulario')
var inputs = document.querySelectorAll('#formulario input')

const expReg = {
    usuario: /^\d{8,8}$/,   //maximo de 8 caracteres.(solo numeros)
    pass: /^.{4,10}$/,    // minimo 4 caracteres, máximo 10.
}

//con esto validamos la entrada comparándola con la expresion regular de arriba
var validarFormulario = (evento) => {
    switch (evento.target.name) {
        //valido el usuario para que cumpla con un maximo de 8 caracteres.
        case "usuario": 
            if(expReg.usuario.test(evento.target.value)){
                document.getElementById("inputError").classList.add("ocultar");
                document.getElementById("username").classList.remove("incorrecto");
                document.getElementById("username").classList.add("correcto");
            }else{
                document.getElementById("inputError").classList.remove("ocultar");
                document.getElementById("username").classList.add("incorrecto");
                document.getElementById("username").classList.remove("correcto");
            }
        break;

        //valido  la contraseña, minimo 4 caracteres, máximo 10.    
        case "contraseña":
            if(expReg.pass.test(evento.target.value)){
                document.getElementById("inputPassError").classList.add("ocultar");
                document.getElementById("password").classList.remove("incorrecto");
                document.getElementById("password").classList.add("correcto");
            }else{
                document.getElementById("inputPassError").classList.remove("ocultar");
                document.getElementById("password").classList.add("incorrecto");
                document.getElementById("password").classList.remove("correcto");
            }
        break;
    }
}

inputs.forEach( (input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

//esta funcion evita que envíe los datos 
/*
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    on('click', function(){
        if (formulario.usuario.value == 12345678 && formulario.password.value == 12345){
            console.log("login sucessful")
        }
    })

});*/

//agrego un event listener al boton, el cual llama a una funcion que captura los 
//valores de ingreso y los pasa por parámetro a verificarCredenciales, la misma 
//devolverá un valor booleano si se encuentra en nuestra local storage

var boton = document.getElementById('botonIngresar');
boton.addEventListener('click', iniciarSesion);

function iniciarSesion(){
    var usuario = ''; 
    var passwrd = '';
    var acceso = false;

    usuario = document.querySelector('#username').value;
    passwrd = document.querySelector('#password').value;

    acceso = verificarCredenciales(usuario,passwrd);
    // console.log(acceso); //(solo para testear)


    if(acceso){
        loginSuccess();
    }else{
        alert('Contraseña o Usuario incorrectos, Verifique por favor');
    }
};

function loginSuccess(){
    //con esto me traigo el nombre de usuario activo desde usuarios.js
    var nombreUsuario = sessionStorage.getItem('userL');
    window.location.href = 'main.html';    
};










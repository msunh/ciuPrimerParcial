var formulario = document.getElementById('formulario')
var inputs = document.querySelectorAll('#formulario input')

const expReg = {
    usuario: /^\d{8,8}$/,
    pass: /^.{4,10}$/,
}

//con esto validamos la entrada comparandola con la expresion de arriba
var validarFormulario = (evento) => {
    switch (evento.target.name) {
        //valido el usuario
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
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    evento.on('click', function(){
        if (formulario.usuario.value == 12345678 && formulario.password.value == 12345){
            console.log("login sucessful")
        }
    })

});




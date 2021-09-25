function getUserList(){
    //se guarda la lista de usuarios en un local storage porque no estamos conectados a ninguna base de datos
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosList')); 


    if(listaUsuarios == null){
        listaUsuarios = 
        [   
            //id, dni/usr    password
            ['1', '30124305', '43716', 'Chris', 'Cornell'],
            ['2', '12362751', '334567', 'Kurt', 'Cobain']
        ]

    }    
    return listaUsuarios;

};

//con esta funcion valido que lo ingresado exista en mi "base de datos" y sea correcta.

function verificarCredenciales(usuario,passwrd){
    var listaUsuarios = getUserList();
    var acceso = false; //si las dos coincidencias suceden, la variable acceso pasa a true,

    //recorro la lista de usuarios obtenida de la funcion get de arriba y comparo
    for (i = 0;i < listaUsuarios.length; i++){

        if(usuario == listaUsuarios[i][1] && passwrd == listaUsuarios[i][2]){
            acceso = true;
            //ahora guardo ese usuario en el session storage para usar la info
            sessionStorage.setItem('userL', listaUsuarios[i][3] + ' ' + listaUsuarios[i][4]);
        }
    }
    return acceso;
}

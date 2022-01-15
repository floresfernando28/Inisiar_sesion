window.onload = iniciar;

function iniciar(){
    document.getElementById("enviar").addEventListener("click",validar, false);
}

//Validamos los datos introducidos en el input nombre de la pagina
// html


function validarNombre(){
    var elemento = document.getElementById("nombre");
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            error2(elemento,"Debes Introducir un Nombre de Usuario!")
        }
        if(elemento.validity.patternMismatch){
            error2(elemento, "El Nombre Debe tener al menos 3 caracteres!");
        }
        return false;
    }
    return true;
}

//Validamos los datos introducidos en el input de la pagina
//html

function validarEdad(){
    var elemento = document.getElementById("edad");
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            error2(elemento,"Debe Introducir una Edad!");
        }
        if(elemento.validity.rangeOverflow){
            error2(elemento, "La Edad debe ser menor a 100!");
        }
        if(elemento.validity.rangeUnderflow){
            error2(elemento,"La Edad debe ser mayor o igual a 18!");
        }
        return false;
    } 
    return true;
}

//Validamos los datos introducidos en el input de la pagina
//html

function validarTelefono(){
    var elemento = document.getElementById("telefono");
    if(!elemento.checkValidity()){
        if(elemento.validity.valueMissing){
            error2(elemento,"Introduzca un número Teléfonico")
        }
        if(elemento.validity.patternMismatch){
            error2(elemento, "El telefono debe tener 8 Digitos");
        }
        return false;
    }
    return true;
}

//Funcion validar

function validar(){
    borrarError();
    if (validarNombre() && validarEdad() && validarTelefono() && confirm("Pulse aceptar si desea Enviar el Formulario!")){
        return true;
    }else{
        e.preventDefault();
        return false;
    }
}



//funcion 2
function error2(elemento,mensaje){
    document.getElementById("mensajeError").innerHTML = mensaje;
    elemento.className  = "error";
    elemento.focus();

}
//funcion BorrarError

function borrarError(){
    var formulario = document.forms[0];
    for(var i=0; i<formulario.elements.length; i++){
        formulario.elements[i].className="";
    }
}
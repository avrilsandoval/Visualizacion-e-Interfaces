function validar_envio() {


    if(document.form.email.value.length==0) {
        alert("Tenes que escribir tu mail")
        document.form.email.focus()
        return 0;
    }
    
    if(document.form.password.value.length==0) {
        alert("Tienes que escribir una contraseña")
        document.form.password.focus()
        return 0;
    }
    
    document.form.submit();
    
    }
    
    function validar_registro() {

        let usuario = document.formregistro['registrar-usuario'].value;
        let contrasena = document.formregistro['registrar-pass'].value;
        let contrasena2 = document.formregistro['registrar-pass2'].value;
        let fechaNacimientoRegistro = document.formregistro['registrar-fecha-nacimiento'].value;
        let regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    
        if(usuario.length<4 || usuario.lenght>8) {
            alert("El nombre tiene que tener entre 4 y 8 caracteres");
            document.formregistro['registrar-usuario'].focus();
            return 0;
        }
    
        if(contrasena.length == 0) {
            alert("La contraseña no puede estar vacia");
            document.formregistro.contrasena.focus();
            return 0;
        } else if(contrasena !== contrasena2 ) {
            alert("Las contraseñas deben ser iguales");
            document.formregistro.contrasena.focus();
            return 0;
        }
    
        if(contrasena !== contrasena2 ) {
            alert("Las contraseñas deben ser iguales");
            document.formregistro.contrasena2.focus();
            return 0;
        }
        
        if ((regexp.test(document.formregistro.email.value) == 0) || (document.formregistro.email.value.length = 0))
        {
            alert("Introduzca una direccion de email valida");
            document.formregistro.email.focus();
            return 0;
        } 
        else 
        {
            var c_email=true;
        }
    
        document.formregistro.submit();
        
        }
        
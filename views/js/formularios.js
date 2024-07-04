function validar_envio() {

    const form = document.forms['formlogin'];
    form.classList.add('was-validated');
    let regexp = /^[0-9a-zA-Z._.-]+@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

    let isValid = true;
    let email = form['email'].value;
    let contrasena = form['password'].value;


    if (contrasena.length === 0) {
        form['registrar-pass'].setCustomValidity('La contraseña no puede estar vacía');
        isValid = false;
    }

    if (!regexp.test(email)) {
        form['email'].setCustomValidity('Introduzca una dirección de email válida');
        isValid = false;
    } else {
        form['email'].setCustomValidity('');
    }

    if (isValid) {
        form.submit();
    }
    
    }
    
    function validar_registro() {
        const form = document.forms['formregistro'];
        form.classList.add('was-validated');
    
        let isValid = true;
        let usuario = form['registrar-usuario'].value;
        let contrasena = form['registrar-pass'].value;
        let contrasena2 = form['registrar-pass2'].value;
        let email = form['email'].value;
        let regexp = /^[0-9a-zA-Z._.-]+@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    
     
        if (usuario.length < 4 || usuario.length > 8) {
            form['registrar-usuario'].setCustomValidity('El nombre debe tener entre 4 y 8 caracteres');
            isValid = false;
        } else {
            form['registrar-usuario'].setCustomValidity('');
        }
    
      
        if (contrasena.length === 0) {
            form['registrar-pass'].setCustomValidity('La contraseña no puede estar vacía');
            isValid = false;
        } else if (contrasena !== contrasena2) {
            form['registrar-pass'].setCustomValidity('Las contraseñas deben ser iguales');
            form['registrar-pass2'].setCustomValidity('Las contraseñas deben ser iguales');
            isValid = false;
        } else {
            form['registrar-pass'].setCustomValidity('');
            form['registrar-pass2'].setCustomValidity('');
        }
    
     
        if (!regexp.test(email)) {
            form['email'].setCustomValidity('Introduzca una dirección de email válida');
            isValid = false;
        } else {
            form['email'].setCustomValidity('');
        }
    
        if (isValid) {
            form.submit();
        }
    }
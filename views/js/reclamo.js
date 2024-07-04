function validar_reclamo() {
    const form = document.forms['formReclamo'];
    form.classList.add('was-validated');
  
    let isValid = true;
    let nombreCompleto = form['registrar-usuario'].value;
    let tipoDocumento = form['tipo'].value;
    let numeroDocumento = form['dni'].value;
    let email = form['email'].value;
    let regexp = /^[0-9a-zA-Z._.-]+@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
  
    if (nombreCompleto.length === 0) {
      form['registrar-usuario'].setCustomValidity('Por favor, ingrese su nombre completo');
      isValid = false;
    } else {
      form['registrar-usuario'].setCustomValidity('');
    }
  
    if (tipoDocumento === '') {
      form['tipo'].setCustomValidity('Por favor, seleccione un tipo de documento');
      isValid = false;
    } else {
      form['tipo'].setCustomValidity('');
    }
  
    if (numeroDocumento.length === 0) {
      form['dni'].setCustomValidity('Por favor, ingrese su número de documento');
      isValid = false;
    } else {
      form['dni'].setCustomValidity('');
    }
  
    if (!regexp.test(email)) {
      form['email'].setCustomValidity('Por favor, ingrese un correo electrónico válido');
      isValid = false;
    } else {
      form['email'].setCustomValidity('');
    }
  
    if (isValid) {
      form.submit();
    }
  }
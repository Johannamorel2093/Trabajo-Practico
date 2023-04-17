$(document).ready(function() {
    $('form').submit(function(e) {
      e.preventDefault(); 
  
      // validación de los campos del formulario
      var nombre = $('#nombre').val();
      var email = $('#email').val();
      var mensaje = $('#mensaje').val();
  
      if (nombre == '' || email == '' || mensaje == '' ) {
        alert('Por favor complete todos los campos.');
        return false;
      }
  
      // envío del formulario si la validación es exitosa
      alert('Formulario enviado con éxito.');
      return true;
    });
  });
  $.ajax({
    method: "POST",
    url:"https://reqres.in/api/users?page=2",
    data: {name:"john" , location:"boston"}

  })
  .done(function (msg){
    alert ("data saved: " + msg)
});
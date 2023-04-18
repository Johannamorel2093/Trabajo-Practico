document.addEventListener('DOMContentLoaded', function() {
  // Configurar reglas de validación y mensajes de error usando jQuery validation
  $('#formularioProceso').validate({
      rules: {
          nombreProceso: 'required',
          numeroProducto: 'required',
          precio: 'required',
          cantidad: 'required',
         
      },
      messages: {
          nombreProceso: 'Por favor ingrese su nombre',
          numeroProducto: 'Por favor ingrese un producto',
          precio: 'Por favor ingrese el precio',
          cantidad: 'Por favor ingrese la cantidad',
      },
      submitHandler: function(form) {
          
          var nombre = document.getElementById('nombreProceso').value;
          var producto = document.getElementById('numeroProducto').value;
          var precio = document.getElementById('precio').value;
          var cantidad = document.getElementById('cantidad').value;

          
          var subtotal = precio * cantidad;
          var impuesto = subtotal * 0.21; 
          var total = subtotal + impuesto;

         
          var cotizacion = 'Cotización:\n\n' +
              'Nombre: ' + nombre + '\n' +
              'Producto: ' + producto + '\n'+
              'Precio: $' + precio + '\n' +
              'Cantidad: ' + cantidad + '\n' +
              'Subtotal: $' + subtotal + '\n' +
              'Impuesto (21%): $' + impuesto + '\n' +
              'Total: $' + total;

          alert(cotizacion);
          
          var pdf = new jsPDF();

          pdf.text(cotizacion ,10 ,10);

          var pdfBlob = pdf.output('blob');
          var downloadLink = document.createElement ('a');
          downloadLink.href = URL.createObjectURL (pdfBlob);
          downloadLink.download = 'Resumen_proceso.pdf';
          downloadLink.click();
          URL.revokeObjectURL(pdfBlob)
          
      }
  })
})

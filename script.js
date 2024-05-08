const nombreInput = document.getElementById('nombre');
const fechaInput = document.getElementById('inicio-cesde');
const horaInput = document.getElementById('horario');

const formulario = document.querySelector('form');

formulario.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const nombre = nombreInput.value;
  const fecha = fechaInput.value;
  const hora = horaInput.value;

  if (nombre === '') {
    alert('Por favor, ingresa tu nombre.');
    nombreInput.focus();
    return;
  }

  if (fecha === '') {
    alert('Por favor, selecciona la fecha de inicio de clases.');
    fechaInput.focus();
    return;
  }

  if (hora === '') {
    alert('Por favor, selecciona tu horario de estudio.');
    horaInput.focus();
    return;
  }

  alert('¡Datos enviados correctamente!');
});
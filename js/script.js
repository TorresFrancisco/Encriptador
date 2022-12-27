const inputTexto = document.getElementById('inputTexto');
const botonEncriptar = document.getElementById('botonEncriptar');
const botonDesencriptar = document.getElementById('botonDesencriptar');
const inputResultado = document.getElementById('inputResultado');
const botonCopiar = document.getElementById('botonCopiar');
const soloLetras = '^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$';

document.addEventListener('DOMContentLoaded', () => {
  botonEncriptar.addEventListener('click', encriptarTexto);
  botonDesencriptar.addEventListener('click', desencriptarTexto);
  botonCopiar.addEventListener('click', copiarTexto);
});

function encriptarTexto(e) {
  e.preventDefault();
  inputResultado.value = '';
  let texto = inputTexto.value;

  if (texto.match(soloLetras) != null) {
    let palabras = texto.split(' ');
    let nuevasPalabras = [];

    for (let palabra of palabras) {
      palabra = palabra.replaceAll('e', 'enter');
      palabra = palabra.replaceAll('i', 'imes');
      palabra = palabra.replaceAll('a', 'ai');
      palabra = palabra.replaceAll('o', 'ober');
      palabra = palabra.replaceAll('u', 'ufat');
      nuevasPalabras.push(palabra);
    }

    const resultado = nuevasPalabras.join(' ');
    inputResultado.value = resultado;
    inputTexto.value = '';

  } else {
    alert('Solo texto, nada de caracteres especiales');
    inputTexto.value = '';
    return;
  }
}

function desencriptarTexto(e) {
  e.preventDefault();
  inputResultado.value = '';
  let texto = inputTexto.value;

  if (texto.match(soloLetras) != null) {
    let palabras = texto.split(' ');
    let nuevasPalabras = [];

    for (let palabra of palabras) {

      palabra = palabra.replaceAll('enter', 'e');
      palabra = palabra.replaceAll('imes', 'i');
      palabra = palabra.replaceAll('ai', 'a');
      palabra = palabra.replaceAll('ober', 'o');
      palabra = palabra.replaceAll('ufat', 'u');


      nuevasPalabras.push(palabra);
    }

    const resultado = nuevasPalabras.join(' ');
    inputResultado.value = resultado;
    inputTexto.value = '';

  } else {
    alert('Solo texto, nada de caracteres especiales');
    inputTexto.value = '';
    return;
  }
}

function copiarTexto(e) {
  e.preventDefault();
  const mensaje = inputResultado.value;
  navigator.clipboard.writeText(mensaje);
}


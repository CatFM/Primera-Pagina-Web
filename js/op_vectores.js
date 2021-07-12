var nombres = [];
var correos = [];
var telefonos = [];
var mensajes = [];

function AgregarC() {
   var nombreC = document.getElementsByName('nombreC')[0].value;
   var correoC = document.getElementsByName('correoC')[0].value;
   var telefonoC = document.getElementsByName('telefonoC')[0].value;
   var mensajeC = document.getElementsByName('mensajeC')[0].value;
   nombres.push(nombreC);
   correos.push(correoC);
   telefonos.push(telefonoC);
   mensajes.push(mensajeC);
   if (localStorage.getItem("nombres")!= null) { 
       var arraytmp = JSON.parse(localStorage.getItem("nombres"));
       arraytmp.push(nombreC);
        localStorage.setItem('nombres', JSON.stringify(arraytmp));
   }else{
       localStorage.setItem('nombres', JSON.stringify(nombres));
   }
   if (localStorage.getItem("correos")!= null) {
       var arraytmp = JSON.parse(localStorage.getItem("correos"));
       arraytmp.push(correoC);
        localStorage.setItem('correos', JSON.stringify(arraytmp));
   }else{
       localStorage.setItem('correos', JSON.stringify(correos));
   }
   if (localStorage.getItem("telefonos")!= null) {
       var arraytmp = JSON.parse(localStorage.getItem("telefonos"));
       arraytmp.push(telefonoC);
        localStorage.setItem('telefonos', JSON.stringify(arraytmp));
   }else{
       localStorage.setItem('telefonos', JSON.stringify(telefonos));
   }
   if (localStorage.getItem("mensajes")!= null) {
       var arraytmp = JSON.parse(localStorage.getItem("mensajes"));
       arraytmp.push(mensajeC);
        localStorage.setItem('mensajes', JSON.stringify(arraytmp));
   }else{
       localStorage.setItem('mensajes', JSON.stringify(mensajes));
   }

     console.log(nombres, correos, telefonos, mensajes);
}

function EliminarC() {
    var nombreC = document.getElementsByName('nombreC')[0].value;
   var correoC = document.getElementsByName('correoC')[0].value;
   var telefonoC = document.getElementsByName('telefonoC')[0].value;
   var mensajeC = document.getElementsByName('mensajeC')[0].value;

   var index = nombres.indexOf(nombreC);
if (index > -1) {
  nombres.splice(index, 1);}

  var index2 = correos.indexOf(correoC);
if (index2 > -1) {
  correos.splice(index2, 1);}

  var index3 = telefonos.indexOf(telefonoC);
if (index3 > -1) {
  telefonos.splice(index3, 1);}

  var index4 = mensajes.indexOf(mensajeC);
if (index4 > -1) {
  mensajes.splice(index4, 1);}


  if (localStorage.getItem("nombres")!= null) { 
    var arraytmp = JSON.parse(localStorage.getItem("nombres"));
    arraytmp.splice(nombreC);
     localStorage.setItem('nombres', JSON.stringify(arraytmp));
}else{
    localStorage.setItem('nombres', JSON.stringify(nombres));
}
if (localStorage.getItem("correos")!= null) {
    var arraytmp = JSON.parse(localStorage.getItem("correos"));
    arraytmp.splice(correoC);
     localStorage.setItem('correos', JSON.stringify(arraytmp));
}else{
    localStorage.setItem('correos', JSON.stringify(correos));
}
if (localStorage.getItem("telefonos")!= null) {
    var arraytmp = JSON.parse(localStorage.getItem("telefonos"));
    arraytmp.splice(telefonoC);
     localStorage.setItem('telefonos', JSON.stringify(arraytmp));
}else{
    localStorage.setItem('telefonos', JSON.stringify(telefonos));
}
if (localStorage.getItem("mensajes")!= null) {
    var arraytmp = JSON.parse(localStorage.getItem("mensajes"));
    arraytmp.splice(mensajeC);
     localStorage.setItem('mensajes', JSON.stringify(arraytmp));
}else{
    localStorage.setItem('mensajes', JSON.stringify(mensajes));
}
  console.log(nombres, correos, telefonos, mensajes);
}

function BuscarC() {
    var nombreC = document.getElementsByName('nombreC')[0].value;

    let Buscar = nombres.includes(nombreC);

console.log(Buscar)
}







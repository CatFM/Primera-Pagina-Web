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
console.log(Buscar);

}
    
    function Ordenar() {
       
        //Ordena 2 elementos
        function ordena(items, leftIndex, rightIndex){
            var temp = items[leftIndex];
            items[leftIndex] = items[rightIndex];
            items[rightIndex] = temp;
        }
        //Parte el vector en dos
        function partes(items, left, right) {
            var pivot   = items[Math.floor((right + left) / 2)];
                i       = left;
                j       = right; 
            while (i <= j) {
                while (items[i] < pivot) {
                    i++;
                }
                while (items[j] > pivot) {
                    j--;
                }
                if (i <= j) {
                    ordena(items, i, j); 
                    i++;
                    j--;
                }
            }
            return i;
        }
        
        //Une las dos partes ordenandolas
        function quickSort(items, left, right) {
            var index;
            if (items.length > 1) {
                index = partes(items, left, right); 
                if (left < index - 1) { 
                    quickSort(items, left, index - 1);
                }
                if (index < right) { 
                    quickSort(items, index, right);
                }
            }
            return items;
        }
        //Ponerlo en pantalla
         //NOMBRES
        var nombresordenados = quickSort(nombres, 0, nombres.length - 1);
        console.log(nombresordenados);
        //TELEFONOS
        var telefonosordenados = quickSort(telefonos, 0, telefonos.length - 1);
        console.log(telefonosordenados);
        //CORREOS
        var correosordenados = quickSort(correos, 0, correos.length - 1);
        console.log(correosordenados);

        console.time('loop');
        var nombresordenados = quickSort(nombres, 0, nombres.length - 1);
        console.log('El tiempo que tardó en organizar los nombres:');
        console.timeEnd('loop');

        console.time('loop');
        var telefonosordenados = quickSort(telefonos, 0, telefonos.length - 1);
        console.log('El tiempo que tardó en organizar los telefonos:');
        console.timeEnd('loop');

        console.time('loop');
        var correosordenados = quickSort(correos, 0, correos.length - 1);
        console.log('El tiempo que tardó en organizar los correos:');
        console.timeEnd('loop');
    }
    







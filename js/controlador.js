


const linkedList = new LinkedList();
const linkedList2 = new LinkedList();
const linkedList3 = new LinkedList();

function Agregar(){
    // console.log('Recibir');
    var nombre = document.getElementsByName('nombre')[0].value;
    var autor = document.getElementsByName('autor')[0].value;
    var precio = document.getElementsByName('precio')[0].value;
    linkedList3.add(precio);
    linkedList2.add(autor);
    linkedList.add(nombre);
    console.log(nombre, autor, precio);
    
};
function Eliminar(){
    var nombre = document.getElementsByName('nombre')[0].value;
    linkedList.borrar(nombre);
    var autor = document.getElementsByName('autor')[0].value;
    linkedList2.borrar(autor);
    var precio = document.getElementsByName('precio')[0].value;
    linkedList3.borrar(precio);
    console.log(nombre, autor, precio);
    
};

function Buscar(){
    var nombre = document.getElementsByName('buscar')[0].value;
    console.log(nombre);
    linkedList.buscar(nombre);
};






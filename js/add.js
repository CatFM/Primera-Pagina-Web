class Nodo{
    constructor(data, next){
        this.data = data;
        this.next = next;
    };
};

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    };
    add(data){
        const newNodo = new Nodo(data, null);
        /*Si la cabeza está vacía (Primer elemento)*/
        if(!this.head){
            this.head = newNodo
        }else{
            //Si ya tiene datos recorre la lista desde head
            let current = this.head;
            //Recorre mientras hay elementos
            while(current.next){
                current = current.next;
            };
            current.next = newNodo;
        }
        this.size++
    };

    insertAt(data, index){
        if( index < 0 || index > this.size){
            return null;
        };
        const newNodo = newNodo(data);
        let current = this.head;
        let previa;

        if(index === 0){
            newNodo.next = current;
            this.head = newNodo;
        }else{
            for(let i = 0; i < index; i++){
                previa = current;
                current = current.next
            };
            newNodo.next = current;
            previa.next = newNodo;
        };
        this.size++;
    };

    borrar(data){
        let current = this.head;
        let previa = null;

            while(current!=null){
                if (current.data=== data) {
                    if (!previa) {
                        this.head = current.next;
                    }else{
                        previa.next = current.next;
                    };
                    this.else--;
                    return current.data
                };
                previa = current;
                current = current.next
            };
            return null;
    };

    print(){
        let current = this.head;
        let string = '';
        let index = 0;

        while(current){
            string += `[${index}]${current.element}${current.next ? '->' : '' }`;
            current = current.next;
            index++
        }
        return string;
    };

    vacia(){
        if(this.size===0){
            return true;
        }else{
            return false;
        };
    };

    tamaño(){
        return this.size;
    };

    buscar(data){
        let current = this.head;
        let index = 0;
        while(current){
            if(current.data===data){
                return index;
            };
            index++;
            current = current.next;
        };
        return -1;
    };
};

class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }


    set modificarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    set modificarNro(nuevoNro) {
        this.telefono = nuevoNro;
    }

    get mostrarNombre() {
        return this.nombre;
    }
    
    get mostrarNro() {
        return this.telefono;
    }

}

class Agenda {
    constructor(numero){
        this.contactos = [];
        this.numeros = numero;  
    }

    aniadirContacto(Contacto){

        for (let i = 0; i < this.contactos.length; i++) {
            if(this.contactos[i].nombre == Contacto.nombre){
                return alert(`Ese contacto ya existe`);
            }
        }

        if(this.contactos.length == this.numeros){
            alert(`AGENDA LLENA. No se pudo agregar al contacto ${Contacto.nombre}`);
        }
        else{
            this.contactos.push(Contacto);
        }
        
    }

    mostrarDat(){
        for (let i = 0; i < this.contactos.length; i++) {
            document.write(`contacto = ${this.contactos[i].nombre} numero = ${this.contactos[i].telefono} <br>`)
            console.log(this.contactos[i])
        }
    }

    existeContacto(Contacto){
   
        for (let i = 0; i < this.contactos.length; i++) {
            if(this.contactos[i] == Contacto){
                return document.write(`Si existe <br>`);
                
            }
        }
         return document.write(`No existe <br>`);
        
    }

    buscarContacto(nombre){
        for (let i = 0; i < this.contactos.length; i++) {
            if(this.contactos[i].nombre == nombre){
                return document.write(`Si existe y su numero es ${this.contactos[i].telefono} <br>`);
                
            }
        }
         return document.write(`No existe <br>`);
    }

    elminarContacto(Contacto){
        for (let i = 0; i < this.contactos.length; i++) {
            if(this.contactos[i] == Contacto){
                
                this.contactos.splice(i,1);
                 document.write(`CONTACTO ELIMINADO <br>`);
                
            }
        }
    }

    agendaLlena(){
        if(this.contactos.length == this.numeros){
                document.write(`Agenda llena <br>`);
        }else{
            document.write('Queda espacio disponible en la agenda <br>');
        }
    }

    huecosLibres(){
        let n = this.numeros - this.contactos.length;
        console.log(n);
        return document.write(`Cantidad de huecos libres ${n}  <br>`);
    }
}


let x = new Agenda(parseInt(prompt(`Ingrese la cantidad de contactos`)));

let menu = (opcion) =>{
    let contactoPrueba = new Contacto()
    let nombre;
    let numero;
    switch (opcion) {
        case 1:
            nombre = prompt('Ingresar nombre del contacto');
            numero = parseInt(prompt('Ingresar numero del contacto')); 
            contactoPrueba.modificarNombre = nombre;
            contactoPrueba.modificarNro = numero;
            x.aniadirContacto(contactoPrueba);
            break;
        case 2:
            nombre = prompt('Ingresar nombre del contacto');
            numero = parseInt(prompt('Ingresar numero del contacto')); 
            contactoPrueba.modificarNombre = nombre;
            contactoPrueba.modificarNro = numero;
            x.existeContacto(contactoPrueba);
            break;
        case 3:
            x.mostrarDat();
            break;
        case 4:
            nombre = prompt('Ingresar nombre del contacto');
            x.buscarContacto(nombre);
            break;
        case 5:
            nombre = prompt('Ingresar nombre del contacto');
            numero = parseInt(prompt('Ingresar numero del contacto')); 
            contactoPrueba.modificarNombre = nombre;
            contactoPrueba.modificarNro = numero;
            x.elminarContacto(contactoPrueba);
            break;
        case 6:
            x.agendaLlena();
            break;
        case 7:
            x.huecosLibres();
            break;
        case 8:
            alert('Saliendo...')
            break;
        default:
            alert('OPCION INCORRECTA')
            break;
    }
}


let opMenu;

do{
    opMenu = parseInt(prompt('Elija una opcion \n 1- Añadir contacto \n 2- Existe contacto \n 3- Listar contactos \n 4- Buscar contacto \n 5- Eliminar contacto \n 6- Agenda llena \n 7- Huecos libres \n 8- Para salir' )) 
    menu(opMenu);
}while(opMenu!=8)




// let hugo = new Contacto(`Hugo`,32312);

// let mario = new Contacto(`chris`,3222312);
// let paro = new Contacto(`carl`,32312);
// let vale = new Contacto(`vale`,52518);
// x.aniadirContacto(hugo);
// x.aniadirContacto(mario);
// x.aniadirContacto(paro);
// x.aniadirContacto(vale);
// x.mostrarDat();
// x.agendaLlena();
// x.buscarContacto(hugo.nombre);
// x.elminarContacto(hugo);
// x.buscarContacto(hugo.nombre);
// x.mostrarDat();
// x.agendaLlena();
// x.huecosLibres();
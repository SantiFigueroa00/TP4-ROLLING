class Producto {
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrar(){
        document.write(`<p>Nombre del producto: ${this.nombre} </p>
        <ul> 
            <li>Codigo: ${this.codigo}</li>
            <li>Precio: ${this.precio}</li>
        </ul>`)
    }
}

let productos = [];
productos[0] = new Producto(01,'fideo',10);
productos[1] = new Producto(02,'salsa',5);
productos[2] = new Producto(03,'tomate',20);

for (let index = 0; index < 3; index++) {
    productos[index].mostrar();   
}

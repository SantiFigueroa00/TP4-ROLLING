class Rectangulo {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }

    modificarAlto(){ 
        this.alto = parseInt(prompt('Ingrese el alto a modificar'));
    }
    modificarAncho(){ 
        this.ancho = parseInt(prompt('Ingrese el ancho a modificar'));
    }
    mostrar(){
        document.write(`<p>El alto del rectangulo es ${this.alto} y su ancho ${this.ancho}</p>`)
    }
    perimetro(){
        let perimetro;
        perimetro = (this.ancho + this.alto)*2;
        return perimetro;
    }
    area(){
        let area;
        area = this.ancho * this.alto;
        return area;
    }
}

let rec1 = new Rectangulo(prompt('Ingresar alto del rectangulo'),prompt('Ingresar ancho del rectangulo'));
rec1.mostrar();

rec1.modificarAlto();
rec1.modificarAncho();
rec1.mostrar();

document.write(`<p>El perimetro del rectangulo es: ${rec1.perimetro()}</p>`);
document.write(`<p>El area del rectangulo es: ${rec1.area()}</p>`);
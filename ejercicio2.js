// cree un objeto "cuenta"
// propiedades:  titular con el valor "Alex",  propiedad saldo, teniendo como valor inicial 0.
// método ingresar(), extraer(), informar()

class Cuenta {
    constructor(titular){
        this.titular = titular;
        this.saldo = 0;
    }

    ingresar(montoIngresar){ 
        this.saldo += montoIngresar;
    }
    extraer(montoExtraer){
        if(this.saldo >= montoExtraer){
            this.saldo -= montoExtraer;
        }else{
            alert('Fondos insuficientes');
        }
    }
    informar(){
        console.log(this);
        document.write(`<p>La cuenta del usuario: ${this.titular}, contiene un saldo de $${this.saldo}</p>`)
    }
}

let cuenta1 = new Cuenta('Valentina')

cuenta1.informar();

let deposito = parseFloat(prompt('Ingrese un monto'));
cuenta1.ingresar(deposito);

cuenta1.informar();

let montoExtraer = parseFloat(prompt('Ingrese un monto a retirar'));
cuenta1.extraer(montoExtraer);

cuenta1.informar();
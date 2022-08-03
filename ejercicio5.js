class Persona {
    constructor(nombre, dni, sexo, peso, altura, añoNacimiento) {
        this.nombre = nombre;
        this.dni = dni;
        this.edad = 2022-añoNacimiento;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura; 
        this.añoNacimiento = añoNacimiento;
    }

    mostrarGeneracion(){
        if(this.añoNacimiento>=1930 && this.añoNacimiento<=1948){
            document.write(`<p>Pertenece a la generacio Silent Generation y su rango caracteristico es Austeridad</p>`)
        }else if(this.añoNacimiento>=1949 && this.añoNacimiento<=1968){
            document.write(`<p>Pertenece a la generacio BabyBoom y su rango caracteristico es Ambicion</p>`)
        }else if(this.añoNacimiento>=1969 && this.añoNacimiento<=1980){
            document.write(`<p>Pertenece a la generacio Generacion X y su rango caracteristico es Obsesion por el exito</p>`)
        }else if(this.añoNacimiento>=1981 && this.añoNacimiento<=1993){
            document.write(`<p>Pertenece a la generacio Generacion Y y su rango caracteristico es Frustracion</p>`)
        }else if(this.añoNacimiento>=1994 && this.añoNacimiento<=2010){
            document.write(`<p>Pertenece a la generacio Generacion Z y su rango caracteristico es Irreverencia</p>`)
        }else{
            document.write(`<p>No hay una generacion definida`)
        }
    }
}

let per1 = new Persona('Santiago',1,'H',60,1.70,1940);
per1.mostrarGeneracion();
let per2 = new Persona('jorge',2,'H',60,1.70,1955);
per2.mostrarGeneracion();
let per3 = new Persona('carla',3,'M',60,1.70,1975);
per3.mostrarGeneracion();
let per4 = new Persona('carlos',4,'H',60,1.70,1987);
per4.mostrarGeneracion();
let per5 = new Persona('elio',5,'H',60,1.70,2000);
per5.mostrarGeneracion();
let per6 = new Persona('pedro',6,'H',60,1.70,2015);
per6.mostrarGeneracion();



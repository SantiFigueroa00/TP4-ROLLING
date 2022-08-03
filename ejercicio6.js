class Libro {
    constructor(ISBN, titulo, autor, nroPag) {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.nroPag = nroPag;
    }

    set modificarISBN(nuevoISBN) {
        this.ISBN = nuevoISBN;
    }
    
    set modificarTitulo(nuevoTitulo) {
        this.titulo = nuevoTitulo;
    }

    set modificarAutor(nuevoAutor) {
        this.autor = nuevoAutor;
    }

    set modificarNroPags(nuevoNroPag) {
        this.nroPag = nuevoNroPag;
    }

    get mostrarISBN() {
        return this.ISBN;
    }
    
    get mostrarTitulo() {
        return this.titulo;
    }

    get mostrarAutor() {
        return this.autor;
    }

    get mostrarNroPags() {
        return this.nroPag;
    }
    
    mostrarLibro(){
        document.write(`<p>El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene páginas ${this.nroPag}</p>`)
    }
}

let libro1 = new Libro(9788845292613,'El señor de los anillos','J. R. R. Tolkien',1940);
libro1.mostrarLibro();
let libro2 = new Libro(9780553593716,'Games of thrones','George R. R. Martin',2000);
libro2.mostrarLibro();

if(libro1.nroPag>libro2.nroPag){
    document.write(`<p>El libro con mas paginas es: ${libro1.titulo} </p>`)
}else{
    document.write(`<p>El libro con mas paginas es: ${libro2.titulo} </p>`)
}
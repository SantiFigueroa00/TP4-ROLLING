let auto = {
    color: 'rojo',
    marca: 'audi',
    modelo: 2022,
    encenderAuto: () => { document.write('<p>Enciendiendo vehiculo</p>') },
    apagarAuto: () => { document.write('<p>Apagando vehiculo</p>') }
}

console.log(auto);
auto.encenderAuto();
auto.apagarAuto();
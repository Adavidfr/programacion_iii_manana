import { Equipo } from "./11_herencia_mp";

export class Accesorio extends Equipo {
    getDetalleGarantia(): void {
        console.log('Garantia de accesorios: 6 meses');

    }
}

const cargador = new Accesorio('Anker', 'Cargador');
console.log(cargador.marca);
console.log(cargador.categoria);
console.log(cargador.getDetalleGarantia())

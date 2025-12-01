export class Asesor {
    constructor(
        public nombre: string,
        public tienda: string
    ) {}

    presentarse(): void {
        console.log(`Hola, soy ${this.nombre} y atiendo en ${this.tienda}`);
    }
}

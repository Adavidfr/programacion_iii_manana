export class Equipo {
    public marca: string;
    public categoria: string;
    constructor(marca: string, categoria: string){
        this.marca = marca;
        this.categoria = categoria;
    }

    encender(): void{
        console.log('equipo encendido para demo');
    }
}

export class Smartphone extends Equipo{}

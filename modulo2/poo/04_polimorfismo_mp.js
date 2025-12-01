class Empleado {
    constructor(nombre, salario){
        this.nombre=nombre;
        this.salario=salario;
    }
    trabajar(){
        console.log("Empleado registrando ventas...")
    }
    calcularVacaciones(){
        return this.salario*0.15;
    }
    horasExtra(horas){
        return ((this.salario/30)/8)*horas*2;
    }
}
class AsesorTienda extends Empleado{
    calcularVacaciones(){
        return this.salario*0.18;
    }
    horasExtra(horas){
        return ((this.salario/30)/8)*horas*2.5;
    }
}

class VendedorOnline extends Empleado{
    calcularVacaciones(){
        return this.salario*0.16;
    }
    horasExtra(horas){
        return ((this.salario/30)/6)*horas*2;
    }
}

const asesorLuis = new AsesorTienda ('Luis', 1500);
const vendedoraAna = new VendedorOnline ('Ana', 1300);
asesorLuis.trabajar();
vendedoraAna.trabajar();
console.log (asesorLuis.calcularVacaciones());
console.log (vendedoraAna.calcularVacaciones());
console.log (asesorLuis.horasExtra(5));
console.log (vendedoraAna.horasExtra(4));

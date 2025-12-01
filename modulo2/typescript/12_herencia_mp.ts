import { Equipo, Smartphone } from "./11_herencia_mp";

const telefonoDemo = new Equipo('Motorola', 'Gama media');
console.log(telefonoDemo.marca);
console.log(telefonoDemo.categoria);
telefonoDemo.encender();

const telefonoPremium  = new Smartphone ('Samsung', 'Gama alta');
console.log(telefonoPremium.marca);
console.log(telefonoPremium.categoria);
telefonoPremium.encender();

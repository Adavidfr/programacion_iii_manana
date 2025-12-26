import { Dispositivo } from "./09_acceso_mp";

const equipoDemo: Dispositivo = new Dispositivo('Galaxy S24');
console.log(equipoDemo.modelo);
console.log(equipoDemo.getSku());
console.log(equipoDemo.getAtributos());

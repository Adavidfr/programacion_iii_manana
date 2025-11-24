"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _11_herencia_mp_1 = require("./11_herencia_mp");
var telefonoDemo = new _11_herencia_mp_1.Equipo('Motorola', 'Gama media');
console.log(telefonoDemo.marca);
console.log(telefonoDemo.categoria);
telefonoDemo.encender();
var telefonoPremium = new _11_herencia_mp_1.Smartphone('Samsung', 'Gama alta');
console.log(telefonoPremium.marca);
console.log(telefonoPremium.categoria);
telefonoPremium.encender();


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asesor = void 0;

var Asesor = /** @class */ (function () {
  function Asesor(nombre, tienda) {
    this.nombre = nombre;
    this.tienda = tienda;
  }

  Asesor.prototype.presentarse = function () {
    console.log(
      "Hola, soy ".concat(this.nombre, " y atiendo en ").concat(this.tienda)
    );
  };

  return Asesor;
})();

exports.Asesor = Asesor;

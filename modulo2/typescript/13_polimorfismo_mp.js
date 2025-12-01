"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accesorio = void 0;
var _11_herencia_mp_1 = require("./11_herencia_mp");
var Accesorio = /** @class */ (function (_super) {
    __extends(Accesorio, _super);
    function Accesorio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Accesorio.prototype.getDetalleGarantia = function () {
        console.log('Garantia de accesorios: 6 meses');
    };
    return Accesorio;
}(_11_herencia_mp_1.Equipo));
exports.Accesorio = Accesorio;
var cargador = new Accesorio('Anker', 'Cargador');
console.log(cargador.marca);
console.log(cargador.categoria);
console.log(cargador.getDetalleGarantia());


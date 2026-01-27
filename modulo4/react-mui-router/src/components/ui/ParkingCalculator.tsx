import { useState } from "react";

export default function ParkingCalculator() {
  const [horas, setHoras] = useState<number>(0);
  const [tarifa, setTarifa] = useState<number>(0);
  const [descuento, setDescuento] = useState<number>(0);

  const esValido =
    horas > 1 && tarifa > 0 && descuento >= 0 && descuento <= 50;

  const subtotal = horas * tarifa;

  const descuentoBase = esValido ? (subtotal * descuento) / 100 : 0;
  const descuentoExtra = esValido && horas > 5 ? subtotal * 0.1 : 0;

  const descuentoTotal = descuentoBase + descuentoExtra;
  const totalFinal = subtotal - descuentoTotal;

  return (
    <div className="max-w-md space-y-4 rounded-xl border p-4">
      <h2 className="text-xl font-bold">Cálculo de Estacionamiento</h2>

      <div>
        <label>Horas</label>
        <input
          type="number"
          className="w-full border p-2"
          value={horas}
          onChange={(e) => setHoras(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Tarifa por hora</label>
        <input
          type="number"
          className="w-full border p-2"
          value={tarifa}
          onChange={(e) => setTarifa(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Descuento (%)</label>
        <input
          type="number"
          className="w-full border p-2"
          value={descuento}
          onChange={(e) => setDescuento(Number(e.target.value))}
        />
      </div>

      {!esValido && (
        <p className="text-red-500 text-sm">
          Horas &gt; 1, tarifa &gt; 0 y descuento entre 0% y 50%
        </p>
      )}

      {esValido && (
        <div className="space-y-1">
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Descuento total: ${descuentoTotal.toFixed(2)}</p>
          <p className="font-bold">
            Total a pagar: ${totalFinal.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}

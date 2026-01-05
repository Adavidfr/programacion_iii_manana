import { useState } from 'react';

export default function AreaTriangulo() {
    const [horas, setHoras] = useState('');
    const [costoPorHora, setCostoPorHora] = useState('');
    const [salario, setSalario] = useState(0);

    const calcularSalario = () => {

        const h = parseFloat(horas);
        const ch = parseFloat(costoPorHora);

        if (!isNaN(h) && !isNaN(ch) && h > 0 && ch > 0) {
            const salario = h * ch * 5;
            setSalario(salario);
        } else {
            alert('Por favor ingresa valores válidos para horas y costo por hora.');
        }
    };

    return (
        <div>
            <h2>Cálculo del Salario Semanal</h2>
            <input
                type="number"
                value={horas}
                placeholder="Horas trabajadas"
                onChange={e => setHoras(e.target.value)}
            /><br/>
            <input
                type="number"
                value={costoPorHora}
                placeholder="Valor de la hora"
                onChange={e => setCostoPorHora(e.target.value)}
            /><br/>
            <button onClick={calcularSalario}>Calcular Salario</button>

            {salario !== 0 && <p>Salario semanal: {salario} dólares</p>}
        </div>
    );
}

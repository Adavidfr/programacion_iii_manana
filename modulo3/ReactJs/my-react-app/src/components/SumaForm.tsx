import { useState } from 'react';

export default function SumaForm() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleSubmit = (e : any) => {
    e.preventDefault();
    alert(`Tu resultado es ${num1 + num2}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Numero 1"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Numero 2"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />

      <button type="submit">Sumar</button>
    </form>
  );
}



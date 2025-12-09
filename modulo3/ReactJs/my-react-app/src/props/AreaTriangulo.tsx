import { useState } from "react";

export default function AreaTriangulo(props) {
  const [base, setBase] = useState(0);
  const [altura, setAltura] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onCalcular({ base, altura });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Base"
        onChange={(e) => setBase(Number(e.target.value))}
      /><br />

      <input
        type="number"
        placeholder="Altura"
        onChange={(e) => setAltura(Number(e.target.value))}
      /><br />

      <button type="submit">Calcular área</button>
    </form>
  );
}

import AreaTriangulo from "./AreaTriangulo";

export default function ParentAreaTriangulo() {

  const handleCalcular = ({ base, altura }) => {
    const area = (base * altura) / 2;
    console.log("El área del triángulo es:", area);
  };

  return <AreaTriangulo onCalcular={handleCalcular} />;
}

//import ButtonCounter from './components/ButtonCounter';
//import ColorBox from './components/ColorBox';
//import ConditionalText from './components/ConditionalText';
//import EmojiList from './components/EmojiList';
//import HelloWorld from './components/HelloWorld';
//import ShowDate from './components/ShowDate';
//import SimpleForm from './components/SimpleForm';
//import SumaForm from './components/SumaForm';
//import TextInput from './components/TextInput';
//import ToggleMessage from './components/ToggleMessage';
//import WelcomeUser from './components/WelcomeUser';
//import PromedioTresNotas from './components/PromedioTresNotas';
//import Greeting from './props/Greeting';
//import UserCard from './props/UserCard';
//import ParentButtonOne from './props/ParentButtonOne';
//
//function App() {
//
//  const userData = {
//    name: "Francisco",
//    age: 25,
//    email: "francisco@example.com"
//  };
//
//  return (
//    <>
//      <HelloWorld />
//      <WelcomeUser />
//      <ButtonCounter />
//      <TextInput />
//      <ToggleMessage />
//      <ShowDate />
//      <ColorBox />
//      <ConditionalText />
//      <EmojiList />
//      <SimpleForm />
//      <SumaForm />
//      <PromedioTresNotas />
//      <Greeting name="Francisco" />
//      <Greeting name="Ana" />
//      <UserCard user={userData} />
//      <ParentButtonOne />
//    </>
//  );
//}
//
//
//
//export default App;
//
//
//
//import FetchUser from "./useEffect/FetchUser";
//import LogEffect from "./useEffect/LogEffect";
//import ScrollLogger from "./useEffect/ScrollLoger";
//import ExpensiveCalc from "./useMemo/ExpensiveCalc";
//import FiltroLista from "./useMemo/FiltroLista";
//import TablaOrdenada from "./useMemo/TablaOrdenada";
//import CirculoColorido from "./useRef/CirculoColorido";
//import ReproductorSonido from "./useRef/ReproductorSonido";
//import ScrollDemo from "./useRef/ScrollDemo";
//import AccessWithLimit from "./useState/AccesWithLimit";
//import CheckboxSummary from "./useState/CheckboxSummary";
//import ClickHistory from "./useState/ClickHistory";
//import DocumentTitleChanger from "./useState/DocumentTitleChanger";
//import DynamicColor from "./useState/DynamicColor";
//import HoverFont from "./useState/HoverFont";
//import LanguageSwitcher from "./useState/LanguageSwitcher";
//import LoginWithLimit from "./useState/LoginWithLimit";
//import MultiSwitch from "./useState/MultiSwitch";
//import PostLikes from "./useState/PostLikes";
//import GenerarPrimos from "./useMemo/GenerarPrimos";
//import ContadorLetras from "./useMemo/ContadorLetras";
//import Contador from "./useCallback/Contador";
//import ReRender from "./useCallback/ReRender";
//import ListaProps from "./useCallback/ListaProps";
//
//
//function App () {
//  return (
//    <>
//
//    <HoverFont />
//    <AccessWithLimit />
//    <LoginWithLimit />
//    <DocumentTitleChanger />
//    <PostLikes />
//    <CheckboxSummary />
//    <LanguageSwitcher />
//    <MultiSwitch />
//    <DynamicColor />
//    <ClickHistory />
//    <LogEffect />
//    <FetchUser />
//    <ScrollLogger />
//    <CirculoColorido />
//    <ScrollDemo />
//    <ReproductorSonido />
//    <ExpensiveCalc />
//    <FiltroLista />
//    <TablaOrdenada />
//    <GenerarPrimos />
//    <ContadorLetras />
//    <Contador />
//    <>
//    <ReRender />
//    </>
//
//    
//    
//    </>
//  )
//}
//
//export default App;
//


// import ListaProps from "./useCallback/ListaProps";
// 
// function App() {
//   const elementos = ["uno", "dos", "tres", "cuatro"];
// 
//   return (
//     <>
//       <h2>Ejemplo de Lista</h2>
//       <ListaProps items={elementos} />
//     </>
//   );
// 
// }
// 
// export default App;

//import TablaMultiplicar from './useCallback/TablaMultiplicar';
//
//export default function App() {
//  const numeros = [1, 2, 3, 4, 5];
//
//  return (
//    <>
//      <h2>Tablas de Multiplicar</h2>
//      <TablaMultiplicar numeros={numeros} />
//    </>
//  );
//}
//

// import AreaCirculo from "./useReducer/AreaCirculo";
// import HijoProps from "./useCallback/HijoProps";
// import Saludo from "./useCallback/Saludo";
// import Carrito from "./useReducer/Carrito";
// import FormSteps from "./useReducer/FormSteps";


// export default function App() {
// return (
//   <>
//     <AreaCirculo />
//     <HijoProps />
//     <Saludo />
//     <Carrito />
//     <FormSteps />
//   </>
// )
// }

import CalculoSalarioSemanal from "./useState/CalculoSalarioSemanal";

export default function App() {
  return (
    <CalculoSalarioSemanal />
  )
}

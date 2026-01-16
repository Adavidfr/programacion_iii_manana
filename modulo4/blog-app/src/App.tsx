// import { useState } from 'react'
// import './App.css'
// import BasicButtons from './lab/BasicButtons'
// import ColorSwitches from './lab/ColorSwitches'
// import BasicTable from './lab/BasicTable'
// import TestMUI from './components/TestMUI'
// 
// function App() {
// 
//   return (
//     <>
//       <BasicButtons/>
//       <ColorSwitches/>
//       <BasicTable/>
//       <TestMUI/>
//     </>
//   )
// }
// 
// export default App

import { useRoutes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { appRoutes } from "./routes/app.routes";
import type { JSX } from "react";

export default function App(): JSX.Element {
  const element = useRoutes(appRoutes);
  return <AuthProvider>{element}</AuthProvider>;
}
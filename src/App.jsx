import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <Nav/>
      {/*Chamando Todos os Componentes Filhos*/}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*Dependencias Para Criar As Rotas */
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Aluno from './routes/Aluno.jsx'

{/*Criando a Função CreateBrowserRouter */}

const router=createBrowserRouter([
  {
    //Chamando Elemento App
    path:'/',element:<App/>,
    errorElement:<Error/>,

    //Chamando os Elementos Filhos

    children:[
      //Criando a Rota Home
      {path:'/',element:<Home/>},
      //Criando a Rota Aluno
      {path:'/aluno',element:<Aluno/>}
    ]


  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Criando o Props que Será Renderizado */}
    <RouterProvider router={router}/>
  </StrictMode>,
)

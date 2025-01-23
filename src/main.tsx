import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
// import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from './pages/Home';


const routes = createBrowserRouter([
  
  {
    path: "/",
    element: <Home />
  },

  {
    path: "/venda",
    element: <h1>Página de vendas</h1>
  },

  {
    path: "/stock",
    element: <h1>Página de stoques</h1>
  },

])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <RouterProvider router={routes} />
  
  </StrictMode>,
)

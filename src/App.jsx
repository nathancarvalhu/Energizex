import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/componentes/Header'
import Carousel from './assets/componentes/Carrossel/app'
import Categorias from './assets/componentes/Categorias/'
import Vendidos from './assets/componentes/Mais vendidos'
import Suplemento from './assets/componentes/Suplemento'
import Produtos from './assets/componentes/Produtos'
import HurryUp from './assets/componentes/HurryUp'
import Footer from './assets/componentes/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
      <Carousel />
      <Categorias />
      <Vendidos />
      <Suplemento/>
      <Produtos/>
      <HurryUp/>
      <Footer/>
    </div>
  )
}

export default App

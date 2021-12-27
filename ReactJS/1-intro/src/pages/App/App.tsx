import React ,{ useState } from 'react'
import './App.css'
import Welcome from '../../components/Welcome'
import Status from '../../components/Status'
import Ask from '../../components/Ask'
import Art from '../../components/Art'

const App = () => {
  let nome: string = 'João'

  let n1: number = 20
  let n2: number = 10


  return (
    <>
      {/* Pode escrever assim uma div com a classe ja atribuida */}
      {/* {React.createElement('div', { className: 'App' }, 'Olá mundo')}  */}
      
      {/* Ou assim (exemplo de um link) */}
      {/* {React.createElement('a', { href: 'https://google.com', target: "blank" }, 'Clique aqui')} */}
      <Ask />

      {/* Componentes */}
      <Welcome nome={nome}/>
      <Status n1={n1} n2={n2} />
      <Art label="Van Gogh">
        <img src="https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555314015/shape/mentalfloss/van-gogh-primary.png?itok=DFNpqT4E" />
      </Art>
    </>
  )
}

export default App

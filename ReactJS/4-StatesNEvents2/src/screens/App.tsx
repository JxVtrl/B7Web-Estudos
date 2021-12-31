import { useState } from 'react'
import './App.css'
import  { Botao }  from '../components/Botao'


const App = () => {
  let textoBotao = 'Clique aqui'

  const botaoEvent = (txt: string) => {
    alert(txt)
  }

  return (
    <div className="App">
      <Botao text={textoBotao} botaoEvent={botaoEvent}/>
    </div>
  )
}

export default App

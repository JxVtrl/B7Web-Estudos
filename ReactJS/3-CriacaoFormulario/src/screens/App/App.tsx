import { useState } from 'react'
import './App.css'

function App() {
  const [nome, setNome]: [string, Function] = useState('')
  const [sobrenome, setSobrenome]: [string, Function]  = useState('')
  const [idade, setIdade]: [number, Function]  = useState('')

  

  return (
    <div className="App">
      <div>
        <section>Nome: <input onChange={e=>setNome(e.target.value)}/></section>
        <section>Sobrenome: <input onChange={e => setSobrenome(e.target.value)}/></section>
        <section>Idade: <input onChange={e => setIdade(e.target.value)} type='number'/></section>
      </div>
      <hr />
      <div>
        <section><p>Olá {nome?nome:'---'} {sobrenome}, tudo bem?<br />Você tem {idade?idade:'--'} anos.</p></section>
      </div>
    </div>
  )
}

export default App

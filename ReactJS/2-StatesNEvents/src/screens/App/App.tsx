import { useState } from 'react'
import './App.css'

function App() {
  const [numero, setNumero]: [number, Function] = useState(0)
  const [nome, setNome]: [string, Function] = useState('')


  const handleClick = () => {
   document.getElementsByClassName('add')[0].innerHTML += `<li>O botão foi clicado</li>` 
  }


  return (
    <div className="App">
      <button onClick={handleClick}>Clique em mim!</button>
      <ul className='add'></ul>

      <div id='contador'>
        <button onClick={() => setNumero(numero - 1)}>-</button>
          <p>{numero}</p>
        <button onClick={() => setNumero(numero + 1)}>+</button>
      </div>

      <div>
        <input type="text" placeholder='Digite aqui seu nome' onChange={e => setNome(e.target.value)} />
        <div>
          <p>{nome}</p>
        </div>
      </div>


    </div>
  )
}

export default App

import { useState } from 'react'
import { Info } from './components/Info'

import './App.css'

function App() {
  let list = [
    'Exemplo 1',
    'Exemplo 2',
    'Exemplo 3',
    'Exemplo 4',
    'Exemplo 5',
  ]

  let infos = [
    { name: 'Nome 1', age: 'Idade 1' },
    { name: 'Nome 2', age: 'Idade 2' },
    { name: 'Nome 3', age: 'Idade 3' },
    { name: 'Nome 4', age: 'Idade 4' },
    { name: 'Nome 5', age: 'Idade 5' },
  ]

  return (
    <div className="App">
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>

      <ul>
        {infos.map((item, index) => { // uso de chaves
          return <li key={index}>{item.name} - {item.age}</li>
        })}
      </ul>

      <ul>
        {infos.map((item, index) => ( // uso de parenteses
          <Info key={index} data={item} />
        ))}
      </ul>
    </div>
  )
}

export default App

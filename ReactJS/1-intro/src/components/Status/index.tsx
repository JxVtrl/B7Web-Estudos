import React from 'react';

// import { Container } from './styles';

type Props = { // Declaração de tipos de props
  n1: number;
  n2: number;

  result?: string; // ? indica que o atributo é opcional
}

const Status = ({ n1, n2 }: Props) => {
  
  function soma(n1: number, n2: number): number { // Este ultimo parametro é opcional mas se trata do retorno
    return n1 + n2
  }

  function sub(n1: number, n2: number): number {
    return n1 - n2
  }

  function multi(n1: number, n2: number): number{
    return n1 * n2
  }

    return (
      <div>
        <ul>
          <h2>Números a testar: {n1} e {n2}</h2>
          <li>Soma: {soma(n1,n2)}</li>
          <li>Subtração: {sub(n1, n2)}</li>
          <li>Multiplicação: {multi(n1, n2)}</li>
        </ul>
      </div>
  )
}

export default Status;
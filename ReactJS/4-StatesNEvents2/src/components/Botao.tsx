import React from 'react';

// import { Container } from './styles';

type Props = {
  text: string
  botaoEvent: (txt:string) => void;  
  
}

export const Botao = ({ text, botaoEvent }: Props) => {

  const handleClick = () => {
    // alert('clicou (função no Filho)')
    botaoEvent('FRASE')
  }


  return (
    <button onClick={handleClick}>{text}</button>
  );
}

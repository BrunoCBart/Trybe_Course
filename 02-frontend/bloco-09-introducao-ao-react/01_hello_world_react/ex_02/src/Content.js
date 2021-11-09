import React, { Component } from 'react'


const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

export default class Content extends Component {
  render() {
    return (<div className='Content'>
      {conteudos.map(content => (
         <div key={content.conteudo} className="card">
        <h1>{`O conteúdo é ${content.conteudo}`}</h1>
        <p>{`status: ${content.status}`}</p>
        <p>{`bloco: ${content.bloco}`}</p>
        </div>
      ))}
    </div>)
  }
}
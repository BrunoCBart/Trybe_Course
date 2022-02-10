import React from 'react';

const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo',
'Goías', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná',
'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia',
'Roraíma', 'Santa Catarina', 'São Paulo', 'Sergipe','Tocantins']

export default class SelectEstados extends React.Component {

  render() {
    const {value, handleChange} = this.props
    return (
      <div>
        <label htmlFor="select-country">
          Onde você vive:
          <select name="country" id="select-country" value={value} onChange={handleChange}>
            {states.map((state) => {
              return <option>{state}</option>
            })}
          </select>
        </label>
      </div>
    )
  }
}
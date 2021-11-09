import React from 'react';


export default class InputCPF extends React.Component {
  render() {
    const {value, handleChange} = this.props
    return (
      <div>
      <label htmlFor="input-cpf">
        CPF:
        <input name="cpf" value={value} onChange={handleChange} 
        id="input-cpf" type="text" required></input>
      </label>
    </div>
    )
  }
}
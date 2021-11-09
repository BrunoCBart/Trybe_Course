import React from 'react';


export default class InputEndereco extends React.Component {
  render() {
    const {value, handleChange} = this.props
    return (
      <div>
      <label htmlFor="input-adress">
        Endereço:
        <input name="adress"  value={value} onChange={handleChange} 
        id="input-adress" type="text" required></input>
      </label>
    </div>
    )
  }
}
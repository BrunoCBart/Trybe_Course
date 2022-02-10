import React from 'react';


export default class RadioHouse extends React.Component {
  render() {
    const {value, handleChange} = this.props
    return (
      <div>
      <label htmlFor="input-house">
        Casa
        <input name="house"  value={value} onChange={handleChange} 
        id="input-house" type="radio" required></input>
      </label>
      <label htmlFor="input-house">
        Apartamento
        <input name="house"  value={value} onChange={handleChange} 
        id="input-house" type="radio" required></input>
      </label>
    </div>
    )
  }
}
import React from 'react';


export default class InputCidade extends React.Component {
  render() {
    const {value, handleChange, handleOnBlur} = this.props
    return (
      <div>
      <label htmlFor="input-city">
        Cidade:
        <input name="city" value={value} onChange={handleChange} 
        onBlur={handleOnBlur} id="input-city" type="text" required></input>
      </label>
    </div>
    )
  }
}
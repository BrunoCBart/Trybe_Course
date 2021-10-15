import React from 'react';


export default class InputName extends React.Component {

  render() {
    const {value, handleChange} = this.props
    return (
      <div>
        <label htmlFor="input-name">
        Nome:
        <input value={value} name="name" onChange={handleChange} 
        id="input-name" type="text" required></input>
      </label>
    </div>
    )
  }
}
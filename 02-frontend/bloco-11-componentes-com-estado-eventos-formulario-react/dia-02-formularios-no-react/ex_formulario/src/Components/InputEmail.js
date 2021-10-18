import React from 'react';


export default class InputEmail extends React.Component {
  render() {
    const {value, handleChange} = this.props
    return (
      <div>
      <label htmlFor="input-email">
        Email:
        <input name="email"  value={value} onChange={handleChange} 
        id="input-email" type="text" required></input>
      </label>
    </div>
    )
  }
}
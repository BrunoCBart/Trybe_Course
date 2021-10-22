import React from 'react';


export default class Checkbox extends React.Component {
  render() {
    const {value, handlechange} = this.props
    return (
      <div>
        <label htmlFor="willI">
          Will I enter trybe?
          <input name="trybe" type="checkbox" id="willI" value={value} onChange={handlechange}></input>
        </label>
      </div>
    )
  }
}
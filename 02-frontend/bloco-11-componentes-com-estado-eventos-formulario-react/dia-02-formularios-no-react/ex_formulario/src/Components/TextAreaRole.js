import React from 'react';


export default class TextAreaRole extends React.Component {

  render() {
    const {value, handleChange} = this.props
    return (
      <div>
        <label htmlFor="resume">
          Cargo:
          <textarea name="role" value={value} onChange={handleChange} maxLength="40" required></textarea>
        </label>
      </div>
    )
  }
}
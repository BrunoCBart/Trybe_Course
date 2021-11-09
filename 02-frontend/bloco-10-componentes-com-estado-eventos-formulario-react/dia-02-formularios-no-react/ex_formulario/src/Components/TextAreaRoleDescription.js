import React from 'react';


export default class TextAreaRoleDescription extends React.Component {

  render() {
    const {value, handleChange} = this.props
    return (
      <div>
        <label htmlFor="resume">
          Role Description:
          <textarea name="roleDescription" value={value} onChange={handleChange} maxLength="500" required></textarea>
        </label>
      </div>
    )
  }
}
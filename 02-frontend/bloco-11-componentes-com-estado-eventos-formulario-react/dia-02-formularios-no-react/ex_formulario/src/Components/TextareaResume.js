import React from 'react';


export default class TextAreaResume extends React.Component {

  render() {
    const {value, handleChange} = this.props
    return (
      <div>
        <label htmlFor="resume">
          Resumo do currículo:
          <textarea name="resume" value={value} onChange={handleChange} maxLength="1000" required></textarea>
        </label>
      </div>
    )
  }
}
import React from 'react';


export default class Textarea extends React.Component {
  render() {
    const {value, handleChange} = this.props
    return (
      <div>
        <label htmlFor="input-phrase">
          Frase favorita:
          <textarea  name="phrase" value={value} onChange={handleChange} id="input-phrase"></textarea>
        </label>
      </div>
    )
  }
}
import React from 'react';
class App extends React.Component{
  constructor() {
    super()
    this.state = {
      name: '',
      age: 0,
      check: false,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const el = event.target
    const value = el.type === 'checkbox' ? el.checked : el.value
    this.setState({
      [el.name]: value,
    })
  }
  render() {
    return (
      <section>
      <h1>Meu form</h1>
      <form>
      <div>
        <select>
          <option>Opcao 1</option>
          <option>Opcao 2</option>
        </select>
      </div>
      <div>
        <label>Qual é o seu nome?</label>
        <input name="name" value={this.state.name} type='text' value={this.state.name} onChange={this.handleChange}></input>
      </div>
      <div>
        <label>Qual a sua idade?</label>
        <input name="age" type="number" onChange={this.handleChange}></input>
      </div>
      <div>
        <input name="check" type="checkbox" onChange={this.handleChange}></input>
      </div>
      </form>
    </section>
    )
  };
}

export default App;

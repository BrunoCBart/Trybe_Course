import React from 'react'
import InputName from './InputName'
import InputEmail from './InputEmail'
import InputCPF from './InputCPF'
import InputEndereco from './InputEndereco'
import InputCidade from './InputCidade'
import SelectEstados from './SelectEstados'
import RadioHouse from './RadioHouse'
import TextAreaResume from './TextareaResume'
import TextAreaRole from './TextAreaRole'
import TextAreaRoleDescription from './TextAreaRoleDescription'
export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      country: '',
      house: '',
      resume: '',
      roleDescription: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleOnBlur = this.handleOnBlur.bind(this)
    this.handleRadio = this.handleRadio.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.cleanForm = this.cleanForm.bind(this)
  }

  validateAdress = adress => adress.replace(/[^A-Za-z]/g, '')

  showErrorMessage(element) {
    if (document.querySelector('.Error-message')) document.querySelector('.Error-message').remove()
    const p = document.createElement('p')
    p.classList.add('Error-message')
    p.innerText = 'Email inválido'
    element.insertAdjacentElement('afterend', p)
  }

  showValidationMessage(element, email) {
    if (document.querySelector('.email-validation-message')) {
      document.querySelector('.email-validation-message').remove()
    } 
    const p = document.createElement('p')
    !email.match(/^\S+@\S+$/i) ? p.innerText = 'Email Inválido' : p.innerText = 'Ok'
    p.classList.add('email-validation-message')
    element.insertAdjacentElement('afterend', p)
  }

  cleanForm() {
    Object.keys(this.state).forEach(key => {
      this.setState(() => ({
        [key]: ''
      }))
    })
  }


  handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const dadSection = event.target.parentElement
    
    const info = Object.keys(this.state).forEach((key) => {
      const p = document.createElement('p')
      p.innerText = this.state[key]
      dadSection.appendChild(p)
    })  
    form.remove()
  }

  handleRadio({target}) {
    let {name, value} = target
    value = target.parentElement.innerText

    this.updateSate(name, value)
  }

  handleOnBlur({ target }) {
    let { name, value } = target
    console.log(name, value)

    if (name === 'city') value = value.match(/^\d/) ? '' : value

    this.updateSate(name, value)
}

  handleChange({ target }) {
    let { name, value } = target

    if (name === 'name') value = value.toUpperCase()
    if (name === 'adress') value = this.validateAdress(value)
    if (name === 'email') this.showValidationMessage(target, value)

    this.updateSate(name, value)
  }

  updateSate(name, value) {
    this.setState((state) => ({
      [name]: value,
    }))
  }
  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
          <InputName value={this.state.name} handleChange={this.handleChange} />
          <InputEmail value={this.state.email} handleChange={this.handleChange}/>
          <InputCPF value={this.state.cpf} handleChange={this.handleChange}/>
          <InputEndereco value={this.state.adress} handleChange={this.handleChange}/>
          <InputCidade value={this.state.city} handleChange={this.handleChange} handleOnBlur={this.handleOnBlur}/>
          <SelectEstados value={this.state.country} handleChange={this.handleChange}/>
          <RadioHouse value={this.state.house} handleChange={this.handleRadio}/>
          </fieldset>
          <fieldset>
          <TextAreaResume value={this.state.resume} handleChange={this.handleChange}/>
          <TextAreaRole value={this.state.role} handleChange={this.handleChange}/>
          <TextAreaRoleDescription value={this.state.roleDescription} handleChange={this.handleChange}/>
          </fieldset>
          <button type="submit">Submit</button>
          <button onClick={this.cleanForm}>Limpar</button>
        </form>
      </section>
    )
  }
}
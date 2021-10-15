import React from 'react'
import PropTypes from 'prop-types';


export default class Pokemon extends React.Component {
  
  render() {
    const { pkm } = this.props
    return (
    <div className={'pokemon-card'}>
      <div className='pokemon-info'>
        <h2>{pkm.name}</h2>
        <p>{`type: ${pkm.type}`}</p>
      <p>{`weight: ${pkm.averageWeight.value} ${pkm.averageWeight.measurementUnit}`}</p>
      </div>
        <img src={`${pkm.image}`} alt="pokemon"></img>
    </div>
    )
  }
}

Pokemon.propTypes = {
  pkm: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired
    })
  })
} 
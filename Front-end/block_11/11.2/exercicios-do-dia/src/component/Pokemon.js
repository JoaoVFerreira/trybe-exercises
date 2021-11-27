import React, { Component } from 'react';



class Pokemon extends Component {
  render() {
    const { poks } = this.props
    const { name, type, averageWeight, image } = poks
    return (
      <div className="pokemon">
        <div className="card-pokemon">
        <p>{name}</p>
        <p>{type}</p>
        <p>{`Average weigth: ${averageWeight.value}${averageWeight.measurementUnit}`}</p>
        </div>
        <img src={image} alt={name}/>
      </div>
    )
  }
}

/*Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
}; */

export default Pokemon
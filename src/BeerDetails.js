import React, { Component } from 'react';
import axios from 'axios';

export default class BeerDetails extends Component {
  state = {
    name: '',
    image_url: '',
    description: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: '',
    contributed_by: '',
  };
  componentDidMount = async () => {
    const beerId = this.props.match.params.beerId;
    // let url = '';
    // if (beerId === 'random') {
    //   url = 'https://ih-beers-api2.herokuapp.com/beers/random';
    // } else {
    //   url = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`;
    // }
    // const response = await axios.get(url);
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
    );
    console.log(response);
    this.setState({ ...response.data });
  };

  render() {
    return (
      <div className="container m-5">
        <div className="d-flex justify-content-center">
          <img
            style={{ width: '100px' }}
            src={this.state.image_url}
            alt={this.state.name}
          />
        </div>
        <div className="d-flex justify-content-between">
          <h1>{this.state.name}</h1>
          <span>{this.state.attenuation_level}</span>
        </div>
        <div className="d-flex justify-content-between">
          <h2>{this.state.tagline}</h2>
          <span>{this.state.first_brewed}</span>
        </div>
        <div>
          <p>{this.state.description}</p>
        </div>
        <div>
          <small>{this.state.contributed_by}</small>
        </div>
      </div>
    );
  }
}

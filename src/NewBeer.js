import React, { Component } from 'react';
import axios from 'axios';
import TextInput from './TextInput';

export default class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async () => {
    const response = await axios.post(
      'https://ih-beers-api2.herokuapp.com/beers/new',
      this.state
    );

    this.setState({
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: '',
    });
  };

  render() {
    return (
      <div className="container">
        <TextInput
          label="Name"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <TextInput
          label="Tagline"
          type="text"
          name="tagline"
          value={this.state.tagline}
          onChange={this.handleChange}
        />
        <TextInput
          label="Description"
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <TextInput
          label="First Brewed"
          type="text"
          name="first_brewed"
          value={this.state.first_brewed}
          onChange={this.handleChange}
        />
        <TextInput
          label="Brewers Tips"
          type="text"
          name="brewers_tips"
          value={this.state.brewers_tips}
          onChange={this.handleChange}
        />
        <TextInput
          label="Attenuation Level"
          type="number"
          name="attenuation_level"
          value={this.state.attenuation_level}
          onChange={this.handleChange}
        />
        <TextInput
          label="Contributed By"
          type="text"
          name="contributed_by"
          value={this.state.contributed_by}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit} className="mt-5 btn btn-primary">
          Submit
        </button>
      </div>
    );
  }
}

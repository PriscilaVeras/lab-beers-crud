import React, { Component } from 'react';

import axios from 'axios';

import BeerCard from './BeerCard';
import TextInput from './TextInput';

export default class BeersList extends Component {
  state = {
    beers: [],
    searchParameter: '',
  };

  componentDidMount = async () => {
    const response = await axios.get(
      'https://ih-beers-api2.herokuapp.com/beers'
    );
    // console.log(response);
    this.setState({ beers: [...response.data] });
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (this.state.searchParameter !== prevState.searchParameter) {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.searchParameter}`
        );
        console.log(response);
        this.setState({ beers: [...response.data] });
      } catch (err) {
        console.log(err);
      }
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="m-5">
        <TextInput
          label="Search"
          type="text"
          name="searchParameter"
          value={this.state.searchParameter}
          onChange={this.handleChange}
        />
        {this.state.beers.map((beer) => (
          <BeerCard {...beer} />
        ))}
      </div>
      /* 
        <BeerCard beer={beer} />
        <BeerCard
            image_url={beer.image_url}
            name={beer.name}
            tagline={beer.tagline}
            contributed_by={beer.contributed_by}
          /> */
    );
  }
}

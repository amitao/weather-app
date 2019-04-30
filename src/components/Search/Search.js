import React, { Component } from "react";
import axios from "axios";
import Form from '../Search/Form';
import Display from '../Search/Display';

const API_KEY = "2743db6443fc258f1bd7d289ead18271";

export default class Search extends Component {

  state = {
    location: {
      temperature: "",
      city: "",
      country: "",
      humidity: "",
      description: "",
      error: ""
    }
  };

  handleCountryChange = event => {
    this.setState({
      location: {
        ...this.state.location,
        country: event.target.value
      }
    });
  };

  handleCityChange = event => {
    this.setState({
      location: {
        ...this.state.location,
        city: event.target.value
      }
    });
  };

  getWeather = event => {
    event.preventDefault();

    let city = this.state.location.city;
    let country = this.state.location.country;

    if (city && country) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`
        )
        .then(resp => {
          console.log("data in GET client:", resp.data);
          this.setState({
            location: {
              temperature: resp.data.main.temp,
              city: resp.data.name,
              country: resp.data.sys.country,
              humidity: resp.data.main.humidity,
              description: resp.data.weather[0].description
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.setState({
        location: {
          error: "Please try again..."
        }
      });
    }
  };

  render() {
    return (
      <div>
        <Form 
          getWeather={this.getWeather} 
          location={this.state.location} 
          handleCityChange={this.handleCityChange}
          handleCountryChange={this.handleCountryChange} />
        <Display 
          location={this.state.location} />
      </div>
    );
  }
}

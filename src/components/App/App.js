import React, { Component } from "react";
import "./App.css";
import axios from "axios";

const API_KEY = "2743db6443fc258f1bd7d289ead18271";


class App extends Component {
  state = {
      location: {
      temperature: '',
      city: '',
      country: '',
      humidity: '',
      description: '',
      error:''
   }
  };

  handleCountryChange  = (event) => {
    this.setState({
      location: {
        ...this.state.location,
        country: event.target.value
      }
    });
  }

  handleCityChange = (event) => {
    this.setState({
      location: {
        ...this.state.location,
        city: event.target.value
      }
    });
  }


  getWeather = (event) => {
    event.preventDefault();

    let city = this.state.location.city;
    let country = this.state.location.country;
    
    if (city && country) {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`)
    .then( resp => {
      console.log('data in GET client:', resp.data);
      this.setState({
        location: {
          temperature: resp.data.main.temp,
          city: resp.data.name,
          country: resp.data.sys.country,
          humidity: resp.data.main.humidity,
          description: resp.data.weather[0].description,
        }
      })
    })
    .catch( err => {
      console.log(err);
    });
  } else {
    this.setState({
      location: {
        error: 'Please try again...'
      }
    })
  }
  }
 

  render() {
    return (
      <div>
        <header>
          <h1>Weather Test</h1>
        </header>
        <div>
          <form onSubmit={this.getWeather}>
            <input type="text" placeholder="City" onChange={this.handleCityChange} value={this.state.location.city} />
            <input type="text" placeholder="Country" onChange={this.handleCountryChange} value={this.state.location.country} />
            <input type="submit" value="Submit" />
          </form>
        </div>

        { this.state.location.city && this.state.location.country ? 
          <div>
            City: {this.state.location.city}
            Country: {this.state.location.country}
            temperature: {this.state.location.temperature}
            description: {this.state.location.description}
          </div>
          :
          this.state.location.error
        }

      </div>
    );
  }
}

export default App;

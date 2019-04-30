import React from "react";

const Form = props => {
  return (
    <div>
      <form onSubmit={props.getWeather}>
        <input
          type="text"
          placeholder="City"
          onChange={props.handleCityChange}
          value={props.location.city}
        />
        <input
          type="text"
          placeholder="Country"
          onChange={props.handleCountryChange}
          value={props.location.country}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};


export default Form;
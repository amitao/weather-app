import React from "react";

const Display = props => {
  return (
    <div>
      {props.location.city && props.location.country ? (
        <div>
          City: {props.location.city}
          Country: {props.location.country}
          temperature: {props.location.temperature}
          description: {props.location.description}
        </div>
      ) : (
        props.location.error
      )}
    </div>
  );
};


export default Display;
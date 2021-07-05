import React, { Component } from "react";

export class OneApiData extends Component {
  render() {
    return (
      <>
        {this.props.apiData.map((value, index) => {
          return (
            <div
              key={index}
              style={{
                marginLeft: "30px",
                border: "1px solid gray",
                borderRadius: "10px",
                textAlign: "center",
                padding: "15px",
                margin: "15px",
              }}
            >
              <h3>{value.name}</h3>
              <img src={value.img} alt={value.name} />
              <p>{value.level}</p>
              <button onClick={() => this.props.addToFav(value)}>Add to Favorite</button>
            </div>
          );
        })}
      </>
    );
  }
}

export default OneApiData;

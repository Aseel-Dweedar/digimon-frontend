import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export class OneFavData extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", margin: "auto" }}>
        {this.props.favData.map((value, index) => {
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
              <Button variant="primary" onClick={() => this.props.deleteFav(value._id)}>
                Delete
              </Button>
              <Button
                style={{ marginLeft: "30px" }}
                variant="primary"
                onClick={() => this.props.setShowUpdateForm(value._id)}
              >
                Update
              </Button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default OneFavData;

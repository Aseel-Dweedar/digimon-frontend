import React, { Component } from "react";
import axios from "axios";
import OneApiData from "./OneApiData";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `${process.env.REACT_APP_SERVER_URL}/dig`,
      apiData: [],
      showApiData: false,
    };
  }

  componentDidMount = () => {
    axios.get(this.state.url).then((axiosRes) => {
      this.setState({
        apiData: axiosRes.data,
        showApiData: true,
      });
    });
  };

  addToFav = (value) => {
    axios.post(`${this.state.url}/fav`, value);
  };

  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {this.state.showApiData && <OneApiData apiData={this.state.apiData} addToFav={this.addToFav} />}
      </div>
    );
  }
}

export default Main;

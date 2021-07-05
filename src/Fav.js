import React, { Component } from "react";
import axios from "axios";
import OneFavData from "./OneFavData";
import UpdateForm from "./UpdateForm";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: `${process.env.REACT_APP_SERVER_URL}/dig/fav`,
      favData: [],
      showFavData: false,
      showUpdateForm: false,
      id: 0,
      name: "",
      img: "",
      level: "",
    };
  }

  componentDidMount = () => {
    axios.get(this.state.url).then((axiosRes) => {
      this.setState({
        favData: axiosRes.data,
        showFavData: true,
      });
    });
  };

  deleteFav = (id) => {
    axios.delete(`${this.state.url}/${id}`).then(() => {
      axios.get(this.state.url).then((axiosRes) => {
        this.setState({
          favData: axiosRes.data,
          showFavData: true,
          showUpdateForm: false,
        });
      });
    });
  };

  setShowUpdateForm = (id) => {
    this.setState({
      showUpdateForm: !this.state.showUpdateForm,
      id: id,
    });
  };

  setName = (e) => this.setState({ name: e.target.value });
  setImg = (e) => this.setState({ img: e.target.value });
  setLevel = (e) => this.setState({ level: e.target.value });

  updateData = (e) => {
    e.preventDefault();
    axios
      .put(`${this.state.url}/${this.state.id}`, {
        name: this.state.name,
        img: this.state.img,
        level: this.state.level,
      })
      .then(() => {
        axios.get(this.state.url).then((axiosRes) => {
          this.setState({
            favData: axiosRes.data,
            showFavData: true,
            showUpdateForm: false,
          });
        });
      });
  };

  render() {
    return (
      <div>
        {this.state.showUpdateForm && (
          <UpdateForm
            setName={this.setName}
            setImg={this.setImg}
            setLevel={this.setLevel}
            updateData={this.updateData}
          />
        )}
        {this.state.showFavData && (
          <OneFavData
            favData={this.state.favData}
            deleteFav={this.deleteFav}
            setShowUpdateForm={this.setShowUpdateForm}
          />
        )}
      </div>
    );
  }
}

export default Main;

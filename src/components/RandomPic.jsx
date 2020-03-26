import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class RandomPic extends Component {
  state = {
    picinfo: null
  };
  componentDidMount() {
    let { slug } = this.props.match.params || "";
    fetch(`https://dog.ceo/api/breed/${slug}/images/random`)
      .then(res => res.json())
      .then(({ message }) => {
        console.log(message);
        this.setState({ picinfo: message });
      });
  }

  handleLogout() {
    sessionStorage.clear();
  }

  render() {
    console.log(this.state.picinfo);
    return (
      <div>
        <div className="container">
        <Link to="/breedlist" class="button is-primary">
              Back
            </Link>
            
            <h1>Requested Dog Breed looks Like - </h1>
          <div className="notification">
            
            <figure class="image is-480x480">
              <img src={this.state.picinfo} alt="pic" />
            </figure>
          </div>
          <Link to="/signin" onClick={this.handleLogout} class="button is-danger">
              Logout
            </Link>
        </div>
      </div>
    );
  }
}

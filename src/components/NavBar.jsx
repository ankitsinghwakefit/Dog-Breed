import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class NavBar extends Component {

  handelLogout(){
    sessionStorage.clear();
  }

    render() {
        return (
            <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <Link to="/" class="navbar-item">
                Dog-API
              </Link>
          
              <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          
            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <Link to="#" class="navbar-item">
                  Home
                </Link>
          
                <a class="navbar-item">
                  Documentation
                </a>
              </div>
          
              {
                Boolean(sessionStorage.isLoggedIn)
                 ? 
                <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                    <Link to="/signin" onClick={this.handelLogout} class="button is-primary">
                      <strong>Logout</strong>
                    </Link>
                    <Link to="#" class="button is-light">
                      Setting
                    </Link>
                  </div>
                </div>
              </div> 
              :
              <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <Link to="/" class="button is-primary">
                    <strong>Sign up</strong>
                  </Link>
                  <Link to="/signin" class="button is-light">
                    Log in
                  </Link>
                </div>
              </div>
              </div>
              }

            </div>
          </nav>
        )
    }
}

import React from 'react';
import './App.css';
import SignIn from "./components/SignIn";
import SignUp from "./components/Register";
import {Route} from "react-router-dom";
import BreedList from "./components/BreedList";
import RandomPic from "./components/RandomPic";
import "bulma/css/bulma.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route path="/" exact component={SignUp}></Route>
      <Route path="/signin" component={SignIn}></Route>
      <Route path="/breedlist" component={BreedList}></Route>
      <Route path="/randompic/:slug" component={RandomPic}></Route>
      <Footer />
    </div>
  );
}

export default App;

import React , { Component } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Bar from "./bar.js";
import TypeWriteR from "./typeWriter.jsx";
import LikeButton from './likeButton.js'

class Home extends React.Component{
  render(){
    return (
      <div>
        <div className="main">
        <br/>
        <br/>

          <h1>Chilango Life</h1>
          <div className="navbar">
        </div>
          <TypeWriteR />
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          <LikeButton />
          </div>
          </div>

    );
  }
}
export default Home;

import React , { Component } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Bar from "./bar.js";
import TypeWriteR from "./typeWriter.jsx";
import AddLikes from './addLikes.jsx';
//import MainLikes from './mainLikes.jsx';
//import Carousel from '/carousel.js';

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
          <div className="fb-share-button" data-href="https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp"
        data-layout="button_count" data-size="large" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
         class="fb-xfbml-parse-ignore"></a></div>

       </div>


          <AddLikes />

          </div>


    );
  }
}
export default Home;

import React from 'react';
import ReactDom from 'react-dom';
import AddLikes from './likes/addLikes.jsx';
import LikesUnlikesList from  './likes/likesUnlikesList.jsx';
import UnlikePost from './likes/unlikes.jsx';
import $ from 'jquery';


class MainLikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes:0,
      unlikes:0
    };
    this.addLikesPost = this.addLikesPost.bind(this);
    this.getLikesPost = this.getLikesPost.bind(this);
  }
  addLikesPost(likes,unlikes){
    $.ajax({
      method: 'POST',
      url:'/',
      contentType: 'application/json',
      data: JSON.stringify({
        likes: likes,
        unlikes: unlikes
      })
    }).done(() => {
      this.getLikesPost();
    });
  }

 getLikesPost(){
   $.ajax({
     url: '/',
     method: 'GET',
     succes: (results) => {
       this.setState({likes:results, unlikes:results});
     },
     error: (xhr, err) => {
       console.log('err', err);
     }
   })
 }
 componentDidMount(){
   this.getLikesPost();
 }

 render() {
   return (
     <div>
      <p className ='likesbox'>Dale me gusta</p>
       <AddLikes addLikes={this.addLikes.likes}/>

          </div>
     )
   }
 }
 export default MainLikes;

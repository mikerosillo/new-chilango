import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';


class MainLikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: []
    };
    this.addLikesPost = this.addLikesPost.bind(this);
    this.getLikesPost = this.getLikesPost.bind(this);
  }
  addLikesPost(likes,unlikes){
    $.ajax({
      method: 'POST',
      url:'/likes',
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
     url: '/likes',
     method: 'GET',
     succes: (results) => {
       this.setState({likes:results});
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
      <p className ='btn'>Dale me gusta</p>
       <AddPost addPost={this.addLikesPost}/>
        <PostList likes={this.state.likes}/>
          </div>
     )
   }
 }
 export default MainLikes;

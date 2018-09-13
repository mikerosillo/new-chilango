import React from 'react';
import $ from "jquery";

class AddLikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes:0,

    }

    this.Like = this.Like.bind(this);

    this.two = this.two.bind(this);
  }

  addLikePost(likes){
    console.log("likes front end ", likes);
    $.ajax({
      method: 'POST',
      url:'/',
      contentType: 'application/json',
      data: JSON.stringify({
        likes: this.state.likes
      })
    }).done(() => {
      this.getLikePost();
    });
  }

 getLikePost(){
   $.ajax({
     url: '/',
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
   this.getLikePost(),
   this.Like();
 }
  Like (){
    this.setState({
      likes : this.state.likes + 1
    });
    console.log("this is the state " , this.state.likes);
  }

two(){
  this.Like();
  this.addLikePost()
}
  render () {
    return(
      <div>

       <h3>{this.state.likes}
       <button className="btn" onClick={this.two}>
       <img src="https://i.imgur.com/U7C5R53.jpg?3"/></button> {this.state.unlikes}
       </h3>
      </div>
    );
  }

}
export default AddLikes;

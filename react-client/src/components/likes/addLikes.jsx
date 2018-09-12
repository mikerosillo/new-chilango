import React from 'react';

class AddLikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes:0,
      unlikes:0
    }
    this.add = this.add.bind(this);
    this.updateLikes = this.updateLikes.bind(this);
    this.updateUnlikes = this.updateUnlikes.bind(this);

  }
  updateLikes(e){
    this.setState({
      likes: e.target.value
    })
  }
  updateUnlikes(e){
    this.setState({
      unlikes: e.target.value
    })
  }
  add(){
    this.props.addPost(this.state.likes, this.state.unlikes);
    this.setState({
      likes:0,
      unlikes:0
    })
  }
  render () {
    return(
      <div>
      
    )
  }

}

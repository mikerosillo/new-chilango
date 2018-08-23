import React from 'react';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task:""
    }
    this.handleChange = this.handleChange.bind(this);
   this.add = this.add.bind(this);
  }
  handleChange(e) {
  this.setState({task: e.target.value});
//  console.log(this.state.task)
}
add() {
  //alert('A task was created');
  this.props.AddText(this.state.task)
  this.setState({task:""})
  
}
    render(){
      return(
      <div>
        <form >
          <input type="text" value={this.state.task} onChange={this.handleChange} />
          <button onClick={this.add} type="submit" value="Submit"></button>
        </form>
      </div>
  )
}
}
export default AddTask;

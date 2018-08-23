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
}

add(e) {
  //alert('A task was created');
  this.props.AddText(this.state.task)
  this.setState({task:""})
  e.preventDefault();
}
    render(){
      return(
      <div className ="button">
        <form onClick={this.add}>
          <input type="text" value={this.state.task} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
  )
}
}
export default AddTask;

import React from 'react';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:""
    }
    this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
  this.setState({text: e.target.value});
}

handleSubmit(e) {
  alert('A task was created');
  this.setState({text:""})
  e.preventDefault();
}
    render(){
      return(
      <div className ="button">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
  )
}
}
export default AddTask;

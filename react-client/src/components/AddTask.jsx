import React from 'react';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:""
    }
    this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
  this.setState({value: e.target.value});
}

handleSubmit(e) {
  alert('A task was created');
  e.preventDefault();
}
    render(){
      return(
      <div className ="button">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
  )
}
}
export default AddTask;

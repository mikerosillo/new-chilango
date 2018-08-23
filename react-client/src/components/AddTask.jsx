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
  //console.log("add is being called")
  //alert('A taska was created');
  this.props.AddText(this.state.task)
  this.setState({task:""})

}
    render(){
      return(
      <div className="button">

          <input type="text" value={this.state.task} onChange={this.handleChange} />
          <button type="button" onClick={this.add}>Create</button>
      </div>
  )
}
}
export default AddTask;

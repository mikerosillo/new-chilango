import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import AddTask from "./components/AddTask.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.AddText=this.AddText.bind(this);
    this.getText=this.getText.bind(this);
  }
  AddText(task){
     $.ajax({
       method: "POST",
       url: "/items",
       contentType: 'application/json',
       data: JSON.stringify({
        task: task,
       })
     }).done(() => {
       this.getText();
     });
   }
    getText(){
      $.ajax({
      url: '/items',
      method: 'GET',
      success: (results) => {
        this.setState({items:results});
      },
      error: (xhr, err) => {
        console.log('error', err);
      }
    })
    }
  componentDidMount() {
    this.getText();
  }


  render () {
    return (<div className = "remember">
      <h1>Important things to remember</h1>
      <List items={this.state.items}/>
      <AddTask AddText={this.AddText}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

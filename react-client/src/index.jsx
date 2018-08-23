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
    this.addText=this.addText.bind(this);
    this.getText=this.getText.bind(this);
  }
  addText(description, quantity){
     $.ajax({
       method: "POST",
       url: "/items",
       contentType: 'application/json',
       data: JSON.stringify({
        text: text,
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
        this.setState({text:results});
      },
      error: (xhr, err) => {
        console.log('err', err);
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
      <AddTask addText={this.addText}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

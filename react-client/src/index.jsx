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
  }
  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div className = "remember">
      <h1>Important things to remember</h1>
      <List items={this.state.items}/>
      <AddTask/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

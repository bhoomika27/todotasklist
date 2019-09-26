import React, { PureComponent } from 'react'
import './App.css';
import Todos from './todos'
import AddList from './components/addList';
import DisplayTask from './components/displayTask'



class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
          <AddList/>
          <DisplayTask/>
      </div>
    )
  }
}

export default App;

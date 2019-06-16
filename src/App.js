import React from 'react'
import Timeline from './components/Timeline'
import Resume from './components/Resume'
import Sidebar from './components/Sidebar'
import * as data from './resume.json'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {activeId: null}
    this.handleEnter = this.handleEnter.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
  }

  handleEnter(targetId) {
    this.setState({activeId: targetId})
  }

  handleLeave() {
    this.setState({activeId: null})
  }

  render(){
    
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col col-md-2 sidebars"><Timeline sections={data.default} activeId={this.state.activeId}/></div>
          <div className="col col-md-8"><Resume sections={data.default} handleEnter={this.handleEnter} handleLeave={this.handleLeave}/></div>
          <div className="col col-md-2 sidebars"><Sidebar sections={data.default}/></div>
        </div>
      </div>
    )
  }
}

export default App;

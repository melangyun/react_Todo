import React, { Component, Fragment } from 'react';
import Nav from './components/Nav'
import RightContent from './components/RightContent';

class App extends Component {

  state = {
    'renderingGroup' : 0
  }

  changeGroup = (num) => {
    this.setState({'renderingGroup' : num});
  }

  render(){
    return(
      <Fragment>
        <Nav changeGroup = {this.changeGroup} />
        <RightContent renderingGroup = {this.state.renderingGroup}/>
      </Fragment>
    );
  }
}

export default App;

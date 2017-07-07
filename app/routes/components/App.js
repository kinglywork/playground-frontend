import React, {Component} from 'react';
import {Link} from 'react-router';

class App extends Component{
  render(){
    return (
      <div>
        Hello World! Play here...
        <hr />
        <Link to="/">
          {'Home'}
        </Link>
        {' '}
        <Link to="/page1">
          {'Page1'}
        </Link>
        {' '}
        <Link to="/page2">
          {'Page2'}
        </Link>
        {' '}
        <hr />
        {this.props.children || 'content section'}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './SideBar'




class App extends Component {

  render() {
    
    const items = [
      { name: 'home', label: 'Home' }
    ]

    return (
      <div>
        <Sidebar items={items}/>
      </div>
    );
  }
}

export default App;
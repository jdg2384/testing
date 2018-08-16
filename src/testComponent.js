import React, { Component } from 'react';
import * as Actions from "./actions.js";
import InfoStore from "./InfoStore";
import './App.css';

class TestComponent extends Component {
    constructor(){
        super()
        this.getInfo = this.getInfo.bind(this);
        this.state = {
            info: InfoStore.getInfo()
        };
    }

    componentWillMount(){
        InfoStore.on("flux_test", this.getInfo);
    }

    getInfo(){
        this.setState({info: InfoStore.getInfo()});  
    } 

    handler(value){
        Actions.updateInfo(value)
    }
  render() {
    return (
      <div className="">
        <h2>TestComponent</h2>
        <button onClick={(event)=> this.handler(event.target)}>SUBMIT</button>
      </div>
    );
  }
}

export default TestComponent;

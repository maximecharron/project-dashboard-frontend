import { Component } from 'react';
import React from 'react';
import Freezer from 'freezer-js'

const freezer = new Freezer({
  title: ':D'
});

export default class Application extends Component{
  componentDidMount(){
    freezer.on('update', newvalue =>  this.forceUpdate() );
  }
  render(){
    const state = freezer.get();

    return <h1>{state.title}</h1>;
  }
}

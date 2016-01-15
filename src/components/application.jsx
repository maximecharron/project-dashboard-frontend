import React from 'react';
import Freezer from 'freezer-js';

import ProjectList from 'components/projectlist';
import exampledata from 'exampledata';

const freezer = new Freezer (exampledata);

window.freezer = freezer;

export default class Application extends React.Component{
  componentDidMount(){
    freezer.on('update', newvalue =>  this.forceUpdate() );
  }
  render(){
    const state = freezer.get();

    return (<div className="container">
      <h1>{state.title}</h1>
      <ProjectList projects={state.projects}/>
    </div>);
  }
}

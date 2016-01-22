import React from 'react';
import Freezer from 'freezer-js';
import querystringparser from 'querystringparser';
import reqwest from 'reqwest';

import ProjectList from 'components/projectlist';
import emptystate from 'emptystate';
import exampleProjects from 'exampleprojectsdata';

const freezer = new Freezer(emptystate);

var queryString = {}
if(window.location.search !== ""){
  queryString = querystringparser.parse(window.location.search.substr(1));
}

var projectsSetter = () => {
  console.log(exampleProjects);
  freezer.get().set("projects", exampleProjects);
}
if(queryString["server"]){
  projectsSetter = () => {
    reqwest({
        url: queryString["server"] + "/projects"
      , method: 'get'
      , success: resp => freezer.get().set("projects", JSON.parse(resp))
    })
  }
}
projectsSetter();

window.freezer = freezer;

export default class Application extends React.Component{
  componentDidMount(){
    freezer.on('update', newvalue => this.forceUpdate());
  }
  render(){
    const state = freezer.get();
    console.log(state.projects);
    return (<div className="container">
      <h1>{state.title}</h1>
      <ProjectList projects={state.projects}/>
    </div>);
  }
}

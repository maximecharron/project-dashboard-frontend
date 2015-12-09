import React from 'react';
import Freezer from 'freezer-js';

import ProjectList from 'components/projectlist';
import realtime from 'components/realtime';

const freezer = new Freezer({
  title: 'Glo2003 - Projects explorer',
  badges: {
    'one-of-em': {
      'img':'url://',
      'description':'some description'
    }
  },
  projects: [
    {
      name:'glo2003/glo',
      lastCommit:'',
      ciStatus:'',
      openIssues: [],
      badges:['one-of-em']
    },
    {
      name:'glo2003/awesome',
      lastCommit:'yesterday',
      ciStatus:'failling',
      openIssues: [1001],
      badges:['one-of-em']
    }
  ]
});

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

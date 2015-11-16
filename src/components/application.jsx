import React from 'react';
import Freezer from 'freezer-js'

import ProjectList from 'components/projectlist.jsx'


const url = 'ws://localhost:3000/ws';
const c = new WebSocket(url);
const send = function(data){
  console.log((new Date())+ " ==> "+JSON.stringify(data)+"\n")
  c.send(JSON.stringify(data))
}

c.onmessage = function(msg){
  console.log((new Date())+ " <== "+msg.data+"\n")
}

let i = 0;
c.onopen = function(){
  setInterval(
    // {"method": "echo", "params": ["Hello JSON-RPC"], "id": 1}
    function(){ send({"method": "ping", "id": ++i}) }
  , 10000 )
}

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
      title:'glo2003/glo',
      lastCommit:'',
      ciStatus:''
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

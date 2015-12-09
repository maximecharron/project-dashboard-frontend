import React from 'react';

export default class Project extends React.Component{
  render(){
    return (<div>Project - {this.props.project.name}</div>)
  }
}

Project.propTypes = {
  project: React.PropTypes.object
};

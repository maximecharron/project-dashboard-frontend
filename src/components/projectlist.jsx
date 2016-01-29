import React from 'react';

import Project from 'components/project'

export default class ProjectList extends React.Component{
  render(){

    const projects = this.props.projects || [];

    return (
    <div className="sm-flex flex-wrap mxn2">
      { projects.map( (project,i) => {
        return <div key={i} className="sm-col-6 lg-col-4 border-box p2 flex flex-stretch">
          <Project project={project} /></div>
      })}
    </div>)
  }
}

ProjectList.propTypes = {
  projects: React.PropTypes.array
};

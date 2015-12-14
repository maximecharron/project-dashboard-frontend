import React from 'react';

import Project from 'components/project'

export default class ProjectList extends React.Component{
  render(){
    return (
    <div className="flex">
      { this.props.projects.map( (project,i) => {
        return <div key={i} className="p1 border col-6">
          <Project project={project} /></div>
      })}
    </div>)
  }
}

ProjectList.propTypes = {
  projects: React.PropTypes.array
};

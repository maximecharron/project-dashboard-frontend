import React from 'react';

export default class Project extends React.Component{
  render(){
    const project = this.props.project;
    const contributors = project.contributors || [];
    const languages = project.languages || {};

    return (<div className="border p2 shadow">Project - {project.name}
        <div>N. open issues: {project.issues ? project.issues.length : 0}</div>
        <div>N. open pull request: {project.issues ? project.issues.length : 0}</div>
        <div>Languages
          <ul>
          {Object.keys(languages).map( (k) => {
            return <li key={k}>{k}: {languages[k]}</li>
          })}
          </ul>
        </div>
        <div>Contributors
          <ul>
          {contributors.map( (contributor) => {
            return <li key={contributor.login}><a href={contributor.html_url}><img src={contributor.avatar_url}/>{contributor.login}</a></li>
          })}
          </ul>
        </div>
      </div>)
  }
}

Project.propTypes = {
  project: React.PropTypes.object.isRequired
};

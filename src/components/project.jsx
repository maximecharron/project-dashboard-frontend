import React from 'react';

export default class Project extends React.Component{
  render(){
    const project = this.props.project;
    const contributors = project.contributors || [];
    const languages = project.languages || {};

    const openIssues = (props => {
      console.log(project)
      if(!project.issues){
        return (<div className="white bg-red">Could not retrieve issues</div>);
      }
      if(project.issues.length === 0){
        return (<div className="white bg-green">0 issues</div>);
      }
      if(project.issues.length === 1){
        return (<div className="white bg-yellow">1 issue</div>);
      }
      if(project.issues.length < 3){
        return (<div className="white bg-yellow">{project.issues.length} issues</div>);
      }
      return (<div className="white bg-red">{project.issues.length} issues</div>);
    })();

    return (<div className="border shadow col-12">
            <div className="white bg-black p2 ">
              {project.name}
            </div>
            <div className="flex p2 ">
              <div className="col-4">s
                { openIssues }
              </div>
            </div>
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

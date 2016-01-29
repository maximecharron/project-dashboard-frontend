import React from 'react';

export default class Project extends React.Component{
  render(){
    const project = this.props.project;
    const contributors = project.contributors || [];
    const languages = project.languages || {};

    var open_issues_count = project["open_issues_count"]
    console.log(project["open_issues_count"]);
    const openIssues = (props => {
      if(!project.open_issues_count){
        return (<div className="p2 rounded white bg-red">Could not retrieve issues</div>);
      }
      if(project.open_issues_count === 0){
        return (<div className="p2 rounded white bg-green">0 issues</div>);
      }
      if(project.open_issues_count === 1){
        return (<div className="p2 rounded white bg-yellow">1 issue</div>);
      }
      if(project.open_issues_count < 3){
        return (<div className="p2 rounded white bg-yellow">{project.open_issues_count} issues</div>);
      }
      return (<div className="p2 rounded white bg-red">{project.open_issues_count} issues</div>);
    })();

    return (<div className="border shadow col-12">
            <div className="white bg-black p2 ">
              {project.name}
            </div>
            <div className="flex p2 flex-jc-space-around">
              <div className="col-4">
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
            return <li key={contributor.login}><a href={contributor.html_url}><img height="64px" width="64px" src={contributor.avatar_url}/>{contributor.login}</a></li>
          })}
          </ul>
        </div>
      </div>)
  }
}

Project.propTypes = {
  project: React.PropTypes.object.isRequired
};

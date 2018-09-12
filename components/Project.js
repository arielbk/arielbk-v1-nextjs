import React from 'react';

export default class extends React.Component {
  render() {
    return (
    <div className="project">
    <img className="project-thumb" src={this.props.image} alt={`${this.props.name} main page screenshot`} />
    <div className="project-text">
    <h3>{this.props.name}</h3>
    
      {this.props.blurb.map((para, i) => (<p key={i}>{para}</p>))}

      {this.props.skills.length &&
      this.props.skills.map(skill => (
        <span className="skill-tab" key={skill}>{skill}</span>
       ))}

      <div className="project-options">
        <a href={this.props.repo} className="project-option">Code</a>
        <a href={this.props.demo} className="project-option">Demo</a>
      </div>
    </div>
    </div>
  )}
}
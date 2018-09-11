import React from 'react';

export default class extends React.Component {
  render() {
    return (
    <div className="project">
    <img className="project-thumb" src={this.props.image} alt={`${this.props.name} main page screenshot`} />
    <div className="project-text">
    <h4>{this.props.name}</h4>
    
      {this.props.blurb.map(para => (<p>{para}</p>))}
      
      {this.props.skills.length &&
      this.props.skills.map(skill => (
        <span className="skill-tab" key={skill}>{skill}</span>
       ))}

      <div className="project-options">
        <a href="#">More</a>
        <a href="#">Code</a>
        <a href="#">Demo</a>
      </div>
    </div>
    </div>
  )}
}
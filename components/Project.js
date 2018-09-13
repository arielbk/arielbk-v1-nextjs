import React from 'react';

export default class extends React.Component {
  render() {
    return (
    <div className="project">
      <h3 className="project__title">{this.props.name}</h3>
      <img className="project__thumb" src={this.props.image} alt={`${this.props.name} main page screenshot`} />
      
      <div className="project__text">
        {this.props.blurb.map((para, i) => (<p key={i}>{para}</p>))}
        {this.props.skills.length &&
        this.props.skills.map(skill => (
          <span className="project__skill" key={skill}>{skill}</span>
        ))}

        <div className="project__actions">
          <a href={this.props.repo} className="project__btn">Code</a>
          <a href={this.props.demo} className="project__btn">Demo</a>
        </div>

      </div>
    </div>
  )}
}
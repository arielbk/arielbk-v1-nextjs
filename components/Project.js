import React from 'react';

export default class extends React.Component {
  render() {
    return (
    <div className="project">
        <h3 className="project__title">{this.props.name}</h3><span className="project__date">— {this.props.date}</span>
      <div className="project__flex">
        <div className="project__skills">
          {this.props.skills.length &&
          this.props.skills.map(skill => (
            <span className="project__skill" key={skill}>{skill}</span>
          ))}
        </div>
        <img className="project__thumb" src={this.props.image} alt={`${this.props.name} main page screenshot`} />
        <div className="project__body">
        <div className="project__text">
          {this.props.blurb.map((para, i) => (<p key={i}>{para}</p>))}
        </div>

        <div className="project__actions">
          <a href={this.props.repo} className="project__btn">Code <i className="fas fa-external-link-alt"></i></a>
          <a href={this.props.demo} className="project__btn">Demo <i className="fas fa-external-link-alt"></i></a>
        </div>
      </div>
      </div>
    </div>
  )}
}
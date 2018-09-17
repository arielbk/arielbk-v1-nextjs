import React from 'react';
import { ifError } from 'assert';

export default class extends React.Component {
  render() {
    return (
    <div className="project">
        <div className="project__skills">
          {this.props.skills.length &&
          this.props.skills.map(skill => {
            let style = { background: `var(--skill--${skill.toLowerCase()})` };
            // I would have used the .includes() method here, but its not supported by IE... this is an alt.
            const dark = (['HTML', 'CSS', 'Bootstrap', 'Sass', 'jQuery', 'Python'].indexOf(skill) >= 0);
            if (dark) style.color = '#fff';
            return (<span className="project__skill" style={style} key={skill}>{skill}</span>)
          })}
        </div>
        <div className="project__markers">
          <div className="project__date">{this.props.date}</div>
          <img className="project__thumb" src={this.props.image} alt={`${this.props.name} main page screenshot`} />
        </div>
        <div className="project__body">
          <div className="project__text">
          <h3 className="project__title">{this.props.name}</h3>
            {this.props.blurb.map((para, i) => (<p key={i}>{para}</p>))}
          </div>

          <div className="project__actions">
            <a href={this.props.repo} className="project__btn">Code <i className="fas fa-external-link-alt"></i></a>
            <a href={this.props.demo} className="project__btn">Demo <i className="fas fa-external-link-alt"></i></a>
          </div>
      </div>
    </div>
  )}
}
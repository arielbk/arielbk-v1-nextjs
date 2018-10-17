import React from 'react';
import styled from 'styled-components';

export default class extends React.Component {
  render() {
    return (
    <StyledProject>
        <Skills>
          {this.props.skills.length &&
          this.props.skills.map(skill => (
            <Skill skill={skill} key={skill}>{skill}</Skill>
          ))}
        </Skills>
        <Markers>
          <Date>{this.props.date}</Date>
          <Thumb src={this.props.image} alt={`${this.props.name} main page screenshot`} />
        </Markers>
        <Body>
          <div>
            <Title>{this.props.name}</Title>
              {this.props.blurb.map((para, i) => (<p key={i}>{para}</p>))}
          </div>

          <Actions>
            <Button href={this.props.repo}>Code <i className="fas fa-external-link-alt"></i></Button>
            <Button href={this.props.demo}>Demo <i className="fas fa-external-link-alt"></i></Button>
          </Actions>
        </Body>
    </StyledProject>
  )}
};

const StyledProject = styled.div`
  margin: 2.4rem 0 0 0;
  padding: 3em 0 0 0;
  border-top: 2px solid var(--lightestgrey);
  position: relative;

  @media screen and (min-width: 1250px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 5.2rem;
  }
`;

const Skills = styled.div`
  top: 6.75rem;
  width: 105px;
  position: absolute;
  z-index: 999;
  padding: .5rem 0 2rem;
  overflow: hidden;
`;

const Skill = styled.span`
  background: var(--skill--${props => props.skill.toLowerCase()});
  color: ${props =>
    ['HTML', 'CSS', 'Bootstrap', 'Sass', 'jQuery', 'Python'].includes(props.skill)
      ? '#fff;'
      : 'var(--black);'}
  padding: .4rem .6rem;
  display: inline-block;
  width: 100%;
  border-radius: 0 25px 25px 0;
  margin: .2rem 0;
  font-size: .9rem;
  box-shadow: 0 15px 35px rgba(37, 37, 80, 0.1),
              0 5px 15px rgba(0,0,0,.06);
  opacity: .9;
  font-weight: bold;

  @media screen and (max-width: 840px) {
    margin-bottom: .05rem;
    padding-top: .2rem;
    padding-bottom: .2rem;
  }
`;

const Markers = styled.div`
  @media screen and (min-width: 1250px) {
    width: 62%;
    margin: 0;
  }
`;

const Date = styled.div`
  display: inline-block;
  width: 100%;
  margin: 0;
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
  color: var(--lightgrey);
`;

const Thumb = styled.img`
  width: 100%;
  margin-bottom: 2.6rem;
  border-radius: 3px;
  box-shadow: 
              0 15px 35px rgba(37, 37, 80, 0.1),
              0 5px 15px rgba(0,0,0,.06);
  filter: grayscale(1);
  opacity: .6;

  @media screen and (min-width: 1250px) {
    margin-bottom: 0;
  }
`;

const Body = styled.div`
  width: 100%;

  @media screen and (min-width: 1250px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    width: 32%;

    align-self: stretch;
  }
`;

const Title = styled.h3`
  font-size: 1.4rem;
  color: var(--darkgrey);
  margin: .2rem 0 1.5rem 0;
  display: inline-block;
`;

const Actions = styled.div`
  margin: 2.6rem 0 3.8rem 0; 
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 1250px) {
    margin: 0;
  }
`;

// maybe make this an actual button?
const Button = styled.a`
  background: var(--darkgrey);
  padding: 1em;
  color: #fff;
  text-decoration: none;
  width: 47%;
  text-align: center;
  border-radius: 3px;

  &:hover {
    background: var(--medgrey);
  }

  .fas {
    padding: 0 .4rem;
    color: var(--lightgrey);
  }
`;
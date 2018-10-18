import React from 'react';
import styled from 'styled-components';

export default class extends React.Component {
  render() {
    return (
      <StyledProject dark={this.props.dark}>
        <Date>{this.props.date}</Date>
        
        <Skills>
          {this.props.skills.length &&
          this.props.skills.map(skill => (
            <Skill skill={skill} key={skill}>{skill}</Skill>
          ))}
        </Skills>
        
        <TopTitle>{this.props.name}</TopTitle>
        <Thumb src={this.props.image} alt={`${this.props.name} main page screenshot`} />
        
        <Body>
          
          <BottomTitle>{this.props.name}</BottomTitle>
          
          <Text>
              {this.props.blurb.map((para, i) => (<p key={i}>{para}</p>))}
          </Text>

          <Actions>
            <Button href={this.props.repo}>Code <i className="fas fa-external-link-alt"></i></Button>
            <Button href={this.props.demo}>Demo <i className="fas fa-external-link-alt"></i></Button>
          </Actions>
        </Body>

    </StyledProject>
  )}
};

const StyledProject = styled.div`
  background: ${props => props.dark ? '#272727;' : '#333;'}
  margin: 0;
  padding: 4rem;
  position: relative;

  @media screen and (min-width: 1250px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Skills = styled.div`
  display: none;

  top: 12rem;
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

const Date = styled.div`
  z-index: 0;
  position: absolute;
  right: 0;
  top: 2rem;
  display: inline-block;
  width: 100%;
  margin: 0;
  margin-bottom: 1.5rem;
  font-size: 4.5rem;
  color: #4D4D5A;
  text-align: right;
`;

const Thumb = styled.img`
  z-index: 2;
  width: 100%;
  margin-bottom: 2.6rem;
  border-radius: 3px;
  box-shadow: 
              0 15px 35px rgba(37, 37, 80, 0.1),
              0 5px 15px rgba(0,0,0,.06);
  // filter: grayscale(1);
  // opacity: .6;

  @media screen and (min-width: 1250px) {
    margin-bottom: 0;
    width: 53%;
  }
`;

const Body = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (min-width: 1250px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    width: 42%;
    margin: 0;

    align-self: stretch;
  }
`;

const Text = styled.div`
  width: 62%;
  margin-right: 1rem;
  color: #e5e5e5;

  @media screen and (min-width: 1250px) {
    width: 100%;
  }
`;

const TopTitle = styled.h3`
  z-index: 2;
  font-size: 2.2rem;
  color: #f8f8f8;
  margin: .2rem 0 3.5rem 0;
  display: inline-block;

  @media screen and (min-width: 1250px) {
    display: none;
  }
`;

const BottomTitle = styled.h3`
  z-index: 2;
  font-size: 2.2rem;
  color: #f8f8f8;
  margin: .2rem 0 1.5rem 0;
  display: inline-block;
  padding-left: 1.5rem;

  @media screen and (max-width: 1250px) {
    display: none;
  }
`;

const Actions = styled.div`
  @media screen and (min-width: 1250px) {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }
`;

// maybe make this an actual button?
const Button = styled.a`
  margin-bottom: 1rem;
  display: inline-block;
  background: var(--darkgrey);
  padding: 1em;
  color: #fff;
  text-decoration: none;
  width: 100%;
  text-align: center;
  border-radius: 3px;

  &:hover {
    background: var(--medgrey);
  }

  .fas {
    padding: 0 .4rem;
    color: var(--lightgrey);
  }

  @media screen and (min-width: 1250px) {
    margin: 1rem 0;
    width: 45%;
  }
`;
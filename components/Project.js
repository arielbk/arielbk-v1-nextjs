import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { colors } from '../components/variables';

export default class extends React.Component {
  render() {
    return (
      <ThemeProvider theme={colors}>
      <StyledProject dark={this.props.dark}>
        <Container>
          <TopTitle><a href={this.props.demo}>{this.props.name}</a></TopTitle>
        <Date>{this.props.date}</Date>
        
        <Skills>
          {this.props.skills.length &&
          this.props.skills.map(skill => (
            <Skill skill={skill} key={skill}>{skill}</Skill>
          ))}
        </Skills>
        
        <Thumb src={this.props.image} alt={`${this.props.name} main page screenshot`} />
        
        <Body>
          
          <BottomTitle><a href={this.props.demo}>{this.props.name}</a></BottomTitle>
          
          <Text>
              {this.props.blurb.map((para, i) => (<p key={i}>{para}</p>))}
          </Text>

          <Actions>
            <Button href={this.props.repo}>Code <i className="fas fa-external-link-alt"></i></Button>
            <Button href={this.props.demo}>Demo <i className="fas fa-external-link-alt"></i></Button>
          </Actions>
        </Body>
        
        </Container>
      </StyledProject>
      </ThemeProvider>
  )}
};

const StyledProject = styled.div`
  background: ${props => props.dark ? '#272727;' : '#333;'}
  margin: 0;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  @media (min-width: 850px) {
    width: calc(100vw - 300px);
  }
`;

const Container = styled.div`
  padding: 4rem;
  max-width: 1200px;
  position: relative;

  @media screen and (min-width: 1250px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 500px) {
    padding: 4rem 1rem;
  }
`;

const Skills = styled.div`
  top: 12rem;
  width: 105px;
  position: absolute;
  z-index: 999;
  padding: .5rem 0 2rem;
  overflow: hidden;

  @media screen and (min-width: 1250px) {
    top: 5rem;
  }
`;

const Skill = styled.span`
  background: ${props => props.theme.skills[props.skill.toLowerCase()]};
  color: ${props =>
    ['HTML', 'CSS', 'Bootstrap', 'Sass', 'jQuery', 'Python'].includes(props.skill)
      ? '#fff;'
      : props.theme.black};
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
  right: 2rem;
  top: 2rem;
  display: inline-block;
  width: 100%;
  margin: 0;
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
  color: #656565;
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
  filter: grayscale(1);

  @media screen and (min-width: 1250px) {
    margin-bottom: 0;
    width: 53%;
  }
`;

const ThumbOverlay = styled.div`
  z-index: 100;
  width: 100%;
  height: 500px;
  position: relative;
  background: #000;
`;

const Body = styled.div`
  z-index: 2;
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (min-width: 1250px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    align-self: stretch;
    width: 42%;
    margin: 0;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  width: 62%;
  margin-right: 1rem;
  color: ${props => props.theme.lightgrey};

  @media screen and (min-width: 1250px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const TopTitle = styled.h3`
  z-index: 2;
  font-size: 2rem;
  font-weight: 200;
  color: #fff;
  margin: .2rem 0 3.5rem 0;
  display: inline-block;

  a {
    color: #fff;

    :hover {
      color: ${props => props.theme.brightblue};
    }
  }

  @media screen and (min-width: 1250px) {
    display: none;
  }
`;

const BottomTitle = styled.h3`z
  z-index: 2;
  font-size: 2rem;
  font-weight: 200;
  color: #fff;
  margin: 0rem 0 1.5rem 0;
  display: inline-block;

  a {
    color: #fff;

    :hover {
      color: ${props => props.theme.brightblue};
    }
  }

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
  background: ${props => props.theme.darkgrey};
  padding: 1em;
  color: ${props => props.theme.lightgrey};
  text-decoration: none;
  width: 100%;
  text-align: center;
  border-radius: 3px;

  &:hover {
    background: ${props => props.theme.brightblue};
    color: #fff;
  }

  .fas {
    padding: 0 .4rem;
    color: ${props => props.theme.lightgrey};
  }

  @media screen and (min-width: 1250px) {
    margin: 1rem 0 0;
    width: 45%;
  }
`;
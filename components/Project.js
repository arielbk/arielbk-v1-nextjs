import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import variables from '../components/variables';

export default class extends React.Component {
  render() {
    return (
      <ThemeProvider theme={variables}>
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
        <ThumbContainer>
          <Thumb src={this.props.image} alt={`${this.props.name} main page screenshot`} />
          <a href={this.props.demo}>
            <ThumbOverlay>
              <i className="fas fa-external-link-alt" />
            </ThumbOverlay>
          </a>
        </ThumbContainer>
        
        <Body>
          
          <BottomTitle><a href={this.props.demo}>{this.props.name}</a></BottomTitle>
          
          <Text>
              {this.props.blurb.map((para, i) => (<p key={i}>{para}</p>))}
          </Text>

          <Actions>
            <Button href={this.props.repo}>Code <i className="fas fa-external-link-alt" /></Button>
            <Button href={this.props.demo}>Demo <i className="fas fa-external-link-alt" /></Button>
          </Actions>
        </Body>
        
        </Container>
      </StyledProject>
      </ThemeProvider>
  )}
};

const StyledProject = styled.div`
  background: ${props => props.dark ? '#272727' : '#333'};
  margin: 0;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  @media ${props => props.theme.media.md} {
    width: calc(100vw - 300px);
  }
`;

const Container = styled.div`
  padding: 4rem;
  max-width: 1200px;
  position: relative;

  @media ${props => props.theme.media.lg} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media ${props => props.theme.media.md} {
    padding: 4rem 2rem 3rem;
  }

  @media ${props => props.theme.media.sm} {
    padding: 4rem 1rem 1rem;
  }
`;

const Skills = styled.div`
  top: 12rem;
  width: 105px;
  position: absolute;
  z-index: 10;
  padding: .5rem 0 2rem;
  overflow: hidden;

  @media ${props => props.theme.media.lg} {
    top: 5rem;
  }

  @media ${props => props.theme.media.sm} {
    top: 8rem;
  }
`;

const Skill = styled.span`
  background: ${props => props.theme.colors.skills[props.skill.toLowerCase()]};
  color: ${props =>
    ['HTML', 'CSS', 'Bootstrap', 'Sass', 'jQuery', 'Python'].includes(props.skill)
      ? '#fff;'
      : props.theme.colors.black};
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

const ThumbContainer = styled.div`
  width: 100%;
  margin-bottom: 2.6rem;
  position: relative;

  @media ${props => props.theme.media.lg} {
    margin-bottom: 0;
    width: 53%;
  }

  @media ${props => props.theme.media.sm} {
    margin-bottom: 1.5rem;
  }
`;

const Thumb = styled.img`
  z-index: 2;
  width: 100%;
  border-radius: 3px;
  box-shadow: 
              0 15px 35px rgba(37, 37, 80, 0.1),
              0 5px 15px rgba(0,0,0,.06);
  filter: grayscale(1);
`;

const ThumbOverlay = styled.div`
  ${props => props.theme.transition('opacity')};
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6rem;
  color: #fff;
  opacity: 0;

  a & {
    :hover {
      opacity: 1;
    }
  }
`;

const Body = styled.div`
  z-index: 2;
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${props => props.theme.media.lg} {
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    align-self: stretch;
    width: 42%;
    margin: 0;
  }

  @media ${props => props.theme.media.sm} {
    flex-direction: column;
  }
`;

const Text = styled.div`
  width: 62%;
  margin-right: 1rem;
  color: ${props => props.theme.colors.lightgrey};

  @media ${props => props.theme.media.lg} {
    width: 100%;
  }

  @media ${props => props.theme.media.sm} {
    width: 100%;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

const Title = styled.h3`
  z-index: 2;
  font-size: 2rem;
  font-weight: 200;
  color: #fff;
  margin: .2rem 0 3.5rem 0;
  display: inline-block;

  a {
    ${props => props.theme.transition('color')};
    color: #fff;

    :hover {
      color: ${props => props.theme.colors.brightblue};
    }
  }
`;

const TopTitle = styled(Title)`
  @media ${props => props.theme.media.lg} {
    display: none;
  }

  @media ${props => props.theme.media.sm} {
    margin-bottom: 1rem;
  }
`;

const BottomTitle = styled(Title)`
  @media ${props => props.theme.media.md} {
    display: none;
  }
`;

const Actions = styled.div`
  @media ${props => props.theme.media.lg} {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }
`;

// maybe make this an actual button?
const Button = styled.a`
  margin-bottom: 1rem;
  display: inline-block;
  background: ${props => props.theme.colors.darkgrey};
  padding: 1em;
  color: ${props => props.theme.colors.lightgrey};
  text-decoration: none;
  width: 100%;
  text-align: center;
  border-radius: 3px;
  ${props => props.theme.transition('background')};

  &:hover {
    background: ${props => props.theme.colors.brightblue};
    color: #fff;
  }

  .fas {
    padding: 0 .4rem;
    color: ${props => props.theme.colors.lightgrey};
  }

  @media ${props => props.theme.media.lg} {
    margin: 1rem 0 0;
    width: 45%;
  }
`;
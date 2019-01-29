import PropTypes from 'prop-types';
import {
  StyledProject,
  Container,
  TopTitle,
  Date, Skills,
  Skill,
  ThumbContainer,
  Thumb,
  ThumbOverlay,
  Body,
  BottomTitle,
  Text,
  Actions,
  Button,
} from './Project.styled';

const Project = (props) => {
  const {
    dark, demo, name, date, skills, image, blurb, repo,
  } = props;
  return (
    <StyledProject dark={dark}>
      <Container>
        <TopTitle>
          <a href={demo} target="_blank" rel="noopener noreferrer" title={`${name} demo`}>
            {name}
          </a>
        </TopTitle>
        <Date>{date}</Date>

        <Skills>
          {skills.length
          && skills.map(skill => (
            <Skill skill={skill} key={skill}>{skill}</Skill>
          ))}
        </Skills>
        <ThumbContainer>
          <Thumb src={image} alt={`${name} main page screenshot`} />
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <ThumbOverlay>
              <i className="fas fa-external-link-alt" />
            </ThumbOverlay>
          </a>
        </ThumbContainer>

        <Body>
          <BottomTitle>
            <a href={demo} target="_blank" rel="noopener noreferrer" title={`${name} demo`}>
              {name}
            </a>
          </BottomTitle>

          <Text>
            {/* eslint-disable-next-line react/no-array-index-key */}
            {blurb.map((para, i) => (<p key={i}>{para}</p>))}
          </Text>

          <Actions>
            <Button href={repo} target="_blank">
              Code
              {' '}
              <i className="fas fa-external-link-alt" />
            </Button>
            <Button href={demo} target="_blank">
              Demo
              {' '}
              <i className="fas fa-external-link-alt" />
            </Button>
          </Actions>
        </Body>
      </Container>
    </StyledProject>
  );
};

Project.propTypes = {
  dark: PropTypes.bool.isRequired,

  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  blurb: PropTypes.arrayOf(PropTypes.string).isRequired,
  skills: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.string,
  repo: PropTypes.string,
  demo: PropTypes.string.isRequired,
};

Project.defaultProps = {
  image: 'static/images/blank.png',
  skills: [
    'Other',
  ],
  date: 'In Progress',
  repo: 'https://github.com/arielbk',
};

export default Project;

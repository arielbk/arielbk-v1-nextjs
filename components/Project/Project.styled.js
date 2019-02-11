import styled from 'styled-components';

export const StyledProject = styled.div`
  background: ${props => (props.dark ? '#272727' : '#333')};
  margin: 0;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  @media ${props => props.theme.media.xlg} {
    width: calc(100vw - 300px);
  }
`;

export const Container = styled.div`
  padding: 4rem;
  max-width: 1200px;
  position: relative;

  @media ${props => props.theme.media.xlg} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media ${props => props.theme.media.md} {
    padding: 4rem 2rem 3rem;
  }

  @media ${props => props.theme.media.sm} {
    padding: 2rem 1rem 1rem;
  }
`;

export const Skills = styled.div`
  top: 12rem;
  width: 105px;
  position: absolute;
  z-index: 10;
  padding: .5rem 0 2rem;
  overflow: hidden;

  @media ${props => props.theme.media.xlg} {
    top: 6rem;
  }

  @media ${props => props.theme.media.sm} {
    top: 8.2rem;
  }
`;

export const Skill = styled.span`
  background: #fff;
  ${props => props.theme && `background: ${props.theme.colors.skills[props.skill.toLowerCase()]};`}
  color: ${props => (['HTML', 'CSS', 'Bootstrap', 'Sass', 'jQuery', 'Python'].includes(props.skill)
    ? '#fff;'
    : props.theme.colors.black)};
  padding: .5rem .6rem;
  display: inline-block;
  width: 100%;
  border-radius: 0 25px 25px 0;
  margin: .2rem 0;
  font-size: .9rem;
  box-shadow: 
              0 3px 20px rgba(37, 37, 60, .1),
              0 -4px 5px rgba(0,0,0,0.3);
  position: relative;
  left: -1px;

  @media ${props => props.theme.media.md} {
    margin-bottom: .05rem;
    padding: .4rem .6rem;
  }
`;

export const Date = styled.div`
  z-index: 0;
  position: absolute;
  right: 2rem;
  top: 4.5rem;
  display: inline-block;
  width: 100%;
  margin: 0;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  color: rgba(202, 202, 202, 0.2);
  text-align: right;

  @media ${props => props.theme.media.sm} {
    font-size: 1rem;
    right: 1rem;
    top: 1.5rem;
  }
`;

export const ThumbContainer = styled.div`
  width: 100%;
  margin-bottom: 2.6rem;
  position: relative;

  @media ${props => props.theme.media.xlg} {
    margin-bottom: 0;
    width: 53%;
  }

  @media ${props => props.theme.media.sm} {
    margin-bottom: 2rem;
  }
`;

export const Thumb = styled.img`
  z-index: 2;
  width: 100%;
  border-radius: 3px;
  box-shadow: 
              0 15px 35px rgba(37, 37, 80, 0.1),
              0 5px 15px rgba(0,0,0,.06);
  filter: grayscale(1);

  &:hover {
    filter: grayscale(0);
  }
`;

export const ThumbOverlay = styled.div`
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

export const Body = styled.div`
  z-index: 2;
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${props => props.theme.media.xlg} {
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

export const Text = styled.div`
  width: 73%;
  margin-right: 1.5rem;
  color: ${props => props.theme.colors.lightgrey};
  font-weight: 200;

  @media ${props => props.theme.media.xlg} {
    width: 100%;
  }

  @media ${props => props.theme.media.md} {
    p {
      line-height: 1.5;
      margin-bottom: 1.5rem;
    }
  }

  @media ${props => props.theme.media.sm} {
    width: 100%;
    margin: 0 auto 1rem;
  }
`;

export const Title = styled.h3`
  z-index: 2;
  font-size: 2rem;
  font-weight: 200;
  color: #fff;
  display: inline-block;

  a {
    ${props => props.theme.transition('color')};
    color: #fff;

    :hover {
      color: ${props => props.theme.colors.brightblue};
    }
  }
`;

export const TopTitle = styled(Title)`
  margin: .2rem 0 3.5rem 0;

  @media ${props => props.theme.media.xlg} {
    display: none;
  }

  @media ${props => props.theme.media.sm} {
    margin-bottom: 2rem;
  }
`;

export const BottomTitle = styled(Title)`
  margin: 0 0 1.5rem 0;
  display: none;
    
  @media ${props => props.theme.media.xlg} {
    display: block;
  }
`;

export const Actions = styled.div`
  
  @media ${props => props.theme.media.sm} {
    width: 100%;
  }

  @media ${props => props.theme.media.xlg} {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }
`;

// maybe make this an actual button?
export const Button = styled.a`
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

  @media ${props => props.theme.media.xlg} {
    margin: 1rem 0 0;
    width: 45%;
  }
`;

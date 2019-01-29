import styled from 'styled-components';

export const Portfolio = styled.div`
  padding: 4.2rem 0 0;
  position: relative;

  header, footer {
    margin: 0 4rem;
  }

  footer {
    height: 100vh;
    // so old phone browsers don't give it way too much height...
    max-height: 1000px;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      text-align: center;
    }
  }

  @media ${props => props.theme.media.md} {
    padding: 6rem 0 2rem;
  }

  @media ${props => props.theme.media.sm} {
    header, footer {
      margin: 0 1rem;
    }
  }
`;

export const Arrow = styled.svg`
  position: absolute;
  left: 0;
  top: 2.6em;

  @media ${props => props.theme.media.md} {
    transform: rotate(90deg);
    top: -24px;
    left: 50%;
    margin-left: -22px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  color: ${props => props.theme.colors.almostwhite};
  font-weight: 200;
  font-size: 2.2rem;
  text-transform: uppercase;
`;

export const Lead = styled.p`
  color: ${props => props.theme.colors.medgrey};
  margin: .5rem 0 4.7rem 0;
`;

export const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 230px;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 101;

  a {
    ${props => props.theme.transition('background')};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 0.5rem;
    background: rgba(10,10,10,0.5);
    font-size: 0.6rem;
    text-align: center;
    width: 70px;
    height: 70px;
    box-shadow:
      0 15px 35px rgba(37,37,47,0.1),
      0 5px 15px rgba(0,0,0,.06);

    i {
      width: 100%;
      font-size: 2.2rem;
      margin-bottom: 0.2rem;
    }

    :hover {
      background: ${props => props.theme.colors.brightblue};
      color: #fff;
    }
  }

  @media ${props => props.theme.media.md} {
    display: none;
  }
`;

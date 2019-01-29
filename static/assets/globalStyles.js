import styled, { createGlobalStyle } from 'styled-components';
import variables from './variables';

export const Content = styled.div`
  display: flex;

  @media ${variables.media.md} {
    display: block;
  }
`;

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  html {
    background: ${variables.colors.lightestgrey};
  }

  body {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    color: ${variables.colors.black};
    margin: 0;
    padding: 0;
    background: #333;
    background-image: linear-gradient(120deg, #333, #282828);
  }

  h3, h4 {
    color: ${variables.colors.medgrey};
  }

  p {
    margin: 0 0 .6rem 0;
    line-height: 1.75;
  }

  a {
    ${variables.transition('color')};
    color: ${variables.colors.brightblue};
    text-decoration: none;

    &:hover {
      color: ${variables.colors.lightblue};
    }
  }
`;

export default GlobalStyle;

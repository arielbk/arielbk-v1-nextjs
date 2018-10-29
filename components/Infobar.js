import styled, { ThemeProvider } from 'styled-components';
import variables from '../components/variables';

export default () => (
  <ThemeProvider theme={variables}>
  <Infobar>
    <Container>
    {/* HEADER SECTION */}
    <header>
      <Title>ariel <br />buchwald <br />kearney</Title>
      <Caption>web developer</Caption>

      <Biophoto src="static/images/arielbk.jpg" />
    </header>

    {/* <!-- BIO SECTION --> */}
    <Biotext>
      <p>Currently focused on frontend development and the React ecosystem, I am always learning.</p>
    </Biotext>
    
    {/* <!-- CONTACT SECTION --> */}
    <Contact>
      <a href="mailto:buchwald.kearney@gmail.com">
        <span>
          <i className="far fa-envelope" />
          Email
        </span>
      </a>
      <a href="https://github.com/arielbk">
        <span>
          <i className="fab fa-github" />
          GitHub
        </span>
      </a>
      <a href="https://codepen.io/arielbk">
        <span>
          <i className="fab fa-codepen" />
          Codepen
        </span>
      </a>
    </Contact>
    </Container>
  </Infobar>
  </ThemeProvider>
)

const Infobar = styled.div`
  flex: none;
  flex-basis: 300px;

  width: 300px;
  background: #515151;
  color: ${props => props.theme.colors.lightgrey};
  transition: .27s;

  @media screen and (max-width: 840px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 380px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  width: 300px;
  padding: 1.7em;
  padding-top: 2.2rem;
  padding-bottom: 0;
  transition: .27s;

  @media screen and (max-width: 840px) {
    display: block;
    width: 300px;
    height: auto;
    padding-bottom: 3rem;
    margin: 0 auto;
    position: relative;
    overflow-y: visible;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
`;

const Caption = styled.h3`
  margin-top: .5rem;
  margin-bottom: 3rem;
  font-weight: 200;

  @media screen and (max-width: 840px) {
    text-align: center;
  }
`;

const Biophoto = styled.img`
  display: block;
  width: 80%;
  margin: 0 auto 3.5rem;
  border-radius: 3px;

  @media screen and (max-width: 840px) {
    height: 230px;
    width: 230px;
    margin: 0 auto;
  }
`;

const Biotext = styled.div`
  margin: 2rem 0 0 0;
  p {
    line-height: 1.5;
    font-size: 1rem;
  }

  @media screen and (max-width: 840px) {
    text-align: center;
  }
`;

const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 3rem 0 2rem 0;
  position: relative;

  a {
    ${props => props.theme.transition('background')};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 0.5rem;
    background: ${props => props.theme.colors.black};
    font-size: 0.6rem;
    text-align: center;
    width: 70px;
    height: 70px;

    i {
      font-size: 2rem;
      margin-bottom: 0.2rem;
    }

    :hover {
      background: ${props => props.theme.colors.brightblue};
      color: #fff;
    }
  }
`;


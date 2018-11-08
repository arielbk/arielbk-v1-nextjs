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
      <p>
        I'm a web developer living in Zagreb.
        I code every day with music pumping in my headphones.
      </p>
      <p>
        Right now I'm immersed in JavaScript and React.
      </p>
    </Biotext>
    
    {/* <!-- CONTACT SECTION --> */}
    <Contact>
        <div>
          <a href="mailto:buchwald.kearney@gmail.com">
            <span>
              <i className="far fa-envelope" />
              <h4>Email</h4>
            </span>
          </a>
        </div>
        <div>
          <a href="https://github.com/arielbk">
            <span>
              <i className="fab fa-github" />
              <h4>GitHub</h4>
            </span>
          </a>
        </div>
        <div>
          <a href="https://codepen.io/arielbk">
            <span>
              <i className="fab fa-codepen" />
              <h4>Codepen</h4>
            </span>
          </a>
        </div>
    </Contact>
    </Container>
  </Infobar>
  </ThemeProvider>
)

const Infobar = styled.div`
  flex: none;
  flex-basis: 270px;

  width: 300px;
  background: #505152;
  color: ${props => props.theme.colors.lightgrey};

  @media ${props => props.theme.media.md} {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 270px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  padding: 1.7em;
  padding-top: 2.2rem;
  padding-bottom: 0;
  transition: .27s;

  @media ${props => props.theme.media.md} {
    display: block;
    width: 360px;
    height: auto;
    padding-bottom: 3rem;
    margin: 0 auto;
    position: relative;
    overflow-y: visible;
  }

  @media ${props => props.theme.media.sm} {
    max-width: 360px;
    width: auto;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  line-height: 1.25;

  @media ${props => props.theme.media.md} {
    // margin-left: 4.5rem;
    text-align: center;
  }
`;

const Caption = styled.h3`
  margin-top: .5rem;
  margin-bottom: 2.5rem;
  font-weight: 200;
  
  @media ${props => props.theme.media.md} {
    text-align: center;
  }
`;

const Biophoto = styled.img`
  display: block;
  width: 90%;
  margin: 0 auto 2rem;
  border-radius: 3px;

  @media ${props => props.theme.media.md} {
    width: 67%;
    margin: 0 auto;
  }
`;

const Biotext = styled.div`
  margin: 2rem 0 0 0;
  p {
    font-weight: 200;
    line-height: 1.75;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  @media ${props => props.theme.media.md} {
    text-align: center;
  }
`;

const Contact = styled.div`
  margin: 2.5rem 0 2rem;
  position: relative;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 50%;
    font-size: 0.6rem;
    text-align: center;
    margin-bottom: 1rem;

    @media ${props => props.theme.media.md} {
      margin: 0 0 1rem 6rem;
    }
    @media ${props => props.theme.media.sm} {
      margin: 0 0 1rem 4rem;
    }
    
    :hover {
      h4 {
        color: #fff;
      }
    }
    
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      
      h4 {
        margin: 0 auto;
        font-size: 1rem;
        ${props => props.theme.transition('color')};
      }
    }

    i {
      font-size: 1.5rem;
      padding: 0.4rem;
      margin-right: 1rem;
      color: ${props => props.theme.colors.black};
      background: #fff;
      ${props => props.theme.transition('background')};
      display: inline-block;
      border-radius: 50%;
    }
  }
`;

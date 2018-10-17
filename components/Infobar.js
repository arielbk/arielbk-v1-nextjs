import styled from 'styled-components';

export default () => (
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
      <p>I love to code websites and apps, currently focusing on React world. Constantly learning.</p>
    </Biotext>
    
    {/* <!-- CONTACT SECTION goes here... --> */}
    <Contact>
      <a href="mailto:buchwald.kearney@gmail.com">Email</a>
      <a href="https://github.com/arielbk">GitHub</a>
      <a href="https://codepen.io/arielbk">Codepen</a>
    </Contact>
    </Container>
  </Infobar>
)

const Infobar = styled.div`
  flex: none;
  flex-basis: 300px;

  width: 300px;
  background: var(--darkgrey);
  color: var(--lightgrey);
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
  color: var(--lightestgrey);
  text-decoration: none;
`;

const Caption = styled.h3`
  margin-top: .5rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 840px) {
    text-align: center;
  }
`;

const Biophoto = styled.img`
  display: block;
  width: 100%;
  margin: 0;
  border-radius: 3px;

  @media screen and (max-width: 840px) {
    height: 230px;
    width: 230px;
    margin: 0 auto;
  }
`;

const Biotext = styled.div`
  margin: 2rem 0 0 0;
  color: var(--lightgrey);
  p {
    line-height: 1.5;
  }

  @media screen and (max-width: 840px) {
    text-align: center;
  }
`;

const Contact = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: 3rem 0 0 0;
  position: relative;

  a {
    color: var(--lightgrey);
  }
  a:hover {
    color: var(--lightestgrey);
  }
`;


import styled from 'styled-components';

export const Infobar = styled.div`
  flex: none;
  flex-basis: 270px;

  width: 300px;
  background: #505152;
  color: ${({ theme }) => theme.colors.lightgrey};

  @media ${({ theme }) => theme.media.md} {
    width: 100%;
  }
`;

export const Container = styled.div`
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

  @media ${({ theme }) => theme.media.md} {
    display: block;
    width: 360px;
    height: auto;
    padding-bottom: 3rem;
    margin: 0 auto;
    position: relative;
    overflow-y: visible;
  }

  @media ${({ theme }) => theme.media.sm} {
    max-width: 360px;
    width: auto;
  }
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  line-height: 1.25;

  @media ${({ theme }) => theme.media.md} {
    // margin-left: 4.5rem;
    text-align: center;
  }
`;

export const Caption = styled.h3`
  margin-top: .5rem;
  margin-bottom: 2.5rem;
  font-weight: 200;
  
  @media ${({ theme }) => theme.media.md} {
    text-align: center;
  }
`;

export const Biophoto = styled.img`
  display: block;
  width: 90%;
  margin: 0 auto 2rem;
  border-radius: 3px;

  @media ${({ theme }) => theme.media.md} {
    width: 67%;
    margin: 0 auto;
  }
`;

export const Biotext = styled.div`
  margin: 2rem 0 0 0;
  p {
    font-weight: 200;
    line-height: 1.75;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  @media ${({ theme }) => theme.media.md} {
    text-align: center;
  }
`;

export const Contact = styled.div`
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

    @media ${({ theme }) => theme.media.md} {
      margin: 0 0 1rem 6rem;
    }
    @media ${({ theme }) => theme.media.sm} {
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
        ${({ theme }) => theme.transition('color')};
      }
    }

    i {
      font-size: 1.5rem;
      padding: 0.4rem;
      margin-right: 1rem;
      color: ${({ theme }) => theme.colors.black};
      background: #fff;
      ${({ theme }) => theme.transition('background')};
      display: inline-block;
      border-radius: 50%;
    }
  }
`;

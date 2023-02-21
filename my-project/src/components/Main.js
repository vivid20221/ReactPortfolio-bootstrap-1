import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Introduction = styled.div`
  margin-bottom: 20px;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const Link = styled.a`
  margin: 0 10px;
`;

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const PortfolioCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Main = () => {
  return (
    <MainContainer>
      <Introduction>
        <h1>Hi, I'm Julian!</h1>
        <p>Im a Full stack web developer</p>
      </Introduction>
      <LinksContainer>
        <Link href="https://www.linkedin.com/in/julian-jauregui-36a030249/">LinkedIn</Link>
        <Link href="https://github.com/vivid20221">GitHub</Link>
        <Link href="[Link to your personal website]">Website</Link>
      </LinksContainer>
      <h2>My Projects</h2>
      <PortfolioContainer>
        <PortfolioCard>
          <h3>Project 1</h3>
          <Link href="https://github.com/JonSno29/Number_1_Coders">Codio</Link>
        </PortfolioCard>
        <PortfolioCard>
          <h3>Project 2</h3>
          <p>[Brief description of project]</p>
        </PortfolioCard>
        <PortfolioCard>
          <h3>Project 3</h3>
          <Link href="https://github.com/MarcusC811/Aniverse">Aniverse</Link>
        </PortfolioCard>
      </PortfolioContainer>
    </MainContainer>
  );
};

export default Main;

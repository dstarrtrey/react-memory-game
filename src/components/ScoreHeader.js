import React from 'react';
import styled from 'styled-components';

const Header= styled.header`
  background-color: ${props => props.theme.red};
  margin: 0;
  padding: 0;
  color: ${props => props.theme.white};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  border-bottom: 4px solid ${props => props.theme.black};
`;

const Title = styled.h1`
  font-size: 5rem;
  transform: skew(-20deg);
  text-align: center;
`;

const Message = styled.span`
  font-size: 3rem;
  text-align: center;
  color: ${props => props.theme.offWhite};
  border-left: 2px solid ${props => props.theme.grey};
  border-right: 2px solid ${props => props.theme.grey};
`;

const Score = styled.span`
  text-align: right;
  font-size: 2rem;
  padding-right: 10%
`;
const ScoreHeader = props => {
  const { children, score, topScore } = props;
  return (
    <Header>
      <Title>Clicky Game</Title>
      <Message>
        {children}
      </Message>
      <Score>
        Score: {score} | Top Score: {topScore}
      </Score>
    </Header>
  );
};

export default ScoreHeader;
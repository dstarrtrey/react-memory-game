import React from 'react';
import styled from 'styled-components';

const StyledRules = styled.div`
  margin: 0;
  padding: 1rem;
  background-color: ${props => props.theme.grey};
  color: ${props => props.theme.offWhite}
  text-align: center;
  border-bottom: 3px solid ${props => props.theme.black};
  h1 {
    font-size: 4rem;
  }
  p {
    font-size: 3rem;
  }
`;

const Rules = () => {
  return (
    <StyledRules>
      <h1>Clicky Game!</h1>
      <p>Click on an image to earn points, but don't click on any more than once!</p>
    </StyledRules>
  );
};

export default Rules;
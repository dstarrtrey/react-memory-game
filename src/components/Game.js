import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const StyledGame = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 1rem;
  align-items: center;
  max-width: ${props => props.theme.maxWidth};
  margin: 5rem auto;
`;

const Game = props => {
  return (
    <StyledGame>
      {props.images.map(image => (
        <Image
          key={image.id}
          image={image}
          handleClick={props.handleClick}
        />
      ))}
    </StyledGame>
  );
};

export default Game;
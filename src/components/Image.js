import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  box-shadow: ${props => props.theme.bs};
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: white;
  margin: 2rem;
  height: 100%;
  border: 4px solid ${props => props.theme.lightGrey};
  border-radius: 3%;
  transform: scale(1);
  transition: .15s all ease-in-out;
  &:hover {
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    transform: scale(1.03);
  }
`;

const StyledImg = styled.img`
  max-width: 100%;
  max-height: 30rem;
`;
const Image = props => {
  const { name, id, image } = props.image;
  return (
    <StyledBox onClick={() => props.handleClick(id)}>
      <StyledImg
        alt={name}
        img-id={id}
        src={image}
      />
    </StyledBox>
  );
};

export default Image;

import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div``;

const StyledInput = styled.input`
  background-color: pink;
  border: none;
  padding: 10px;
  border-bottom: 3px solid white;
  font-size: 2em;
  color: white;
  outline: none;
`;

const Terms= () => {
  return (
    <StyledContainer>
      <p>This is step 1</p>
      <StyledInput
        type="text"
      ></StyledInput>
    </StyledContainer>
  );
};
  
  export default Terms;
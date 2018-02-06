import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid #333;
  display: block;
  font-size: 30px;
  height: 50px;
  width: 100%;

  &::placeholder {
    color: #ababab;
  }

  @media screen and (min-width: 500px) {
    width: 500px;
  }
`;

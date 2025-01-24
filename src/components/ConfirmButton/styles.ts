import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  background: ${(props) => props.theme["yellow"]};
  border-radius: 6px;
  border: none;
  color: ${(props) => props.theme["white"]};
  font-size: 0.875rem;
  font-weight: bold;
  transition: background 0.2s;
  padding: 1rem;

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  padding: 0.75rem;
  color: ${(props) => props.theme["base-label"]};
  font-size: 0.75rem;
  font-style: italic;
  display: flex;
  align-items: center;

  input {
    background: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-text"]};
    border: none;
    width: 100%;

    &:focus {
      box-shadow: none;
    }

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }

  &[data-state="focused"] {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-dark"]};
  }
`;

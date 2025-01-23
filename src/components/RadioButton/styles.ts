import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme["base-button"]};
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 1rem;
  transition: background 0.5s;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }
  input {
    appearance: none;
  }

  &[data-state="true"] {
    background: ${(props) => props.theme["purple-light"]};
    border: 1px solid ${(props) => props.theme["purple"]};
  }
`;

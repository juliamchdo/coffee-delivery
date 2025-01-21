import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-title"]};
  border-radius: 6px;
  padding: 0.5rem;
  font-size: 1rem;
`;

export const Button = styled.button`
  color: ${(props) => props.theme["purple"]};
  background: ${(props) => props.theme["base-button"]};
  border: none;
  &:hover {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;

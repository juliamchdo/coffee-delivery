import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  margin-top: 9.375rem;
`;

export const Title = styled.h2`
  font-family: "Baloo 2", sans-serif;
  font-size: 2rem;
  line-height: 130%;
  font-weight: 800;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const CoffeeGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 3.375rem;
`;

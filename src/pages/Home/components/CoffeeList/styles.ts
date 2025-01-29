import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 9.375rem;
`;

export const Title = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    line-height: 130%;
    font-weight: 800;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const CoffeeGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 40px;
  grid-column-gap: 32px;
  margin-top: 3.375rem;
  /* display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
   */
`;

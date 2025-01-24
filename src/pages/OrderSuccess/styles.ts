import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 7rem;
`;

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SuccessHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme["yellow-dark"]};
    line-height: 1.3;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const SuccessInfo = styled.div`
  border: 1px solid;
  border-radius: 6px 36px;
  margin-top: 2rem;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${(props) =>
    `linear-gradient(to bottom right, ${props.theme.yellow}, ${props.theme.purple})`};
`;

export const InfoContent = styled.div`
  background: ${(props) => props.theme.background};
  border-radius: 6px 36px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
    color: ${(props) => props.theme["base-text"]};

    svg {
      color: ${(props) => props.theme.white};
      border-radius: 50%;
      width: 40px;
      height: 40px;
      padding: 0.5rem;
    }

    div {
      display: flex;
      flex-direction: column;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

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

export const Card = styled.div`
  width: 15.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: calc(0px - 1.5rem - 15px);
`;

export const TagGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

export const Tag = styled.span`
  border-radius: 10px;
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  text-align: center;
  padding: 0.4rem;
  font-size: 0.625rem;
  font-weight: bold;
  width: fit-content;
  margin-top: 0.75rem;
`;

export const Name = styled.h2`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props) => props.theme["base-subtitle"]};
  margin: 1.25rem 0 0.5rem 0;
`;

export const Description = styled.p`
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme["base-label"]};
  text-align: center;
`;

export const PriceGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.438rem;
  margin-top: 2.063rem;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
`;

export const Currency = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme["base-text"]};
`;
export const Value = styled.span`
  font-size: 1.5rem;
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  color: ${(props) => props.theme["base-text"]};
`;

export const ActionsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const Cart = styled.button`
  background: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme["white"]};
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
  line-height: 0;
  transition: all 0.2s;

  &:hover {
    background: ${(props) => props.theme["purple"]};
  }
`;

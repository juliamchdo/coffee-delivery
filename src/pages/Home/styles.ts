import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 8rem;
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-size: 3rem;
  line-height: 130%;
  font-weight: 800;
  color: ${(props) => props.theme["base-title"]};
`;

export const Subtitle = styled.span`
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme["base-subtitle"]};
  margin-top: 1rem;
`;

export const ItensGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.25rem 2.5rem;
  grid-template-areas:
    ". ."
    ". .";
  justify-items: start;
  margin-top: 4.125rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

const ITEM_COLOR = {
  orange: "yellow-dark",
  yellow: "yellow",
  black: "base-text",
  purple: "purple",
} as const;

interface ItemIconProps {
  itemColor: keyof typeof ITEM_COLOR;
}

export const ItemIcon = styled.span<ItemIconProps>`
  border-radius: 100%;
  padding: 0.5rem;
  line-height: 0;
  color: ${(props) => props.theme["white"]};
  background: ${(props) => props.theme[ITEM_COLOR[props.itemColor]]};
`;

export const ItemText = styled.span`
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme["base-text"]};
`;

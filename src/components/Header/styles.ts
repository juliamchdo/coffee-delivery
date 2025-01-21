import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BadgesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

export const BaseBadge = styled.div`
  border-radius: 6px;
  padding: 0.5rem;
  position: relative;
`;

export const LocationBadge = styled(BaseBadge)`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
`;

export const CartBadge = styled(BaseBadge)`
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
`;

export const ItemsCounter = styled.div`
  background: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme["white"]};
  border-radius: 50%;
  text-align: center;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.5;

  width: 20px;
  height: 20px;
  position: absolute;
  top: -8px;
  right: -8px;
`;

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

export const BaseBadge = styled.span`
  border-radius: 6px;
  padding: 0.5rem;
`;

export const LocationBadge = styled(BaseBadge)`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.theme["purple-100"]};
  color: ${(props) => props.theme["purple-300"]};
`;

export const CartBadge = styled(BaseBadge)`
  background: ${(props) => props.theme["yellow-100"]};
  color: ${(props) => props.theme["yellow-300"]};
`;

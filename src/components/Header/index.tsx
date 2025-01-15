import {
  BadgesContainer,
  CartBadge,
  HeaderContainer,
  LocationBadge,
} from "./styles";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <BadgesContainer>
        <LocationBadge>
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </LocationBadge>

        <CartBadge>
          <ShoppingCart size={22} weight="fill" />
        </CartBadge>
      </BadgesContainer>
    </HeaderContainer>
  );
}

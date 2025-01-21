import {
  BadgesContainer,
  CartBadge,
  ItemsCounter,
  HeaderContainer,
  LocationBadge,
} from "./styles";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
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
          <ItemsCounter>3</ItemsCounter>
          <NavLink to="/checkout" title="Carrinho">
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
          </NavLink>
        </CartBadge>
      </BadgesContainer>
    </HeaderContainer>
  );
}

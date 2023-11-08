import styled from "styled-components";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-cart.svg";

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 27px;
  height: 27px;
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ItemCount = styled.span`
  position: absolute;
  font-size: 9px;
  margin-left: 4px;
  margin-bottom: 3px;
`;

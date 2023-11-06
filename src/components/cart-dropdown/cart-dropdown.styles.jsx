import styled from "styled-components";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 115px;
  right: 30px;
  z-index: 5;

  ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
    margin: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

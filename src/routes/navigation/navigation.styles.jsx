import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding-top: 25px;
  padding-left: 25px;
  .logo {
    width: inherit;
  }
`;
export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

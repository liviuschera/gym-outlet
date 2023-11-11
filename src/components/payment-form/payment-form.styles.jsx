import styled from "styled-components";

import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1); */

  h2 {
    text-align: center;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 350px;
`;

export const PaymentButton = styled(Button)`
  margin: 30px auto;
`;

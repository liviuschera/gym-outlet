import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const css = "color: DodgerBlue; font-size: 13px;";

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(`%c formFields: ${JSON.stringify(formFields, null, 3)}`, css);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    if (password.length < 6) {
      alert("password must be at least 6 characters");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      console.info(
        `%c user ${displayName} created successfully. User: ${JSON.stringify(
          user,
          null,
          3
        )}`,
        css
      );
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use!");
      } else if (error.code === "auth/invalid-email") {
        alert("Cannot create user, invalid email!");
      } else {
        alert("Cannot create user, try again later!");
        console.error("Failed to create user! ", error.message);
        return;
      }
    }

    // console.log("handlesubmit", event.target);
    // console.log(
    //   "create user with email and password",
    //   await createAuthUserWithEmailAndPassword(email, password)
    // );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <p>Sign up with your email and password</p>
      <p>
        <a href="/sign-in">Sign In</a>
      </p>
      <p>
        <a href="/forgot-password">Forgot Password?</a>
      </p>
      <form onSubmit={handleSubmit}>
        <h2>User Info</h2>

        <FormInput
          label="User Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;

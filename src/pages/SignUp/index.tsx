import { useState, useEffect } from "react";
import { ILogin, useAuth } from "../../hooks/auth";
import { Container, Logo, Form, ButtonText } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button"; 
import logo from "../../assets/Logo.svg";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const { signUp } = useAuth();

  const validateForm = () => {
    setIsFormValid(
      email && 
      password && 
      email.match(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/) && 
      password.length >= 6 ? true : false
    );
  };

  const handleLogin = () => {
    const loginInfo: ILogin = { email, password }

    signUp(loginInfo);
  }

  useEffect(() => {
    validateForm();
  }, [email, password]);

  return(
    <Container>
      <Logo>
        <img src={logo} alt="Logo of Food Explorer" />

        <h1 className="roboto-700-bold">food explorer</h1>
      </Logo>

      <Form>
        <h2 className="poppins-400-medium">Login</h2>

        <Input 
          labelID="email"
          label="Email"
          type="text"
          placeholder="Example: gianluca@email.com"
          pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          labelID="password"
          label="Password"
          type="password"
          placeholder="At least 6 characters"
          minLength={6}
          onChange={e => setPassword(e.target.value)}
        />

        <Button disabled={!isFormValid} type="submit" text="Sign In" onClick={handleLogin}/>

        <ButtonText href="/create-account" className="poppins-100-medium">
          Create an account
        </ButtonText>
      </Form>
    </Container>
  );
}

export default SignUp;
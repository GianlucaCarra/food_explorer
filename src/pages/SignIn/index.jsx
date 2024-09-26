import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { Container, Logo, Form, ButtonText } from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import logo from "../../assets/Logo.svg";

export function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    setIsFormValid(
      name && 
      email && 
      password && 
      name.match(/[a-zA-Z\s]+/) && 
      email.match(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/) && 
      password.length >= 6
    );
  };

  const handleCreate = async () => {
    await signIn({ name, email, password });

    navigate("/login");
  }

  useEffect(() => {
    validateForm();
  }, [name, email, password]);

  return(
    <Container>
      <Logo>
        <img src={logo} alt="Logo of Food Explorer" />

        <h1 className="roboto-700-bold">food explorer</h1>
      </Logo>

      <Form>
        <h2 className="poppins-400-medium">Create Your Account</h2>

        <Input 
          labelID="name"
          label="Your name"
          type="text"
          placeholder="Example: Gianluca Carra"
          pattern="[a-zA-Z\s]+"
          onChange={e => setName(e.target.value)}
        />

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
          minLength="6"
          onChange={e => setPassword(e.target.value)}
        />

        <Button 
          disabled={!isFormValid} 
          type="submit" 
          onClick={handleCreate}
          text="Create acount" 
        />

        <ButtonText href="/login" className="poppins-100-medium">
          I already have an account
        </ButtonText>
      </Form>
    </Container>
  );
}
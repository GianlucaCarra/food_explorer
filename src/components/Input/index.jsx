import { Container, Label, InputField } from "./style"; 

export function Input({ labelID, label, ...rest }) {
  return(
    <Container>
      <Label htmlFor={labelID} className="roboto-300-regular"> 
        {label}
      </Label>

      <InputField id={labelID} {...rest} />
    </Container>
  );
}
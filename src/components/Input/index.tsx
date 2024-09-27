import { Container, Label, InputField } from "./style"; 

interface IInput {
  labelID?: string;
  label: string;
  id?: string;
  type: string;
  placeholder: string;
  pattern?: string;
  minLength?: number;
  step?: string;
  value?: string;
  required?: boolean;
  onChange: (e: any) => void;
}

function Input({ labelID, label, minLength, ...rest }: IInput) {
  return(
    <Container>
      <Label htmlFor={labelID} className="roboto-300-regular"> 
        {label}
      </Label>

      <InputField minLength={minLength} id={labelID} {...rest} />
    </Container>
  );
}

export default Input;
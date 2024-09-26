import IButton from "../../types/IButton";
import { Container } from "./style"; 

function Button({ filepath, text, disabled, ref, className, ...rest }: IButton) {
  return(
    <Container ref={ref} className={`poppins-100-medium ${disabled ? 'disabled' : ''} ${className}`} disabled={disabled} {...rest} >
      {filepath && <img src={filepath} alt="" />}

      {text}
    </Container>
  );
}

export default Button;
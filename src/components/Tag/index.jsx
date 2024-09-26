import { Container } from "./style";

export function Tag({ text }) {
  return(
    <Container className="poppins-100-medium" > 
      { text }
    </Container>
  );
}
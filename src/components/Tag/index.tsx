import { Container } from "./style";

interface ITagProps {
  text: string;
}

function Tag({ text }: ITagProps) {
  return(
    <Container className="poppins-100-medium" > 
      { text }
    </Container>
  );
}

export default Tag;
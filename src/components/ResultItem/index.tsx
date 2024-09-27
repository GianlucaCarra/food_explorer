import { useNavigate } from "react-router-dom";
import { Container } from "./style"; 

export interface IResultItemProps {
  imageUrl: string;
  name: string;
  desc: string;
  id: string;
}

function ResultItem({ imageUrl, name, desc, id }: IResultItemProps) {
  const navigate = useNavigate();

  return(
    <Container onClick={() => navigate(`/meal/${id}`)}>
      <img src={imageUrl} alt={`image of ${name}`} />

      <div className="text">
        <h1 className="poppins-300-bold">{name + " >"}</h1>

        <span className="roboto-200-regular">{desc}</span>
      </div>
    </Container>
  );
}

export default ResultItem;
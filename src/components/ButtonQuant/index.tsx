import { useState } from "react";
import { Container } from "./style"; 
import minus from "../../assets/Minus.svg";
import plus from "../../assets/Plus.svg";

function ButtonQuant() {
  const [quant, setQuant] = useState<number>(1);

  return(
    <Container>
      <button className="sub" onClick={() => quant > 1 && setQuant(quant - 1)} >
        <img src={minus} alt="" />
      </button>

      <span className="roboto-400-bold">
        {quant <= 9 ? "0" + quant : quant}
      </span>

      <button className="add" onClick={() => quant < 50 && setQuant(quant + 1)} >
        <img src={plus} alt="" />
      </button>
    </Container>
  );
}

export default ButtonQuant
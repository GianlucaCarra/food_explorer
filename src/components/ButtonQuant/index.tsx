import { useEffect, useRef, useState } from "react";
import { Container } from "./style"; 
import { useOrder } from "../../hooks/OrderContext";
import minus from "../../assets/Minus.svg";
import plus from "../../assets/Plus.svg";

function ButtonQuant() {
  const [quant, setQuant] = useState<number>(0);
  const { addOneOrder, orders } = useOrder(); 
  const prevQuantRef = useRef(quant);
  
  useEffect(() => {
    const prevQuant = prevQuantRef.current;

    if (quant > prevQuant) {
      addOneOrder(quant - prevQuant);
    }

    prevQuantRef.current = quant;
  }, [quant, addOneOrder]);
  
  useEffect(() => {
    setQuant(0);
  }, [orders]);
  
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

export default ButtonQuant;
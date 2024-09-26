import { Container } from "./style"; 

import { Add } from "../../assets/Add.jsx";
import { Close } from "../../assets/Close.jsx"

export function IngredientItem({ $isnew, value, onClick, ...rest }) {
  return(
    <Container $isnew={$isnew}>
      <input 
        className="roboto-200-regular"
        type="text" 
        value={value}
        readOnly={!$isnew}
        {...rest}
      />

      <button onClick={onClick}>
        {$isnew ? <Add /> : <Close />}
      </button>
    </Container>
  );
}
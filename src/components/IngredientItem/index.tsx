import { Container } from "./style"; 
import Add from "../../assets/Add";
import Close from "../../assets/Close"

interface IIngredientItem {
  $isnew: boolean;
  value: string;
  placeholder?: string;
  onClick: (e: any) => void;
  onChange?: (e: any) => void;
}

function IngredientItem({ $isnew, value, onClick, ...rest }: IIngredientItem) {
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

export default IngredientItem;
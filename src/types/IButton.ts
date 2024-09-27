interface IButton {
  filepath?: string;
  text?: string;
  disabled?: boolean;
  ref?: any;
  className?: string;
  type?: "button" | "reset" | "submit" | undefined;
  onClick?: () => void;
}

export default IButton;
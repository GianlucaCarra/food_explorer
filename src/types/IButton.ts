interface IButton {
  filepath?: string;
  text?: string;
  disabled?: boolean;
  ref?: any;
  className?: string;
  onClick?: () => void;
}

export default IButton;
import "./Button.css";
interface IButtonProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}
export default function Button(props: IButtonProps) {
  return <button {...props}>{props.children}</button>;
}

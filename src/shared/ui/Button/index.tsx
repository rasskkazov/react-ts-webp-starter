import * as classes from "./Button.module.scss";
export const Button = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  return (
    <button className={classes.button} onClick={onClick}>
      {text}
    </button>
  );
};

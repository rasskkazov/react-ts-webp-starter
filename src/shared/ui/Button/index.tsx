import * as classes from "./Button.module.scss";

export const Button = ({
  text,
  onClick,
  status,
}: {
  text: string;
  onClick?: () => void;
  status?: "loading" | null;
}) => {
  if (status === "loading") {
    return (
      <button className={classes.button} disabled>
        {text}
      </button>
    );
  }
  return (
    <button className={classes.button} onClick={onClick}>
      {text}
    </button>
  );
};

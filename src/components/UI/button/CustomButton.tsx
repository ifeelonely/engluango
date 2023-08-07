import { CustomButtonProps } from './CustomButtonInt';
import classes from './CustomButton.module.css';

export function CustomButton({
  text,
  onClick,
}: CustomButtonProps): JSX.Element {
  return (
    <button
      className={classes.customBtn}
      type="button"
      onClick={(e) => onClick(e)}
    >
      {text}
    </button>
  );
}

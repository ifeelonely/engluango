import { CustomButtonProps } from './CustomButtonInt';
import classes from './CustomButton.module.css';

export function CustomButton({
  text,
  onClick,
  disable,
  styles,
}: CustomButtonProps): JSX.Element {
  return (
    <button
      style={{ ...styles }}
      disabled={disable}
      className={classes.customBtn}
      type="button"
      onClick={(e) => onClick(e)}
    >
      {text}
    </button>
  );
}

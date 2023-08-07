import { CustomInputProps } from './CustomInputInt';
import classes from './CustomInput.module.css';

export function CustomInput({
  placeholder,
  type,
  value,
  onChange
}: CustomInputProps): JSX.Element {
  return (
    <input
      className={classes.customInput}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

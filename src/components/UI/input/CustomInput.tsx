import { CustomInputProps } from './CustomInputInt';
import classes from './CustomInput.module.css';

export function CustomInput({
  placeholder,
  type,
  value,
  onChange,
  onBlur,
  styles,
}: CustomInputProps): JSX.Element {
  return (
    <input
      style={...styles}
      className={classes.customInput}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={() => (onBlur ? onBlur() : null)}
    />
  );
}

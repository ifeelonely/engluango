import { CustomInputProps } from './CustomInputInt';
import classes from './CustomInput.module.css';

export function CustomInput({
  placeholder,
  type,
  value,
  onChange,
  onBlur,
  styles,
  customClasses
}: CustomInputProps): JSX.Element {
  return (
    <input
      style={...styles}
      className={`${classes.customInput} ${customClasses?.join(' ')}`}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={() => (onBlur ? onBlur() : null)}
    />
  );
}

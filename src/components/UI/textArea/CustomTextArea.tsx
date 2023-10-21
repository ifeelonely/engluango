import React from 'react';
import { CustomTextAreaProps } from './CustomTextAreaInt';
import classes from './CustomTextArea.module.css';

const CustomTextArea = ({
  placeholder,
  value,
  onChange,
  rows,
  styles,
}: CustomTextAreaProps) => {
  return (
    <textarea
      className={classes.customTextArea}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      style={styles}
    />
  );
};

export default CustomTextArea;

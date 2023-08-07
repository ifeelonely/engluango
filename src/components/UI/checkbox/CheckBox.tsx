'use client';
import { useState } from 'react';
import CheckBoxProps from './CheckBoxInt';
import classes from './CheckBox.module.css';
import { AiOutlineCheck } from 'react-icons/ai';

const CheckBoxInt = ({ labelText }: CheckBoxProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <div
      className={classes.checkBoxWrapper}
      onClick={() => setIsChecked(!isChecked)}
    >
      <div className={classes.checkBoxInput}>
        {isChecked ? <AiOutlineCheck className={classes.checked} /> : null}
      </div>
      <label className={classes.checkLabel} htmlFor="stayInCheck">{labelText}</label>
    </div>
  );
};

export default CheckBoxInt;

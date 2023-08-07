import React, { useState, useEffect } from 'react';
import classes from './ToggleBtn.module.css';
import { ToggleBtnProps } from './ToggleBtnInt';

const ToggleBtn = React.memo(
  ({ getTogglePos }: ToggleBtnProps): JSX.Element => {
    const [toggledRight, setToggledRight] = useState<boolean>(false);

    const handleToggle = () => setToggledRight(!toggledRight);

    useEffect(() => {
      const pos = toggledRight ? 'right' : 'left';
      getTogglePos(pos);
    }, [getTogglePos, toggledRight]);

    return (
      <div className={classes.toggleBtn}>
        <div
          className={classes.toggleOval}
          onClick={handleToggle}
          tabIndex={0}
          role="button"
        >
          <div
            className={[
              classes.toggleCircle,
              classes[`${toggledRight ? 'moveRight' : ''}`],
            ].join(' ')}
          ></div>
        </div>
      </div>
    );
  }
);

ToggleBtn.displayName = 'ToggleBtn';

export default ToggleBtn;

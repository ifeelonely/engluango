'use client';
import { useState, useCallback } from 'react';
import ToggleBtn from '../toggleBtn/ToggleBtn';
import classes from './SwapCard.module.css';
import { SwapCardProps } from './SwapCardInt';

function SwapCard({ frontContent, backContent }: SwapCardProps): JSX.Element {
  const [togglePos, setTogglePos] = useState<string>('left');
  const getTogglePos = useCallback((pos: string) => {
    setTogglePos(pos);
  }, []);
  return (
    <div className={classes.swapCard}>
      <ToggleBtn getTogglePos={getTogglePos} />
      <div className={classes.cardSides}>
        <div
          className={[
            classes.side,
            classes.frontSide,
            classes[`${togglePos === 'right' ? 'rotated' : 'notRotated'}`],
          ].join(' ')}
        >
          {frontContent}
        </div>
        <div
          className={[
            classes.side,
            classes.frontSide,
            classes[`${togglePos !== 'right' ? 'rotated' : 'notRotated'}`],
          ].join(' ')}
        >
          {backContent}
        </div>
      </div>
    </div>
  );
}

export default SwapCard;

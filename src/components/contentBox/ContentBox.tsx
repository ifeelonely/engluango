import React from 'react';
import { ContentBoxProps } from './ContentBoxInt';
import classes from './ContentBox.module.css';

const ContentBox = ({
  children,
  contentBoxSectionStyling = [],
  contentBoxInnerStyling = [],
}: ContentBoxProps): JSX.Element => {
  return (
    <section
      className={`${classes.contentBox} ${contentBoxSectionStyling.join(' ')}`}
    >
      <div
        className={`${classes.contentBoxInner} ${contentBoxInnerStyling.join(
          ' '
        )}`}
      >
        {children}
      </div>
    </section>
  );
};

export default ContentBox;

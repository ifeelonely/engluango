'use client';
import { CustomButton } from '@/components/UI/button/CustomButton';
import Link from 'next/link';
import classes from './Page.module.css';

const buttonsStyle = {
  fontSize: '3rem',
  padding: '2rem',
};

const page = () => {
  const handleCreateNewStudySet = () => null;

  const handleShowStudySets = () => null;

  return (
    <section className={classes.userSets}>
      <div className={classes.userSetsInner}>
        <Link href="/userSets/newSet">
          <CustomButton
            text="Create new study set"
            onClick={handleCreateNewStudySet}
            styles={buttonsStyle}
          />
        </Link>

        <Link href="/userSets/userExistingSets">
          <CustomButton
            text="Show my study sets"
            onClick={handleShowStudySets}
            styles={buttonsStyle}
          />
        </Link>
      </div>
    </section>
  );
};

export default page;

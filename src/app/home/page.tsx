import SideBar from '@/components/sideBar/SideBar';
import React from 'react';
import classes from './page.module.css';
import { FaBook } from 'react-icons/fa';
import { SiSimilarweb, SiMicrosofttranslator } from 'react-icons/si';
import { AiFillSound, AiFillRead } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';

const page = (): JSX.Element => {
  return (
    <div className={classes.home}>
      <SideBar>
        <div className={classes.navOption}>
          <FaBook />
          <span className={classes.text}>Grammar</span>
        </div>
        <div className={classes.navOption}>
          <SiSimilarweb />
          <span className={classes.text}>Thesaurus</span>
        </div>
        <div className={classes.navOption}>
          <AiFillSound />
          <span className={classes.text}>Pronunciation</span>
        </div>
        <div className={classes.navOption}>
          <BsFillPencilFill />
          <span className={classes.text}>Writing</span>
        </div>
        <div className={classes.navOption}>
          <AiFillRead />
          <span className={classes.text}>Reading</span>
        </div>
        <a href="/translator">
          <div className={classes.navOption}>
            <SiMicrosofttranslator />
            <span className={classes.text}>Translator</span>
          </div>
        </a>
      </SideBar>
    </div>
  );
};

export default page;
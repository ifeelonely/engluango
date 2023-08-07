import React from 'react';
import classes from './Footer.module.css';
import Link from 'next/link';

const Footer = (): JSX.Element => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerInner}>
        <div className={classes.footerLearn}>
          <Link href="/newWords">New words</Link>
          <Link href="/help">Help</Link>
        </div>
        <div className={classes.footerAbout}>
          <Link href="/termsOfUse">Terms of use</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
        <div className={classes.footerSocial}>
          <div className={classes.socialLinks}></div>
          <div className={classes.footerLogo}></div>
          <div className={classes.copyRight}>Copyright</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

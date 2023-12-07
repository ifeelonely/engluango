'use client';
import Link from 'next/link';
import classes from './Header.module.css';
import { SiWolframlanguage } from 'react-icons/si';
import { headerLinks } from '@/data/headerLinks/headerLinks';
import { usePathname } from 'next/navigation';
import SearchBar from '../UI/searchBar/SearchBar';

const Header = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <header className={classes.header}>
      <div className={classes.headerInner}>
        <div className={classes.headerLogo}>
          <SiWolframlanguage className={classes.headerLogo} />
          <h2>Engluango</h2>
        </div>
        <div className={classes.headerLinks}>
          {headerLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                className={isActive ? classes.activeLink : ''}
                href={link.href}
                key={link.id}
              >
                {link.linkText}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;

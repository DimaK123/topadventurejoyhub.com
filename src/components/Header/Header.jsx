import './Header.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';

import { Navigation } from '../Navigation';

export const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClose = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('page__body--menu-open');
    } else {
      document.body.classList.remove('page__body--menu-open');
    }

    return () => {
      document.body.classList.remove('page__body--menu-open');
    };
  }, [menuOpen]);

  return (
    <header className={cn(
      'header',
      'page__header',
      {
        'header--menu': menuOpen,
      }
    )}
    >
      <div className="wrapper">
        <div className="header__inner">
          <div className="header__logo"></div>

          <button
            className={cn(
              "header__burger-menu",
              {
                "header__burger-menu--close": menuOpen
              }
            )}
            onClick={() => setMenuOpen(!menuOpen)}
          ></button>

          <Navigation
            menuOpen={menuOpen}
            handleMenuClose={handleMenuClose}
          />
        </div>
      </div>
    </header>
  );
}
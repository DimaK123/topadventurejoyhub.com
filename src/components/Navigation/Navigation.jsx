import './Navigation.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const Navigation = ({ menuOpen, handleMenuClose }) => {
  return (
    <nav className={cn(
      'header__nav',
      'nav',
      {
        'header__nav--open': menuOpen
      },
    )}
    >
      <ul className={cn(
        'nav__list',
        {
          'nav__list--column': menuOpen,
        }
      )}
      >
        <li className="nav__item">
          <Link
            to="/#home"
            className="nav__link"
            onClick={handleMenuClose}
          >
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/#services"
            className="nav__link"
            onClick={handleMenuClose}
          >
            Nasze Usługi
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/#testimonials"
            className="nav__link"
            onClick={handleMenuClose}
          >
            Opinie Klientów
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/#gallery"
            className="nav__link"
            onClick={handleMenuClose}
          >
            Galeria
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/#price"
            className="nav__link"
            onClick={handleMenuClose}
          >
            Członkostwo i Cennik
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/#footer"
            className="nav__link"
            onClick={handleMenuClose}
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
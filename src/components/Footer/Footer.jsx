import cn from 'classnames';
import { Link } from 'react-router-dom';
import './Footer.scss';

export const Footer = () => (
  <footer className="footer" id='footer'>
    <div className="wrapper">
      <div className="footer__inner">
        <div className="footer__img"></div>

        <h2 className={cn(
          'footer__section-title',
          'section-title',
          'section-title--orange',
        )}>
          Kontakt
        </h2>

        <div className="footer__contacts">
          <a 
            href="https://maps.app.goo.gl/UMHDfKGP2ZxuW6cw5" target="_blank"
          >
            Adres: ul. Sportowa 12, 00-100 Warszawa, Polska
          </a>

          <a href="tel:+48123456789">
            Telefon: +48 123 456 789
          </a>

          <a href="mailto:info@topadventurejoyhub.com">
            E-mail: info@topadventurejoyhub.com
          </a>

          <p>
           Godziny Otwarcia 
          </p>

          <p>
            Poniedziałek-Piątek: 06:00-22:00
          </p>

          <p>
            Sobota: 08:00-20:00
          </p>

          <p>
            Niedziela: 10:00-18:00
          </p>
        </div>

        <ul className="footer__nav">
          <li className="footer__nav-item">
            <Link to="/privacy-policy">
              Polityka prywatności
            </Link>
          </li>

          <li className="footer__nav-item">
            <Link to="/terms-and-conditions">
              Warunki i zasady
            </Link>
          </li>

          <li className="footer__nav-item">
            <Link to="/cookie-policy">
              Polityka plików cookie
            </Link>
          </li>
        </ul>

        <p className="footer__copyright">
          Wszelkie prawa zastrzeżone © topadventurejoyhub.com | 2024
        </p>
      </div>
    </div>
  </footer>
)
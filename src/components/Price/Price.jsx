import cn from 'classnames';
import './Price.scss';

export const Price = () => (
  <section className="price" id='price'>
    <div className="wrapper">
      <div className="price__inner">

        <h2 className={cn(
          'price__section-title',
          'section-title',
        )}>
          Członkostwo <span className="section-title--orange">i Cennik</span>
        </h2>
        
        <ul className="price__list">
          <li className="price__item">
            <div className="price__item-content">
              <h3 className="price__item-title">
                Karta miesięczna:
              </h3>
              <div className="price__item-img price__item-img--1"></div>
              
              <div className="price__item-bottom">
                <p className="price__item-price">
                  <span className="price__digit">199</span> PLN
                </p>
                <p>
                  miesiąc
                </p>
              </div>
            </div>
          </li>

          <li className="price__item">
            <div className="price__item-content">
              <h3 className="price__item-title">
                Karta 6-miesięczna:
              </h3>
              <div className="price__item-img price__item-img--2"></div>
              <div className="price__item-bottom">
                <p className="price__item-price">
                  <span className="price__digit">999</span> PLN
                </p>
                <p>
                  (zniżka 10%)
                </p>
              </div>
            </div>
          </li>

          <li className="price__item">
            <div className="price__item-content">
              <h3 className="price__item-title">
                Karta roczna:
              </h3>
              <div className="price__item-img price__item-img--3"></div>
              <div className="price__item-bottom">
                <p className="price__item-price">
                  <span className="price__digit">1 799</span> PLN
                </p>
                <p>
                  (zniżka 15%)
                </p>
              </div>
            </div>
          </li>

          <li className="price__item">
            <div className="price__item-content">
              <h3 className="price__item-title">
                Treningi Personalne:
              </h3>
              <div className="price__item-img price__item-img--4 price__item-img--big"></div>
              <div className="price__item-bottom">
                <p className="price__item-price">
                  <span className="price__digit">120</span> PLN
                </p>
                <p>
                  sesja
                </p>
              </div>
            </div>
          </li>

          <li className="price__item">
            <div className="price__item-content">
              <h3 className="price__item-title">
                Zajęcia Grupowe:
              </h3>
              <div className="price__item-img price__item-img--big price__item-img--5"></div>
              <div className="price__item-bottom">
                <p className="price__item-price">
                  <span className="price__digit">50</span> PLN
                </p>
                <p>
                  zajęcia
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
)
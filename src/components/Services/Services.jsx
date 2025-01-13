import './Services.scss';

import serviceImg1 from '../../images/components/Services/services-img-1.avif';
import serviceImg2 from '../../images/components/Services/services-img-2.avif';
import serviceImg3 from '../../images/components/Services/services-img-3.avif';
import serviceImg4 from '../../images/components/Services/services-img-4.avif';
import serviceImg5 from '../../images/components/Services/services-img-5.avif';

export const Services = () => (
  <section className="services" id='services'>
    <div className="wrapper">
      <div className="services__inner">
        <h2 className="services__section-title section-title">
          Nasze <span className="section-title--orange">Usługi</span>
        </h2>

        <ul className="services__list">
          <li className="services__item">
            <h3 className="services__item-title">
              Trening Personalny
            </h3>
            <img
              className="services__item-img"
              src={serviceImg1}
              alt="services-img-1"
            />
          </li>
          <li className="services__item">
            <h3 className="services__item-title">
              Crossfit i Wspinaczka
            </h3>
            <img
              className="services__item-img"
              src={serviceImg2}
              alt="services-img-2"
            />
          </li>
          <li className="services__item">
            <h3 className="services__item-title">
              Zajęcia Grupowe
            </h3>
            <img
              className="services__item-img"
              src={serviceImg3}
              alt="services-img-3"
            />
          </li>
          <li className="services__item">
            <h3 className="services__item-title">
              Fitness na Świeżym Powietrzu
            </h3>
            <img
              className="services__item-img"
              src={serviceImg4}
              alt="services-img-4"
            />
          </li>
          <li className="services__item">
            <h3 className="services__item-title">
              Rehabilitacja i Masaże
            </h3>
            <img
              className="services__item-img"
              src={serviceImg5}
              alt="services-img-5"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
)
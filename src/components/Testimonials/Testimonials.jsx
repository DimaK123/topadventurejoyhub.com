import './Testimonials.scss';

export const Testimonials = () => (
  <section className="testimonials" id='testimonials'>
    <div className="wrapper">
      <div className="testimonials__inner">
        <h2 className="testimonials__section-title section-title">
          <span className="section-title--orange">Opinie</span> Klientów
        </h2>

        <ul className="testimonials__list">
          <li className="testimonials__item">
            <p>
              „Top Adventure Joy Hub to moje ulubione miejsce do treningów. Dzięki profesjonalnym trenerom czuję się motywowany do osiągania coraz  lepszych wyników!”
            </p>

            <p className="testimonials__user-name">
              Anna Kowalska
            </p>
          </li>

          <li className="testimonials__item">
            <p>
              „Świetna atmosfera i nowoczesne wyposażenie – to właśnie sprawia, że uwielbiam tu trenować!”
            </p>

            <p className="testimonials__user-name">
              Piotr Nowak
            </p>
          </li>

          <li className="testimonials__item testimonials__item--with-bg"></li>
        </ul>
      </div>
    </div>
  </section>
)
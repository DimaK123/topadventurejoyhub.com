import './Hero.scss';

export const Hero = () => (
  <section className="hero">
    <div className="wrapper">
      <div className="hero__inner">
        <h1 className="hero__section-title section-title">
          Wznosimy Twoją Formę na<br />
          <span className='section-title section-title--orange'>Wyższy Poziom!</span>
        </h1>

        <button className='hero__action-button action-button'>
          Nasze Usługi
        </button>
      </div>
    </div>
  </section>
)

import './AcceptCookies.scss';

// eslint-disable-next-line react/prop-types
export const AcceptCookies = ({ setAcceptCookies }) => {

  const handleOffAcceptCookies = () => setAcceptCookies(false); 

  return (
    <div className="acceptCookies page__acceptCookies">
      <div className="acceptCookies__inner">
        <p>
          Używamy plików cookie, aby poprawić Twoje doświadczenia na naszej stronie internetowej. Przeglądając tę stronę, zgadzasz się na nasze użycie plików cookie
        </p>

        <div className="acceptCookies__buttons">
          <button
            className="acceptCookies__action-button action-button"
            onClick={() => handleOffAcceptCookies()}
          >
            Akceptuj Pliki Cookie
          </button>
          <button
            className="acceptCookies__action-button action-button action-button--black"
            onClick={() => handleOffAcceptCookies()}
          >
            Odrzuć Pliki Cookie
          </button>
        </div>
      </div>
    </div>
  )
}
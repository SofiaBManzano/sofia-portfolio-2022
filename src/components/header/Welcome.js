import portrait from "../../images/foto-sofia-bn.jpg";

const Welcome = () => {
  return (
    <>
      <section className="c-header__wrapper">
        <article className=" c-img-wrapper c-img-wrapper__portrait">
          <img className="u-border-round u-bg-image " src={portrait}></img>
        </article>
        <article>
          {" "}
          <h1 className="c-header-title">
            ¡Hola! <span>soy Sofía,</span>
          </h1>
          <h3>y soy front-end developer.</h3>
        </article>
      </section>
      <a className="c-header-subtitle" href="#work">
        {" "}
        <p className="c-header-subtitle__text">
          ¿Que qué he hecho el último año?<span>¡Acompáñame!</span>
        </p>{" "}
        <div className="u-text-align-center" href="#work">
          ↓
        </div>
      </a>
    </>
  );
};

export default Welcome;

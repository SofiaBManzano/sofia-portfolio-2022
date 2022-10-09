import portrait from "../../images/foto-sofia-bn.jpg";

const Welcome = () => {
  return (
    <>
      <section class="c-header__wrapper">
        <article class=" c-img-wrapper c-img-wrapper__portrait">
          <img
            class="c-img-wrapper__portrait--border u-bg-image "
            src={portrait}
          ></img>
        </article>
        <article>
          {" "}
          <h1 class="c-header-title">
            ¡Hola! <span>soy Sofía,</span>
          </h1>
          <h3>y soy front-end developer.</h3>
        </article>
      </section>
      <section>
        {" "}
        <p class="c-header-subtitle">
          ¿Que qué he hecho el último año?<span>¡Acompáñame!</span>
        </p>{" "}
        <div class="u-text-align-center">↓</div>
      </section>
    </>
  );
};

export default Welcome;

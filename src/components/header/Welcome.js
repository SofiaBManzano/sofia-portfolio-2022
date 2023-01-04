import portrait from "../../images/foto-sofia-bn.jpg";

const Welcome = () => {
  return (
    <>
      <article className="c-header__wrapper">
        <div className=" c-img-wrapper c-img-wrapper__portrait">
          <img className="u-border-round u-bg-image " src={portrait}></img>
        </div>
        <div>
          {" "}
          <h1 className="c-header-title">
            ¡Hola! <span>soy Sofía,</span>
          </h1>
          <h3>y soy front-end developer.</h3>
        </div>
      </article>
    
    </>
  );
};

export default Welcome;

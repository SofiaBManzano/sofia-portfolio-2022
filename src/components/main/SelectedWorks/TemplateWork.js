const TemplateWork = (props) => {
  return (
    <div className="c-block-work">
      <a target="blank u-link-reset" href={props.href}>
        <h3 className="c-work-title u-link-reset">{props.title}</h3>
        <div className="c-work-subtitle">
          <p>{props.description}</p>

          <div className="c-img-wrapper c-img-wrapper--work">
            <img className="u-bg-image" src={props.image}></img>
          </div>
        </div>{" "}
      </a>
    </div>
  );
};
export default TemplateWork;

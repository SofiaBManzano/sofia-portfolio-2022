const TemplateWork = (props) => {
  return (
    <li class="c-block-work">
      <a target="blank u-link-reset" href={props.href}>
        <h3 class="c-work-title u-link-reset">{props.title}</h3>
        <div class="c-work-subtitle">
          <p>{props.description}</p>

          <div class="c-img-wrapper c-img-wrapper--work">
            <img class="u-bg-image" src={props.image}></img>
          </div>
        </div>{" "}
      </a>
    </li>
  );
};
export default TemplateWork;

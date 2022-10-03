import imageFan from "../../images/fans.gif";
const TemplateWork = (props) => {
  return (
    <li>
      <a target="blank" href={props.href}>
        <h3>{props.title}</h3>
        <div>
          <p>{props.description}</p>

          <div>
            <img src={imageFan}></img>
          </div>
        </div>{" "}
      </a>
    </li>
  );
};
export default TemplateWork;

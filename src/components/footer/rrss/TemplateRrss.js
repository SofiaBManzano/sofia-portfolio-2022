const TemplateRrss = (props) => {
  return (
    <li>
      <a href={props.href} target="_blank" rel="noreferrer">
        <span className="c-block-footer__list--cream-text">{props.rrss}</span>
      </a>
    </li>
  );
};

export default TemplateRrss;

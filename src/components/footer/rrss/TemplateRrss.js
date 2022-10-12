const TemplateRrss = (props) => {
  return (
    <li>
      <a
        className="c-block-footer__text u-bold-italic"
        href={props.href}
        target="_blank"
        rel="noreferrer"
      >
        <span>{props.rrss}</span>
      </a>
    </li>
  );
};

export default TemplateRrss;

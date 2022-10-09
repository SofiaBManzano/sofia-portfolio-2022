const TemplateRrss = (props) => {
  return (
    <li>
      <a href={props.href} target="_blank" rel="noreferrer">
        <span>{props.rrss}</span>
      </a>
    </li>
  );
};

export default TemplateRrss;

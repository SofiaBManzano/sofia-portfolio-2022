import TemplateRrss from "./TemplateRrss";

const Rrss = () => {
  return (
    <nav className=" c-block-footer">
      <ul className="c-block-footer__list">
        <TemplateRrss href="https://github.com/SofiaBManzano" rrss="github" />
        <TemplateRrss
          href="https://www.linkedin.com/in/sofiablas/"
          rrss="linkedin"
        />

        <TemplateRrss
          href="https://www.instagram.com/sofiabmanzano/"
          rrss="instagram"
        />
      </ul>
    </nav>
  );
};

export default Rrss;

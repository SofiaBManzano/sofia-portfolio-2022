import TemplateWork from "./TemplateWork";
const SelectedWorks = () => {
  return (
    <section id="work">
      <h2>Trabajos seleccionados</h2>
      <ul>
        <TemplateWork
          title="Harry Potter Character Finder"
          description="//Responsive search engine for Harry Potter characters developed
          in React using an external API."
          href="https://sofiabmanzano.github.io/Buscador-Harry-Potter---React/#/"
        />
      </ul>
    </section>
  );
};
export default SelectedWorks;

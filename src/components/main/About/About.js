const About = () => {
  return (
    <article className="c-block-section c-block-section-about u-center-block-text">
      <h2 className="c-block-title u-bold-italic">
        Ok... <span className="u-span-inline">pero cuéntame más de ti</span>
      </h2>
      <p>
        Antes de adentrarme en el mundo del front-end, estuve trabajando durante
        4 años en una productora audiovisual, donde me encargaba de la edición y
        postproducción de cada vídeo. Al mismo tiempo, trabajaba como
        postproductora freelance, lo que me permitía realizar proyectos más
        creativos.
      </p>
      <p>
        Durante mi última etapa en esta profesión, también adquirí conocimientos
        en modelado 3D y etalonaje, que es el tratamiento del color en el vídeo.
      </p>
      <p>
        En mi tiempo libre, disfruto de la fotografía analógica, aunque debo
        admitir que cada vez uso más el móvil (¡y quién no!).
      </p>
      <p>
        Si aún tienes curiosidad y deseas ver qué estaba haciendo antes de
        convertirme en desarrolladora front-end, puedes{" "}
        <span className="u-bold-italic">ver mi reel</span> audiovisual.
      </p>
      <div className="c-block-iframe-wrapper">
        <iframe
          src="https://player.vimeo.com/video/311440378?h=e5ab699e2f&autoplay=1&loop=1&title=0&byline=0&portrait=0&autopause=0&muted=1&background=0"
          className="c-block-iframe"
          title="reel"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </article>
  );
};

export default About;

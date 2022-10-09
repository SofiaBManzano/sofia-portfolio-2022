const About = () => {
  return (
    <section class="c-block-section">
      {" "}
      <h2 class=" c-block-title">
        Ok... <span>pero cuéntame más de ti </span>
      </h2>
      <p>
        Antes del front-end, estuvo el vídeo. Durante 4 años estuve trabajando
        en una pequeña productora audiovisual, ocupándome de la edición y
        postproducción de cada vídeo.
      </p>
      <p>
        En mi última etapa de esta profesión aprendí a modelar en 3D y
        tratamiento del color en vídeo.
      </p>
      <p>
        En mi tiempo libre me gusta hacer fotografía analógica. Aunque admito
        que cada vez uso más el móvil.
      </p>
      <p>
        Si todavía tienes curiosidad y quieres ver qué estaba haciendo antes de
        reprogramarme en desarrolladora front-end, puedes dar play reel
        audiovisual.
      </p>
      <div className="c-block-iframe-wrapper">
        <iframe
          src="https://player.vimeo.com/video/311440378?h=e5ab699e2f&autoplay=1&loop=1&title=0&byline=0&portrait=0&autopause=0&muted=1&background=0"
          className="c-block-iframe"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </section>
  );
};

export default About;

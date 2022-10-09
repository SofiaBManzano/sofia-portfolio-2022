import TemplateWork from "./TemplateWork";
import imageFan from "../../../images/fans.gif";
import imageFilter from "../../../images/filtro.gif";
import imageHangman from "../../../images/ahorcado.gif";
import imageHP from "../../../images/hp.jpg";
import imageFresh from "../../../images/make-it-fresh.gif";
import imageBack from "../../../images/back-to.gif";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SelectedWorks = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="work" className="c-block-section">
      <h2 className="c-block-title u-bold u-text-underline">
        Trabajos seleccionados
      </h2>

      <Carousel responsive={responsive}>
        <TemplateWork
          title="Configurador de ventiladores"
          description="Proyecto heredado que refactoricé a la última versión de React."
          href="https://www.create-store.com/es/content/1678-configurador-ventilacion-de-techo#/"
          image={imageFan}
        />
        <TemplateWork
          title="Funcionalidad de filtro por países en página real"
          description="Nueva implementación de filtro por países el footer de la ecommerce donde trabajo actualmente."
          href="https://www.create-store.com/"
          image={imageFilter}
        />
        <TemplateWork
          title="Buscador de personajes Harry Potter"
          description="Proyecto propio. Trata de un buscador de personajes de Harry Potter en React usando una API externa."
          href="https://sofiabmanzano.github.io/Buscador-Harry-Potter---React/#/"
          image={imageHP}
        />
        <TemplateWork
          title="Juego del ahorcado"
          description="Proyecto propio hecho con React usando una API externa."
          href="https://sofiabmanzano.github.io/hangman-game/#/"
          image={imageHangman}
        />
        <TemplateWork
          title="Make it fresh"
          description="Campaña de verano para Create Store"
          href="https://www.create-store.com/es/content/1697-magazine-hazlo-fresco"
          image={imageFresh}
        />
        <TemplateWork
          title="Back to school"
          description="Campaña de vuelta de vacaciones para Create Store"
          href="https://www.create-store.com/es/content/1755-magazine-ya-habia-ganas-de-volver"
          image={imageBack}
        />
      </Carousel>
    </section>
  );
};
export default SelectedWorks;

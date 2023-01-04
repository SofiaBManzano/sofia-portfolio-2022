import { Link } from "react-router-dom";
const ItemsMenu = (props) => {
 
  return (
    <nav className={`c-header-nav ${props.menu ? "isActive" : " "}`}>
      <ul className="c-header-nav-content">
        <li className="c-header-nav-content-item u-padding-top-triple ">
          <Link
            id="home"
            to="/"
              onClick={props.toggleMenu}
            className="c-header-nav-content-item-link "
          >
            Ir al inicio
          </Link>
        </li>
        <li className="c-header-nav-content-item">
          <Link
            id="contact"
            to="/contacto"
              onClick={props.toggleMenu}
            className="c-header-nav-content-item-link"
          >
            Ir a contacto
          </Link>
        </li>
        <li className="c-header-nav-content-item">
          <Link
            id="about"
            to="/about"
              onClick={props.toggleMenu}
            className="c-header-nav-content-item-link"
          >
            ¿Por qué yo?
          </Link>
        </li>
        <li className="c-header-nav-content-item u-padding-bottom-double ">
          <Link
            id="work"
            to="/trabajos-seleccionados"
              onClick={props.toggleMenu}
            className="c-header-nav-content-item-link"
          >
            Trabajos seleccionados
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default ItemsMenu;

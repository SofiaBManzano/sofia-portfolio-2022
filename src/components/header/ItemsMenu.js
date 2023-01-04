import { Link } from "react-router-dom";
const ItemsMenu = (props) => {
  return (
    <nav className={`c-header-nav ${props.menuOpen}`}>
      <ul className="c-header-nav-content">
        <li className="c-header-nav-item">
          <Link to="/" className="c-header-nav-item-link">Ir al inicio</Link>
        </li>
        <li className="c-header-nav-item">
          <Link to="/contacto" className="c-header-nav-item-link">Ir a contacto</Link>
        </li>
        <li className="c-header-nav-item">
          <Link to="/about" className="c-header-nav-item-link">¿Por qué yo?</Link>
        </li>
        <li className="c-header-nav-item">
          <Link to="/trabajos-seleccionados" className="c-header-nav-item-link">Trabajos seleccionados</Link>
        </li>
      </ul>
    </nav>
  );
};
export default ItemsMenu;

import { Link } from "react-router-dom";
const MenuHeader = () => {
  return (
    <>
      <div className="c-header__content-menu">
        {" "}
        <div className="c-header__menu"> </div>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Ir al inicio</Link>
          </li>
          <li>
            <Link to="/contacto">Ir a contacto</Link>
          </li>
          <li>
            <Link to="/about">¿Por qué yo?</Link>
          </li>
          <li>
            <Link to="/trabajos-seleccionados">Trabajos seleccionados</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default MenuHeader;

import ItemsMenu from "./ItemsMenu";
import { useState } from "react";
const MenuHeader = (props) => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <section className="c-header">
      <div className="c-header__content-menu" onClick={toggleMenu}>
        <div className="c-header__menu"> </div>
      </div>
      <ItemsMenu menu={menu} toggleMenu={toggleMenu}/>
    </section>
  );
};
export default MenuHeader;

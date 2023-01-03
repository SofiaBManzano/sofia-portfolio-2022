import ItemsMenu from "./ItemsMenu";
const MenuHeader = (props) => {
  function changeState() {
    if (props.menuOpen === "u-hidden") {
      props.updateMenu("");
    } else {
      props.updateMenu("u-hidden");
    }
  }
  return (
    <>
      <div className="c-header__content-menu" onClick={changeState}>
        <div className="c-header__menu"> </div>
      </div>
      <ItemsMenu menuOpen={props.menuOpen} />
    </>
  );
};
export default MenuHeader;

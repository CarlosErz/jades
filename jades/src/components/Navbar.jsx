import { useState } from 'react';

export function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const troll = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="Navbar">
      <div className="container">
        <a className="logo" href="/">
          JADES
        </a>
        <div className="content">
          <nav className={`navbarul ${isActive ? 'active' : ''}`}>
            <ul>
              <li>
                <a href="ecopads">
                  <i className="far fa-seedling"></i> <span>Ecopads</span>
                </a>
              </li>
              <li>
                <a href="como-mantenerla-limpia">
                  <i className="far fa-soap"></i> <span>Como mantenerloa limpia?</span>
                </a>
              </li>
              <li>
                <a href="productos-a-utilizar">
                  <i className="far fa-shopping-cart"></i> <span>Productos a utilizar </span>
                </a>
              </li>
              <li>
                <a href="tips">
                  <i className="far fa-plus"></i> <span>Tips</span>
                </a>
              </li>
              <li>
                <a href="contacto">
                  <i className="far fa-handshake"></i> <span>Quienes somos?</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <button className={`btn_navbar ${isActive ? 'active' : ''}`} onClick={troll}>
          <span className="container_btn">
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </span>
        </button>
      </div>
    </div>
  );
}

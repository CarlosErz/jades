import { useState } from 'react';
import { Link } from 'react-router-dom';

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
                <Link to="/ecopads">
                  <i className="far fa-seedling"></i> <span>Ecopads</span>
                </Link>
              </li>
              <li>
                <Link to="/como-mantenerla-limpia">
                  <i className="far fa-soap"></i> <span>Como mantenerlo limpia?</span>
                </Link>
              </li>
              <li>
                <Link to="/productos-a-utilizar">
                  <i className="far fa-shopping-cart"></i> <span>Productos a utilizar </span>
                </Link>
              </li>
              <li>
                <Link to="/tips">
                  <i className="far fa-plus"></i> <span>Tips</span>
                </Link>
              </li>
              <li>
                <Link to="/contacto">
                  <i className="far fa-handshake"></i> <span>Quienes somos?</span>
                </Link>
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

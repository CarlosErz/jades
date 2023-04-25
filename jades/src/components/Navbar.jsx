export function Navbar() {
  const troll = () => {
    alert('Troll no jala aun jeje, curioso');
  }

  
  return(
  <div className="Navbar">
    <div className="container">
      <div className="title">
        <a className="logo" href="/">JADES</a>
      </div>
      <div className="content">
        <nav className="navbarul">
          <ul>
              <li><a href="ecopads"><i class="far fa-seedling"></i> <span>Ecopads</span></a></li>
              <li><a href="como-mantenerla-limpia"><i class="far fa-soap"></i> <span>Como mantenerloa limpia?</span></a></li>
              <li><a href="productos-a-utilizar"><i class="far fa-shopping-cart"></i> <span>Productos a utilizar </span></a></li>
              <li><a href="tips"><i class="far fa-plus"></i> <span>Tips</span></a></li>
              <li><a href="contacto"><i class="far fa-handshake"></i> <span>Quienes somos?</span></a></li>
          </ul>
        </nav>
      </div>
      <button className="btn_navbar" onClick={troll}>
        <span className="container_btn">
         <span className="top">
         </span>
         <span className="middle"></span>
        </span>
      </button>


    </div>
  </div>
  )
}
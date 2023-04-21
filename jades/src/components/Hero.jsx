import hero_img from '/src/assets/header img.png'

export function Hero() {
  return (
    <div className="hero">
      <div className="hero_container">
        <img src={hero_img} alt="" className="hero_producto" />
        <h2 className="hero_title">BIENVENIDOS A EL CAMBIO</h2>
        <a href="#" className="hero_btn">VER MÁS</a>
      </div>

    </div>
  )
}
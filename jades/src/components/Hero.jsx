import hero_img from '@assets/header img.png'
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="hero">
      <div className="hero_container">
        <img src={hero_img} alt="" className="hero_producto" />
        <h2 className="hero_title">Cuidar tu piel todos los días es como enviar notitas de amor a tu cuerpo, reducir los residuos sólidos es enviarle una notita de amor al planeta</h2>
        <Link to='/ecopads' className="hero_btn">VER MÁS</Link>
      </div>

    </div>
  )
}
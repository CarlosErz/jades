import hero_img from '/src/assets/header img.png'
import { Navbar } from '../components/Navbar'
//esto ira cuando le pique a el bnt del ver mas 

export function Tips() {
  return (
    <main>
      <Navbar></Navbar>
      <section className='ecopads_contenido'>
        <h2 className="ecopads_title">ECOPADS</h2>
        <div className="ecopads">
        <div className="ecopadsFlex">
          <img className='ecopads_img' src={hero_img} alt="" />
          <p className="ecopads_text">
            Ecopads de Jades es un producto único que combina la calidad y la sostenibilidad en un solo producto. Estas toallas para quitar el maquillaje son una opción respetuosa con el medio ambiente y con tu piel, ya que están diseñadas para eliminar de manera efectiva y suave el maquillaje de tu rostro sin irritar ni dañar la piel.
            Las Ecopads de Jades están elaboradas con materiales naturales y orgánicos, como el algodón, que garantizan una textura suave y absorbente para una limpieza profunda. Además, están diseñadas para ser reutilizables, lo que significa que puedes lavarlas y volver a utilizarlas en múltiples ocasiones, reduciendo así los residuos plásticos generados por el uso de productos desechables.
            Jades es una empresa comprometida con el cuidado del planeta y con la salud de su comunidad. Con Ecopads, Jades busca crear conciencia sobre la importancia de cuidar el medio ambiente y fomentar hábitos más sostenibles en el cuidado de la piel. Si estás buscando una opción de limpieza facial efectiva, suave y sostenible, Ecopads de Jades es la elección perfecta.
          </p>
        </div>
      </div>
      </section>
    </main>
  )
}
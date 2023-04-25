import cml_img from '/src/assets/cml.jpg'
import { Navbar } from '../components/Navbar'
//esto ira cuando le pique a el bnt del ver mas 

export function ComoMantenerlaLimpia() {
  return (
    <main>
      <Navbar></Navbar>
      <section className='CML_contenido'>
        <h2 className="CML_title">COMO MANTENERLA LIMPIA</h2>
        <div className="CML">
        <div className="CMLFlex">
          <img className='CML_img' src={cml_img} alt="" />
          <ul className='CML_text'>
            <li>
                Lavar constantemente: Las toallitas desmaquillantes ecológicas se deben lavar después de cada uso. Usa agua fría o tibia y un limpiador suave y sin fragancia para evitar irritaciones en la piel. Evita usar suavizantes de telas, ya que pueden dejar residuos que pueden obstruir los poros de la piel.
            </li><br></br>
            <li>
                Secar bien: Después de lavar las toallitas, cuélgalas para que se sequen al aire libre. Asegúrate de que estén completamente secas antes de guardarlas para evitar que crezcan bacterias o moho.
            </li><br></br>
            <li>
                Usa un limpiador de toallitas: Si las toallitas están especialmente sucias o manchadas, puedes usar un limpiador de toallitas específico para ayudar a eliminar la suciedad y las manchas. Estos productos suelen ser naturales y ecológicos.
            </li><br></br>
            <li>
                Guárdalas en un lugar limpio y seco: Para evitar la acumulación de bacterias, guarda las toallitas desmaquillantes en un lugar fresco y seco o donde no este expuesta de contaminación.
            </li>
          </ul>
        </div>
      </div>
      </section>
    </main>
  )
}
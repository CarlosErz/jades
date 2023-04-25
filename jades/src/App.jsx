import '@styles/style.css'
import { HomePague } from '@components/HomePague.jsx'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { Ecopads } from './components/Ecopads'
import { ComoMantenerlaLimpia } from './pages/ComoMantenerlaLimpia'
import { ProductosaUtilizar } from './pages/ProductosaUtilizar'
import { Tips } from './pages/Tips'
import { Contacto } from './pages/Contacto'


function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePague />} />
        <Route index element={<HomePague />} />
        <Route path='/ecopads' exact element={<Ecopads></Ecopads>} />
        <Route path='/como-mantenerla-limpia' exact element={<ComoMantenerlaLimpia></ComoMantenerlaLimpia>} />
        <Route path='/productos-a-utilizar' exact element={<ProductosaUtilizar></ProductosaUtilizar>} />
        <Route path='/tips' exact element={<Tips></Tips>} />
        <Route path='/contacto' exact element={<Contacto></Contacto>} />
      </Routes>
    </BrowserRouter>


  </>
  )
}

export default App

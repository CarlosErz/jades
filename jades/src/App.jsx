import '@styles/style.css'
import { HomePague } from '@components/HomePague.jsx'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { Ecopads } from '@components/Ecopads'
import {Not} from '@components/Not'
import { ComoMantenerlaLimpia } from './pages/ComoMantenerlaLimpia'
import { ProductosaUtilizar } from './pages/ProductosaUtilizar'
import { Tips } from './pages/Tips.jsx'
import { Contacto } from './pages/Contacto'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePague />} />
        <Route path="/ecopads" element={<Ecopads />} />
        <Route path="/limpia" element={<ComoMantenerlaLimpia />} />
        <Route path="/utilizar" element={<ProductosaUtilizar />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Not />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

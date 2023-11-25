import { BrowserRouter, Route, Routes } from "react-router-dom";

import Generador from "./pages/Generador";
import Invitacion from "./pages/Invitacion";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<h1>INICIO</h1>} />
          <Route path="/generador" element={<Generador />} />
          <Route path="/invitacion" element={<Invitacion />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

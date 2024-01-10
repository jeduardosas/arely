import { BrowserRouter, Route, Routes } from "react-router-dom";

import Invitacion from "/@/pages/Invitacion";
import NotFound from "/@/pages/NotFound";
import Footer from "./components/Footer";

import './styles/footer.css'

export default function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Invitacion />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

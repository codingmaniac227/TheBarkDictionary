
import './App.css'
import {Route, Routes} from "react-router-dom";
import Modal from "./pages/Modal.jsx";
import MoreInfo from "./pages/MoreInfo.jsx";
import Webpage from "./components/Webpage.jsx";

function App() {
  return (
    <>
      <Routes>
          <Route element={<Webpage />}>
              <Route path="/" element={<Modal />} />
              <Route path='more-info' element={<MoreInfo />} />
          </Route>
      </Routes>
    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Aim from "./components/Aim/Aim"
import AnnualEvent from "./Pages/AnnualEvent/AnnualEvent"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Vision from "./Pages/Vision/Vision"
import Home from "./Pages/Home/Home"
import Team from "./Pages/Team/Team"
import Students from "./Pages/Students/Students"

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vision' element={<Vision />} />
        <Route path='/annual-event' element={<AnnualEvent />} />
        <Route path='/team' element={<Team />} />
        {/* <Route path='/students' element={<Students />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

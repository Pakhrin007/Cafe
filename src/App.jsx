import NavBar from './NavBar'
import Home from './NavBar/pages/home'
import AboutUs from './NavBar/pages/about-us'
import Classes from './NavBar/pages/classes'
import Menu from './NavBar/pages/menu'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './NavBar/Components/footer'

import ClassDetails from './NavBar/pages/ClassDetails'
function App() {
  return (
    <>
    <div className='overflow-x-hidden'>
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/classDetails/:id" element={<ClassDetails/>} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>
      <Footer />
    </div>
    </>
  )
}

export default App

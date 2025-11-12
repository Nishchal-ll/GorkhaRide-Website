import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ExpertServices from './components/ExpertServices/Expertservices'
import BecomePartner from './components/BecomePartner/BecomePartner'
import Youtube from './components/YoutubeVideo/Youtube'
import Vendor from './components/Vendor/Vendor'
import Download from './components/Download/Download'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import Privacy from './components/Privacy/Privacy'
import About from './components/About/About'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <ExpertServices />
      <BecomePartner />
      <Vendor />
      <Download />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Form />} />
        <Route path="/about" element={<About />} />
        <Route path="/youtube" element={<Youtube />} />
      </Routes>
    </Router>
  )
}

export default App

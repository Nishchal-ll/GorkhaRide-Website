import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ExpertServices from './components/ExpertServices/Expertservices'
import BecomePartner from './components/BecomePartner/BecomePartner'
import Youtube from './components/YoutubeVideo/Youtube'
import Download from './components/Download/Download'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import Privacy from './components/Privacy/Privacy'
import Services from './components/Services/Services'
import About from './components/About/About'
import HowTo from './components/HowTo/HowTo'
import Service from './components/Service/Service'

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ExpertServices />
      <BecomePartner />
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
        <Route path="/howtouse" element={<HowTo />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/service" element={<Service />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  )
}

export default App

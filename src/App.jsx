import './App.css'
import AboutSection from './components/AboutSection'
import CompaniesSection from './components/CompaniesSection'
import ContactSection from './components/ContactSection'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProductsSection from './components/ProductsSection'
import ServicesSection from './components/ServicesSection'

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <CompaniesSection />
      <ProductsSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}

export default App

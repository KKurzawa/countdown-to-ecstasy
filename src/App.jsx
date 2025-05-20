import './App.css'
import Header from './components/header/Header'
import Shows from './components/shows/Shows'
import Band from './components/band/Band'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Landing from './components/landing/Landing'
import { useState, useEffect } from 'react'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 6000)
  }, [])

  if (loading) {
    return <Landing />
  }

  return (
    <main className="main">
      <Header />
      <section className="main-content">
        <Band />
        <Shows />
        <Testimonials />
        <Contact />
      </section>
      <Footer />
    </main>
  )
}

export default App
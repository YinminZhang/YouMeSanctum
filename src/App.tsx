import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Awards from './components/Awards'
import GalleryAndAttractions from './components/GalleryAndAttractions'
import NearbyAttractions from './components/NearbyAttractions'
import Activities from './components/Activities'
import Directions from './components/Directions'
import Footer from './components/Footer'
import { LanguageProvider } from './components/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Hero />
        <Philosophy />
        <Awards />
        <GalleryAndAttractions />
        <NearbyAttractions />
        <Activities />
        <Directions />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
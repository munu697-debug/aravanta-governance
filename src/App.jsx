import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import TrustStrip from './components/TrustStrip';
import FocusAreas from './components/FocusAreas';
import HowWeWork from './components/HowWeWork';
import Impact from './components/Impact';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <TrustStrip />
        <FocusAreas /> {/* Serving as the Services Grid */}
        <HowWeWork />
        <Impact />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import About from './components/About';
import Visit from './components/Visit';
import Footer from './components/Footer';
import CoffeeBeansBg from './components/CoffeeBeansBg';
import './App.css';

function App() {
  return (
    <div className="cafe-app">
      {/* Background Animated Coffee Beans Layer */}
      <CoffeeBeansBg />

      {/* Sticky Minimal Navigation */}
      <Navbar />

      {/* Main Content Sections in strict editorial hierarchy */}
      <main id="main-content">
        {/* A. Home / Hero */}
        <Hero />

        {/* B. Signature Menu (Immediately after Hero) */}
        <Menu />

        {/* C. Ambiance / Gallery (Immediately after Menu) */}
        <Gallery />

        {/* D. About & Cafe Experience (Consolidated into ONE concise section after Ambiance) */}
        <About />

        {/* E. Visit Us / Contact / Address */}
        <Visit />
      </main>

      {/* F. Compact Premium Footer */}
      <Footer />
    </div>
  );
}

export default App;

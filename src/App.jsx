import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EditorialStrip from './components/EditorialStrip';
import Story from './components/Story';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Visit from './components/Visit';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="cafe-app">
      <Navbar />
      <main id="main-content">
        <Hero />
        <EditorialStrip />
        <Story />
        <Menu />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import ServicesMap from './components/ServicesMap'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Information from './components/Information';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
      </div>
      <main>
        <Hero />
        <Services />
        <Information />
        <ServicesMap />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;

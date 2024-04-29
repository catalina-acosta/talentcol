import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
      </div>
      <main>
        <Hero />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;

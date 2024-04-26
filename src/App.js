import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
      </div>
      <main>
        <Hero />
        <Services />
      </main>
    </div>
  );
}

export default App;

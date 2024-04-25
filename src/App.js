import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
      </div>
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;

import './App.css';
import NavBar from './components/layouts/NavBar';
import About from './pages/About';
import Hero from './pages/Hero';

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <main id='main'>
        <About/>
      </main>
    </>
  );
}

export default App;

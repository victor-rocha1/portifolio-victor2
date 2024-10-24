import './App.css';
import About from './assets/sections/About/About';
import NavBar from './assets/sections/NavBar/NavBar';
import Projects from './assets/sections/Projects/Projects';
import Skills from './assets/sections/Skills/Skills';

function App() {
  return (
    <>
      <NavBar />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
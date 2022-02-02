import Header from './Component/Header';
import About from './Component/About';
import Projects from './Component/Projects';
import Skills from './Component/Skills';
import Contact from './Component/Contact';
import './App.css';
import { useRef, useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [nav, setNav] = useState(false);
  const inputRef = useRef();

  darkMode
    ? document.firstElementChild.classList.add('dark')
    : document.firstElementChild.classList.remove('dark');

  function handleNav(e) {
    e.preventDefault();
    setNav(!nav);
    document.querySelector('nav').classList.toggle('hidden');
  }

  function closeNav(e) {
    if (window.scrollY > 500) {
      setNav(false);
      document.querySelector('nav').classList.add('hidden');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', closeNav);

    return () => {
      window.removeEventListener('scroll', closeNav);
    };
  }, []);

  return (
    <div className='app text-justify'>
      <Header handleNav={handleNav} navMode={nav} />
      <About
        toContact={(e) => {
          e.preventDefault();
          inputRef.current.focus();
        }}
      />
      <Projects />
      <Skills />
      <Contact inputRef={inputRef} />

      <button
        className='bg-white fixed z-10 right-8 bottom-8 rounded-full shadow-sm hover:shadow-md  shadow-[#0D0E10] hover:shadow-[#0D0E10] dark:bg-[#0D0E10] dark:shadow-[#f0f0f0] w-12 h-12'
        onClick={() => setDarkMode(!darkMode)}
      >
        <div className={!darkMode ? 'block' : 'hidden'}>
          <i className='fas fa-moon'></i>
        </div>

        <div className={darkMode ? 'block' : 'hidden'}>
          <i className='far fa-sun'></i>
        </div>
      </button>
    </div>
  );
}

export default App;

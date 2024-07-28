
import React from 'react';
import NavBar from "./components/NavBar";
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 z-[-110] h-full w-full">
      
      
      
      <div class="relative size-full bg-slate-950">
  <div
    class="absolute bottom-0 left-[-20%] right-0 top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"
  ></div>
  <div
    class="absolute bottom-0 right-[-20%] top-[-10%] size-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"
  ></div>
</div>
      
       </div>
      
      
      <div className="container mx-auto px-8">
      <NavBar />
      <Hero />
      <About /> 
      <Technologies/>
      <Projects />
      <Contact />
      </div>
    </div>
  );
}

export default App;

import Header   from './components/Header';
import Hero     from './components/Hero';
import Projects from './components/Projects';
import About    from './components/About';
import Contact  from './components/Contact';
import Footer   from './components/Footer';


function App() {

  return (
    <>
      <div className="scroll-smooth font-sans">
        <Header />
        
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
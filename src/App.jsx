import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'


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
      </div>
    </>
  )
}

export default App

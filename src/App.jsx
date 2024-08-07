import About from "./components/About/About/About"
import Footer from "./components/Footer/Footer"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"

function App() {

  return (
    <div class="h-fit lg:flex lg:h-screen lg:w-full lg:px-28 xl:px-36 2xl:px-56">
    <div class="lg:w-2/5 lg:h-full">
      <About/>
    </div>
    <div class="lg:w-3/5 lg:overflow-scroll lg:scrollbar-hide lg:pl-6 lg:pt-16">
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  </div>
  )
}

export default App

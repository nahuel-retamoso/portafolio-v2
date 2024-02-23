import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"

function App() {

  return (
    <div class="h-fit lg:flex lg:h-screen lg:w-full lg:px-56">
    <div class="lg:w-2/5 ">
      <About/>
    </div>
    <div class="lg:w-3/5 lg:overflow-scroll lg:scrollbar-hide lg:pl-24 lg:pt-16">
      <Projects/>
      <Skills/>
      <div class="flex h-fit px-7 pb-14 pt-14 justify-center align-center lg:ml-6">
        <p class="text-sm font-extralight text-white/35">Este sitio es el portafolio de Nahuel Retamoso. Esta hecho con Next.js ,Tailwind y React Three Fiber, el deploy en Vercel.</p>
      </div>
    </div>
  </div>
  )
}

export default App

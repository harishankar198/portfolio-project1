import About from "./component/About";
import Certification from "./component/Certification";
import Contact from "./component/Contact";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Tech from "./component/Tech";

export default function App() {
  return (
    <div>
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Navbar/>
      <Hero/>
      <About/>
      <Tech/>
      <Certification/>
      <Project/>
      <Contact/>
    </div>
  )
}
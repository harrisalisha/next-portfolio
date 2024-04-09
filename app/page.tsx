import Image from 'next/image'
import Intro from './components/Intro'
import About from './components/About'
import SectionDivider from './components/SectionDivider'
import Projects from './components/Projects'
import Skills from './components/skills'
import Experience from './components/Experience'
import Contact from './components/Contact'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />

    </main>
  )
}

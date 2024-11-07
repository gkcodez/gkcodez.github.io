import { IoLogoLinkedin, IoLogoGithub, IoMdMail } from "react-icons/io";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-20">
      <h1 className="text-amber-600 text-5xl font-bold p-2 font-poppins">Gopalakrishnan</h1>
      <h3 className="text-lg text-gray-500">Web Developer & Bug Bounty Hunter</h3>
      <div className="social flex justify-center align-middle mt-3">
        <a href="https://www.github.com/gkcodez" target="_blank"><IoLogoGithub className="text-6xl p-2"/></a>
        <a href="https://www.linkedin.com/in/gkcodez" target="_blank"><IoLogoLinkedin className="text-6xl p-2"/></a>
        <a href="mailto:gopalakrishnan.work@gmail.com" target="_blank"><IoMdMail  className=" text-6xl p-2"/></a>
      </div>
      <nav className="mt-5 flex items-center justify-center">
        <button type="button" className="border-2 border-gray-700 rounded-lg text-xl p-2 mr-2">About</button>
        <button type="button" className="border-2 border-gray-700 rounded-lg text-xl p-2 mr-2">Projects</button>
        <button type="button" className="border-2 border-gray-700 rounded-lg text-xl p-2 mr-2">Contact</button>
        <ThemeSwitcher/>
        
      </nav>

      <div id="about-section" className="text-lg mt-3">
      <p className="mt-2">I&apos;m Gopalakrishnan / GK, Software engineer with a decade of experience in testing and developing enterprise applications.</p>
      <p className="mt-2"><span className="text-3xl">⚙️</span> I like automating everything around. Am I being smart? Nah! just too lazy to repeat things!</p>
      <p className="mt-2"><span className="text-3xl">🥰</span> Fell in love with hacking. Please don&apos;t ask me to hack facebook accounts though!</p>
      <p className="mt-2"><span className="text-3xl">😎</span> Passion for developing software. At times, I switch my developer mode ON!</p>
      <p className="mt-2"><span className="text-3xl">👌</span> Python makes my life easier, unlike the one in the wild!</p>
      <p className="mt-2"><span className="text-3xl">😍</span> Vue and React makes it beautiful, Angular, I&apos;m sorry!</p>
      </div>
    </main>
  )
}

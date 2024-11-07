import { IoLogoLinkedin, IoLogoGithub, IoMdMail } from "react-icons/io";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start p-20'>
      <h1 className='text-5xl font-bold p-2 font-poppins'>Gopalakrishnan</h1>
      <h3 className='text-lg text-gray-500'>Web Developer & Bug Bounty Hunter</h3>
      <div className="social flex justify-center align-middle mt-3">
        <a href="https://www.github.com/gkcodez" target="_blank"><IoLogoGithub className="text-6xl p-2 mr-1"/></a>
        <a href="https://www.linkedin.com/in/gkcodez" target="_blank"><IoLogoLinkedin className="text-sky-500 text-6xl p-2 mr-1"/></a>
        <a href="mailto:gopalakrishnan.work@gmail.com" target="_blank"><IoMdMail  className="text-6xl p-2 mr-1"/></a>
      </div>
      <nav className="mt-5">
        <button className="nav-button p-2 mr-1">About</button>
        <button className="nav-button p-2 mr-1">Projects</button>
        <button className="nav-button p-2 mr-1">Contact</button>
      </nav>
    </main>
  )
}

import { IoLaptop, IoLogoVue, IoSettingsSharp } from "react-icons/io5";
import { BsIncognito } from "react-icons/bs";
import { IoLogoPython } from "react-icons/io";

export default function About() {
    return <div id="about-section">
        <p className="mt-1">I&apos;m Gopalakrishnan (@gkcodez), Software engineer with a decade of experience in testing and developing enterprise applications.</p>
        <p className="mt-1 flex items-center"><IoSettingsSharp className="text-3xl mr-2" /> I like automating everything around. Am I being smart? Nah! just too lazy to repeat things!</p>
        <p className="mt-1 flex items-center"><BsIncognito className="text-3xl mr-2" /> Fell in love with hacking. Please don&apos;t ask me to hack facebook accounts though!</p>
        <p className="mt-1 flex items-center"><IoLaptop className="text-3xl mr-2" /> Passion for developing software. At times, I switch my developer mode ON!</p>
        <p className="mt-1 flex items-center"><IoLogoPython className="text-3xl mr-2" />  Python makes my life easier, unlike the one in the wild!</p>
        <p className="mt-1 flex items-center"><IoLogoVue className="text-3xl mr-2" /> Vue and React makes it beautiful, Angular, I&apos;m sorry!</p>
    </div>
}
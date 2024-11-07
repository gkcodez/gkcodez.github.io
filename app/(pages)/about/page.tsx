import { IoLaptop, IoLogoVue, IoSettingsSharp } from "react-icons/io5";
import { BsIncognito } from "react-icons/bs";
import { IoLogoPython } from "react-icons/io";
import { PiHandWavingFill } from "react-icons/pi";

export default function About() {
    return <div id="about-section" className="max-h-screen flex-col items-center gap-3">
        <div className="py-3">
        <h3 className="flex items-center justify-start text-white p-5 bg-gray-700 w-full rounded-lg">
            <p className="mr-2">[<span className="text-green-500">gkcodez</span>@github.com]</p> 
            <p className="w-full font-semibold">echo "Hello!"</p>
        </h3>
        <p className="mt-2">I&apos;m Gopalakrishnan (@gkcodez), Software engineer with a decade of experience in testing and developing enterprise applications.</p>
        </div>

        <h3 className=" text-2xl py-3 font-bold">More about me:</h3>
        <hr />
        <p className="mt-1 flex items-center gap-5"><IoSettingsSharp className="text-5xl" /> I like automating everything around. Am I being smart? Nah! just too lazy to repeat things!</p>
        <p className="mt-1 flex items-center gap-5"><BsIncognito className="text-5xl" /> Fell in love with hacking. Please don&apos;t ask me to hack facebook accounts though!</p>
        <p className="mt-1 flex items-center gap-5"><IoLaptop className="text-5xl" /> Passion for developing software. At times, I switch my developer mode ON!</p>
        <p className="mt-1 flex items-center gap-5"><IoLogoPython className="text-5xl" />  Python makes my life easier, unlike the one in the wild!</p>
        <p className="mt-1 flex items-center gap-5"><IoLogoVue className="text-5xl" /> Vue and React makes it beautiful, Angular, I&apos;m sorry!</p>
    </div>
}
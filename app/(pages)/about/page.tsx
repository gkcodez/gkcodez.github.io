import { IoLaptop, IoLogoVue, IoSettingsSharp } from "react-icons/io5";
import { BsIncognito } from "react-icons/bs";
import { IoLogoPython } from "react-icons/io";
import { PiHandWavingFill } from "react-icons/pi";

export default function About() {
    return <div id="about-section" className="max-h-screen flex-col items-center gap-3">
        <div className="flex flex-col text-white p-10 m-2 bg-gray-700 w-full rounded-lg">
            <h3 className="flex items-center justify-start">
                <p className="mr-2">[<span className="text-green-500">gkcodez</span>@github.com]</p>
                <p className="w-full">cat ~/intro.txt</p>
            </h3>
            <div className="mt-2 w-full text-wrap font-light flex flex-col gap-3">
                <h3 className="flex start gap-3 w-full text-5xl text-center font-medium items-center"><PiHandWavingFill className="text-7xl"/>Hey!</h3>
                <p>I&apos;m <span className="font-medium">Gopalakrishnan (@gkcodez)</span>, Software engineer with a decade of experience in testing and developing enterprise applications.
                Feel free to reach out to me on the social buttons above 👆</p></div>
        </div>

        <h3 className=" text-2xl p-5 font-bold">More about me:</h3>
        <hr />
        <div className="m-5 flex flex-col gap-2">
            <p className="flex items-center gap-3"><IoSettingsSharp className="text-5xl" />I like automating everything around. Am I being smart? Nah! just too lazy to repeat things!</p>
            <p className="flex items-center gap-3"><IoLaptop className="text-5xl" />Passion for developing software. At times, I switch my developer mode ON!</p>
            <p className="flex items-center gap-3"><BsIncognito className="text-5xl" />Fell in love with hacking. Please don&apos;t ask me to hack facebook accounts though!</p>
            <p className="flex items-center gap-3"><IoLogoPython className="text-5xl" />Python makes my life easier, unlike the one in the wild!</p>
            <p className="flex items-center gap-3"><IoLogoVue className="text-5xl" />Vue and React makes it beautiful, Angular, I&apos;m sorry!</p>
        </div>
    </div>
}
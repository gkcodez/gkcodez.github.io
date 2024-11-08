import ProjectCard from "@/app/components/ProjectCard"

export default function Project() {
  return <div id="project-section" className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 max-w-7xl">
    <ProjectCard title="Employee Portal"
      description="Full stack web application for managing employee data."
      tags="React, Node.js, SQL server"
      thumbnailsrc="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg"
      codesrc="https://github.com/gkcodez/sern-employee-portal"
    />
    <ProjectCard title="Bug bounty reports"
      description="Automation tool to fetch bug bounty reports from hackerone."
      tags="Python"
      thumbnailsrc="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg"
      codesrc="https://github.com/gkcodez/bug-bounty-reports-hackerone"
    />
        <ProjectCard title="Portfolio"
      description="Portfolio web application built with next.js and typescript."
      tags="Next.js, Typescript, Tailwind CSS"
      thumbnailsrc="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
      codesrc="https://github.com/gkcodez/bug-bounty-reports-hackerone"
      demosrc="https://gopalakrishnan.vercel.app"
    />
            <ProjectCard title="Autobot"
      description="Web application with most used web elements for UI test automation practice."
      tags="React.js, Tailwind CSS"
      thumbnailsrc="https://images.pexels.com/photos/29202997/pexels-photo-29202997/free-photo-of-sunset-sailing-in-hungary-s-balaton-lake.jpeg"
      codesrc="https://github.com/gkcodez/autobot"
      demosrc="https://auto-bot-demo.vercel.app"
    />
            <ProjectCard title="Pomodoro"
      description="Pomodoro application for productivity."
      tags="Next.js, Tailwind CSS"
      thumbnailsrc="https://images.pexels.com/photos/22147574/pexels-photo-22147574/free-photo-of-two-girls-riding-bicycles-and-a-dog-running-on-a-countryside-road.jpeg"
      codesrc="https://github.com/gkcodez/next-pomodoro"
      demosrc="https://pomodoro-byteappz.vercel.app/"
    />
  </div>
}
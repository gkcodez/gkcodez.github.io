import ProjectCard from "@/app/components/ProjectCard"

export default function Project() {
  return <div id="project-section" className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 max-w-7xl">
    <ProjectCard title="Test title 1" description="Test description 1" thumbnailsrc="https://cdn.pixabay.com/photo/2018/04/22/22/57/hacker-3342696_1280.jpg" codesrc="#" demosrc="#" />
    <ProjectCard title="Test title 2" description="Test description 2" thumbnailsrc="https://cdn.pixabay.com/photo/2018/04/22/22/57/hacker-3342696_1280.jpg" codesrc="#" />
    <ProjectCard title="Test title 3" description="Test description 3" thumbnailsrc="https://cdn.pixabay.com/photo/2018/04/22/22/57/hacker-3342696_1280.jpg" demosrc="#" />
  </div>
}
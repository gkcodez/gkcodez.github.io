import Image from "next/image"

export default function ProjectCard(props: any) {
    return (
        <div className="project-card border-2 border-gray-700 p-5 rounded-lg">
        <Image
          src={props.thumbnailsrc}
          width={0}
          height={0}
          alt={props.title}
          priority={false}
          title={props.title}
          className="rounded-xl my-2 w-full h-auto"
        />
        <h2 className="text-xl">{props.title}</h2>
        <p className="text-gray-600">{props.description}</p>
        <div className="buttons flex flex-wrap items-center justify-start gap-3 my-2">
          { props.codesrc &&
          <a href={props.codesrc} target="_blank" className="p-3 border-2 border-gray-700 rounded-lg">View Code</a>
          }
          {
            props.demosrc &&
            <a href={props.demosrc} target="_blank" className="p-3 border-2 border-gray-700 rounded-lg">View Demo</a>
          }
        </div>
      </div>
    )
}
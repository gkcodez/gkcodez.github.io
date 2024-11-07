import Image from "next/image"

export default function ProjectCard(props: any) {
    return (
        <div className="project-card border-2 border-gray-600 p-5 rounded-lg">
        <Image
          src={props.thumbnailsrc}
          width={0}
          height={0}
          alt={props.title}
          priority={false}
          title={props.title}
          className="rounded-xl my-2 w-full h-auto"
        />
        <h2 className="text-xl my-1">{props.title}</h2>
        <p className="font-normal my-1">{props.description}</p>
        <div className="buttons flex flex-wrap items-center justify-start gap-3 my-2">
          { props.codesrc &&
          <a href={props.codesrc} target="_blank" className="p-3 border-2 border-gray-500 text-gray-500 rounded-lg">View Code</a>
          }
          {
            props.demosrc &&
            <a href={props.demosrc} target="_blank" className="p-3 border-2 border-sky-600 text-sky-600 rounded-lg">View Demo</a>
          }
        </div>
      </div>
    )
}
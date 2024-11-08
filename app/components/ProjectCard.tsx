import Image from "next/image"

export default function ProjectCard(props: any) {
  let tags = null
  if (props.tags) {
    tags = props.tags.split(",")
  }
  return (
    <div className="project-card flex flex-col h-full w-full border-2 border-gray-600 p-5 rounded-lg">
      <div className="details grow">
        <Image
          src={props.thumbnailsrc}
          width={0}
          height={0}
          alt={props.title}
          priority={false}
          title={props.title}
          className="rounded-xl my-2 w-full h-auto"
        />
        <h2 className="text-xl my-1 text-sky-600">{props.title}</h2>
        <p className="font-light my-1">{props.description}</p>
        {
          tags &&
          <div className="flex flex-wrap gap-2 my-2">
            {
              tags.map((tag: any, index: number) => {
                return (
                  <p key={index} className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-light">{tag}</p>
                )
              })
            }
          </div>
        }
      </div>
      <div>
        <hr className="my-3"/>
        <div className="buttons flex flex-wrap items-center justify-start gap-3 py-2">
          {props.codesrc &&
            <a href={props.codesrc} target="_blank" className="p-3 border-2 border-gray-600 text-gray-600 dark:border-gray-200 dark:text-gray-200 rounded-lg">View Code</a>
          }
          {
            props.demosrc &&
            <a href={props.demosrc} target="_blank" className="p-3 border-2 border-sky-600 text-sky-600 rounded-lg">View Demo</a>
          }
        </div>
      </div>
    </div>
  )
}
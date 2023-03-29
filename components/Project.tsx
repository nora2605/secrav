type Project = {
  name: string;
  path: string;
  desc: string;
};

type Props = {
  project: Project;
};

export default function Project({ project }: Props) {
  return (
    <li class="mb-4" key={project.name}>
      <a href={project.path}>
        <div class="rounded border border-gray-500 p-4 hover:bg-gray-800 hover:border-white transition duration-300 ease-in-out">
          <div class="flex items-center mb-4">
            <img
              class="w-12 h-12 rounded-full mr-4"
              src={project.path + "/panel.png"}
              alt={project.name}
            />
            <h2 class="text-xl font-bold">{project.name}</h2>
          </div>
          <p class="text-gray-400">{project.desc}</p>
        </div>
      </a>
    </li>
  );
}

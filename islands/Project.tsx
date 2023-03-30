import { useState } from "preact/hooks";
import MessageBox from "./MessageBox.tsx";

type Project = {
  name: string;
  path: string;
  desc: string;
};

type Props = {
  project: Project;
};

export default function Project({ project }: Props) {
  const project_absent_message =
    "This project doesn't have a page yet! Maybe you should complain to me on twitter about it.";
  const [showMessageBox, setShowMessageBox] = useState(false);

  const project_available = !(project.path == "" || !project.path);

  return (
    <li class="mb-4" key={project.name}>
      <a
        href={project_available ? project.path : undefined}
        onClick={project_available ? () => {} : () => setShowMessageBox(true)}
        style={{ cursor: "pointer" }}
      >
        <div class="rounded border border-gray-500 p-4 hover:bg-gray-800 hover:border-white transition duration-300 ease-in-out">
          <div class="flex items-center mb-4">
            <img
              class="w-12 h-12 rounded-full mr-4"
              src={project_available ? project.path + "/panel.png" : "/404.png"}
              alt={project.name}
            />
            <h2 class="text-xl font-bold">{project.name}</h2>
          </div>
          <p class="text-gray-400">{project.desc}</p>
        </div>
      </a>
      {showMessageBox && (
        <MessageBox
          message={project_absent_message}
          onConfirm={() => setShowMessageBox(false)}
        />
      )}
    </li>
  );
}

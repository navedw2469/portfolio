import Navbar from "../Navbar";
import Image from "next/image";

const skills = [
  { name: "C", icon: "/c.svg", link: "" },
  { name: "C++", icon: "/c++.svg", link: "" },
  { name: "JavaScript", icon: "/javascript.svg", link: "" },
  { name: "Ruby", icon: "/ruby.svg", link: "" },
  { name: "Python", icon: "/python.svg", link: "" },
  { name: "HTML", icon: "/html.svg", link: "" },
  { name: "Ruby on Rails", icon: "/rails.svg", link: "" },
  { name: "ReactJS", icon: "/react.svg", link: "" },
  { name: "NextJS", icon: "/nextjs.svg", link: "" },
  { name: "CSS", icon: "/css.svg", link: "" },
  { name: "SQL", icon: "/sql.svg", link: "" },
  { name: "Tailwind CSS", icon: "/tailwind.svg", link: "" },
  { name: "OOPs", icon: "/oops.svg", link: "" },
  { name: "Data Structure", icon: "/data_structure.svg", link: "" },
  { name: "Algorithms", icon: "/algorithms.svg", link: "" },
  { name: "Git", icon: "/git.svg", link: "" },
  { name: "Github", icon: "/github.svg", link: "" },
  { name: "VS Code", icon: "/vscode.svg", link: "" },
];
const SkillBadge = ({ skill }) => (
  <div className="py-1 px-2 bg-slate-800 rounded-md text-xs flex gap-2 items-center">
    <Image src={skill.icon} alt={skill.name} width={20} height={20}></Image>
    <p className="font-medium">{skill.name}</p>
  </div>
);

function SkillsSection() {
  return (
    <div className="flex flex-wrap gap-2 flex-1">
      {skills.map((skill) => (
        <SkillBadge key={skill} skill={skill} />
      ))}
    </div>
  );
}

function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="fixed left-0 right-0 bottom-5 flex justify-center">
        <Navbar />
      </div>
      <div className="w-[768px] p-4 mt-6">
        <div className="flex" id="about">
          <div className="w-56 pr-8">
            <Image
              src="/photo_naved.jpg"
              alt="hi"
              width={150}
              height={150}
              className="rounded-xl"
            />
            <h1 className="font-medium text-xl mt-1">Naved Inam</h1>
            <p className="text-zinc-300">Software Developer</p>
          </div>
          <div className="w-fit text-wrap flex-1">
            <p>
              I am an M.Tech student at IIT Indore, with prior experience as an
              Associate Software Engineer at Cogoport, specializing in Full
              Stack Development.
            </p>
            <br />
            <p>
              I hold a B.Tech from IIIT Kalyani and am passionate about
              competitive programming and web development.
            </p>
          </div>
        </div>

        <hr className="my-6"></hr>

        <div className="flex" id="about">
          <div className="w-56">
            <h1>Experience</h1>
          </div>
          <div className="flex justify-between flex-1">
            <div>
              <p className="font-medium">Associate Software Engineer</p>
              <p className="font-light text-zinc-500">Cogoport Pvt. Ltd.</p>
            </div>
            <p className="flex flex-col justify-center font-light text-zinc-500 ">
              06/2022 - 07/2023
            </p>
          </div>
        </div>

        <hr className="my-6"></hr>

        <div className="flex" id="about">
          <div className="w-56">
            <h1>Education</h1>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex justify-between">
              <div>
                <p>Master of Technology</p>
                <p className="font-light text-zinc-500">
                  Indian Institute of Technology Indore
                </p>
              </div>
              <p className="flex flex-col justify-center font-light text-zinc-500 ">
                07/2023 - Present
              </p>
            </div>

            <div className="flex justify-between">
              <div>
                <p>Bachelor of Technology</p>
                <p className="font-light text-zinc-500">
                  Indian Institute of Information Technology Kalyani
                </p>
              </div>
              <p className="flex flex-col justify-center font-light text-zinc-500 ">
                08/2018 - 05/2022
              </p>
            </div>
          </div>
        </div>

        <hr className="my-6"></hr>

        <div className="flex" id="about">
          <div className="w-56">
            <h1>Skills</h1>
          </div>
          <SkillsSection />
        </div>
      </div>
    </div>
  );
}

export default Home;

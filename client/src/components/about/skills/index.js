import React from "react";
import SkillType from "./SkillType";
import { motion } from "framer-motion";

const h2 = `mt-64 font-bold text-8xl text-center`;
const skillsWrapper = `
    relative flex items-center justify-center w-full min-h-screen
    rounded-full bg-circularLight
`;
const skill = `
    flex items-center justify-center p-8
    rounded-full bg-dark font-semibold text-light shadow-dark
    cursor-pointer
`;

const skills = [
  { name: "HTML", x: "0vw", y: "-25vh" },
  { name: "CSS", x: "0vw", y: "-20vh" },
  { name: "Tailwind CSS", x: "0vw", y: "-15vh" },
  { name: "React", x: "15vw", y: "-18vh" },
  { name: "React Native", x: "15vw", y: "-13vh" },
  { name: "Remix", x: "18vw", y: "-6vh" },
  { name: "Next.js", x: "18vw", y: "-1vh" },
  { name: "Framer Motion", x: "15vw", y: "6vh" },
  { name: "MySQL", x: "-15vw", y: "-23vh" },
  { name: "Postgres", x: "-15vw", y: "-18vh" },
  { name: "MongoDB", x: "-15vw", y: "-13vh" },
  { name: "NodeJS", x: "-18vw", y: "-6vh" },
  { name: "Go", x: "-18vw", y: "-1vh" },
  { name: "Python", x: "-18vw", y: "4vh" },
  { name: "Jira", x: "0vw", y: "-45vh" },
  { name: "Figma", x: "0vw", y: "-40vh" },
  { name: "Mocha", x: "20vw", y: "-30vh" },
  { name: "Git", x: "0vw", y: "30vh" },
  { name: "GitHub", x: "0vw", y: "35vh" },
  { name: "GitLab", x: "0vw", y: "40vh" },
];

const Skills = () => {
  return (
    <div>
      <h2 className={h2}>Toolbox</h2>
      <div className={skillsWrapper}>
        <motion.div className={skill} whileHover={{ scale: 1.05 }}>
          WEB
        </motion.div>
        {skills?.map((skill) => (
          <SkillType name={skill.name} x={skill.x} y={skill.y} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

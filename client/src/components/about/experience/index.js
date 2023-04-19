import React from "react";
import Position from "./Position";

const experience = `my-64`;
const h2 = `font-bold text-8xl mb-32 w-full`;
const ulWrapper = `relative w-[75%] mx-auto`;
const ul = ``;
const li = ``;

const positions = [
  {
    title: "Associate Full Stack Engineer",
    company: "Fortress Information Security",
    companyURL: "https://www.fortressinfosec.com/home",
    time: "March 2022 - May 2023",
    location: "Orlando, FL/Remote",
    overview:
      "Responsible for developing and improving features for the Fortress M2V Marketplace, including building new tools for data analysis and visualization while providing accuracy, integrity and accessibility of compliance data.",
    duties: [
      {
        p1: "• bullet point 1",
        p2: "• bullet point 2",
        p3: "• bullet point 3",
        p4: "• bullet point 4",
      },
    ],
  },
  {
    title: "Help Desk Support Engineer",
    company: "Robbins Research International",
    companyURL: "https://www.tonyrobbins.com/",
    time: "March 2017 - May 2018",
    location: "San Diego, CA",
    overview:
      "Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.",
    duties: [
      {
        p1: "• bullet point 1",
        p2: "• bullet point 2",
        p3: "• bullet point 3",
        p4: "• bullet point 4",
      },
    ],
  },
];

const Experience = () => {
  return (
    <div className={experience}>
      <h2 className={h2}>Experience</h2>
      <div className={ulWrapper}>
        <ul className={ul}>
          {positions?.map((position) => (
            <Position
              title={position.title}
              company={position.company}
              companyURL={position.companyURL}
              location={position.location}
              time={position.time}
              overview={position.overview}
              duties={position.duties}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;

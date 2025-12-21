"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/UCT-logo.png",
    jobTitle: "Bsc(Eng) in Electrical & Computer Engineering",
    company: "University of Cape Town",
    jobType: "Student",
    duration: "Feb 2022 - Nov 2025",
    stuffIDid: [
      "Major in IoT Technology.",
      "Final year project on Aerocharge: Wireless charging for palm-sized drones",
      "Mentored and tutored students, providing academic and personal guidance.",
      "Developed skills in leadership, communication, and conflict resolution.",
    ],
  },
  {
    companyImg: "/megchem.jpeg",
    jobTitle: "Engineering Consultant Intern",
    company: "Megchem",
    jobType: "Internship",
    duration: "June 2024 - July 2024",
    stuffIDid: [
      "Conducted technical research on electrolysis systems (alkaline, PEM, and SOEC).",
      "Assessed local manufacturability, safety design, and environmental impacts.",
    ],
  },
    {
    companyImg: "/Secmet.jpeg",
    jobTitle: "Intern",
    company: "Secmet(Megchem) Pty. Ltd",
    jobType: "Electrician Assistant",
    duration: "Nov 2024 - Dec. 2024",
    stuffIDid: [
      "Worked on three-phase wiring and electrical maintenance in industrial environments.",
      "Gained exposure to safety procedures and electrical standards in heavy-industry operations.",
    ],
  },
    {
    companyImg: "/yaskawa-seeklogo.svg",
    jobTitle: "Assistant Technitian",
    company: "Yaskawa",
    jobType: "Internship",
    duration: "Dec 2024 - Feb. 2025, June 2025 - July. 2025",
    stuffIDid: [
      "Assisted in robotic arm servicing, servo drive configuration, and PLC troubleshooting for production.",
      "Developed familiarity with Yaskawa motion control, industrial safety standards, and diagnostic tools",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title>Education & Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-linear-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Automated Penguin Health Monitoring System",
      liveLink: "https://my-eportfolio-9efa8.web.app/pengiun.html",
      about:
        "An innovative conservation technology project developed as part of my EEE4113F Final Year Design at the University of Cape Town. The system was designed to monitor the health of endangered African penguins through a non-invasive, automated weighing platform. It combines load cells, RFID identification, and wireless data transmission to record penguin weight as they naturally walk across the platform with results displayed on a real-time data visualization dashboard.",
      stack: [
        "Power electronics",
        // "typescript",
        "Embedded systems",
        "Firebase",
        "Google API Integration",
      ],
      img: "/penguin_project_overview.jpeg",
      owner: "Quiklearn",
    },
    {
      title: "Aerocharge: Wireless Charger for a Palm-sized Microdrone(FYP)",
      liveLink: "#/home",
      about:
        "Developed a wireless power transfer system for the M5Stamp Fly ESP32-S3 microdrone to extend its operational capability beyond the 5-minute flight time limitation of its 300mAh battery. The project involved designing and simulating wireless power transfer coils using ANSYS Maxwell finite element analysis, developing power electronics circuits in MATLAB Simulink, and building a physical prototype to validate the simulation models. This system demonstrates the potential for continuous autonomous drone operation in confined spaces for applications such as warehouse monitoring, 24/7 surveillance, and fire detection in high-risk environments.",
      stack: ["PCB Design", "Embedded System ( C/C++ )", "Power Electronics"],
      img: "/Solace-Power-wireless-charger.jpg",
      owner: "Kealeboga Motlhankane",
    },


    
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Timeline />
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
          owner={work.owner}
        />
      ))}

      
    </section>
  );
}

import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";
import ContraButton from "./ContraButton";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        About Me!!!
      </AnimatedTitle>
      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            Hi there, welcome to my website! I'm Kea an Electrical and Computer Engineering graduate student at the University of Cape Town
            with a passion for building and problem-solving. My interests span control systems, embedded systems,
             and software development, and I&apos;m driven by the challenge of turning complex ideas into practical, 
             working solutions.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
           I&apos;ve gained experience across a wide range of projects and internships, 
           from designing controllers and working with MATLAB/Simulink Stateflow, 
           to building embedded systems and microcontroller-based applications, to developing mobile and web applications. 
           I enjoy blending both the hardware and software sides of engineering, whether it&apos;s tuning a control loop, implementing efficient algorithms, 
           or creating intuitive user interfaces.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            My ultimate goal is to grow into a role where I can design impactful technologies, contribute to innovation, 
            and continuously learn while making a difference in society.
            
            Wanna learn
            more? Here&apos;s <br className="hidden md:block" />
            <Link
              className="underline"
              href={
                "https://drive.google.com/file/d/1Rd-IB_5pxsGj4RDtHjEggPB392ND29xB/view?usp=sharing"
              }
            >
              my Curriculum vitae
            </Link>
            .
          </AnimatedBody>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Programming Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              React, Next.js,React Query,Git/GitHub,Python, MATLAB, Java, JavaScript(ES6+), HTML/CSS
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Design Tools & Platforms
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Simulink, Stateflow, Ansys Maxwell, Git/GitHub, Figma, Firebase
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Engineering Focus
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Control Systems, Embedded Systems, Circuit Design, Signal Processing, Motion Control
            </AnimatedBody>
          </div>
                    <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Certifications
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Yaskawa PLC Programming Basic, Yaskawa PLC Programming advanced 
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}

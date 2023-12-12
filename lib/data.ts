import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuSchool2, LuMilestone } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  //   {
  //     name: "Projects",
  //     hash: "#projects",
  //   },
  //   {
  //     name: "Skills",
  //     hash: "#skills",
  //   },
  //   {
  //     name: "Experience",
  //     hash: "#experience",
  //   },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Enrolled in OSU Nursing Program and USAF ROTC",
    location: "Columbus, OH",
    description:
      "I served in Detachment 645 in the Air Force ROTC program while pursuing a degree in Nursing at Ohio State University.",
    icon: React.createElement(LuMilestone),
    date: "2019",
  },
  {
    title: "Pediatrics Rotation",
    location: "Nationwide Children’s Hospital, OH",
    description:
      "Performed stoma care, delivered medications, and focused assessments for high-risk patients",
    icon: React.createElement(LuSchool2),
    date: "January - April, 2021",
  },
  {
    title: "TODO",
    location: "Columbus, OH",
    description: "Will be adding more of my experience here",
    icon: React.createElement(FaReact),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Cardiac Treatment",
  "Cardiac Monitoring",
  "Postpartum Examination",
  "Telemetry",
  "Infant Care",
  "Medication Administration",
  "Mental Health Assistance",
  "Burn Treatment",
  "Bedside Assistance",
  "CPR",
] as const;

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpservices from "@/public/corpservices.jpeg";
import dphub from "@/public/dphub.jpeg";
import meowtion from "@/public/meowtion.jpeg";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "FEU Institute of Technology",
        location: "Sampaloc, Manila",
        description:
            "I graduated with a Bachelor’s degree in Computer Science after four years of study and am pursuing a career in software development.",
        icon: React.createElement(LuGraduationCap),
        date: "2021 - 2025",
    },
    {
        title: "AI Developer Intern",
        location: "Quezon City",
        description:
            "I am an AI Developer for 6 months at RELX Reed Elsevier Philippines during my internship. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "Jan 2025 - July 2025",
    },
] as const;

export const projectsData = [
    {
        title: "Corporate Services Bot",
        description:
            "Develop an internal AI chatbot system for Corporate Services Team. ", //change desc
        tags: ["Python", "OpenAI API", "Chroma DB", "SentenceTransformers", "LlamaIndex" ,"Django"],    // change tags
        imageUrl: corpservices,   // change image
    },
    {
        title: "Data Protection Knowledge Hub",
        description:
            "Develop an internal AI chatbot system for Data Protection Team",
        tags: ["Python", "OpenAI API", "Chroma DB", "SentenceTransformers", "LlamaIndex", "Django", "Celery"],
        imageUrl: dphub,
    },
    {
        title: "Meowtion Capture",
        description:
            "A real-time cat behavior monitoring system that leverages CNN and YOLO model to identify and analyze cat behaviors.",
        tags: ["Python", "CNN", "YOLO", "SQL", "Android Studio"],
        imageUrl: meowtion,
    },
    //can add another project here - follow format
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "C++",
    "SQL",
    "Python",
    "Java",
    "Conversational AI",
    "RAG",
    "Ollama",
    "Django",
    "Git",
    "Linux",
    "LlamaIndex",
    "Vector Database",
    "SentenceTransformers",
    "Hugging Face",
    "Scikit-Learn",
    "Pandas",
    "LLM",
    "NLP",
    "Flask"
] as const;
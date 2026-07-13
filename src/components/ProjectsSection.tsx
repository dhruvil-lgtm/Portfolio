import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LiveProjectButton } from "./LiveProjectButton";
import { ImagePreview } from "./ImagePreview";

interface Project {
  number: string;
  title: string;
  category: string;
  type: string;
  link?: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "SaaSForge",
    category: "Personal",
    type: "Personal",
    link: "https://saas-boilerplate-generator.vercel.app/",
    col1Img1: "/saas3.png",
    col1Img2: "/saas2.png",
    col2Img: "/saas1.png",
  },
  {
    number: "02",
    title: "South Magic Cafe",
    category: "Client",
    type: "Client",
    link: "https://lovable.dev/projects/436b05e9-b0d8-4fdb-8b74-fc1af375d75b",
    col1Img1: "/southmagic1.png",
    col1Img2: "/southmagic2.png",
    col2Img: "/southmagic3.png",
  },
  {
    number: "03",
    title: "Aura.AI",
    category: "Personal",
    type: "Personal",
    link: "https://ai-workflow-site-nine.vercel.app/",
    col1Img1: "/aura1.png",
    col1Img2: "/aura2.png",
    col2Img: "/aura3.png",
  },
];

function ProjectCard({ project, index, totalCards, onImageClick }: { project: Project; index: number; totalCards: number; onImageClick: (src: string, title: string) => void; }) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.5", "end 0.5"],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={container} className="relative" style={{ height: "85vh" }}>
      <motion.div
        className="sticky rounded-[24px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
        style={{
          top: `${index * 28}px`,
          scale,
          transformOrigin: "top center",
        }}
      >
        {/* Top Row */}
        <div className="flex flex-wrap items-start justify-between mb-4 sm:mb-6 md:mb-8 gap-y-2">
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            {/* Number */}
            <span
              className="text-[#BBCCD7] font-black leading-none"
              style={{ fontSize: "clamp(2rem, 8vw, 100px)" }}
            >
              {project.number}
            </span>
            {/* Category tag */}
            <span className="text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm">
              {project.category}
            </span>
          </div>
          {/* Project Name + Button */}
          <div className="flex items-center gap-3 sm:gap-6">
            <h3
              className="text-[#D7E2EA] font-medium uppercase tracking-wide"
              style={{ fontSize: "clamp(0.8rem, 1.8vw, 1.5rem)" }}
            >
              {project.title}
            </h3>
            <LiveProjectButton href={project.link} />
          </div>
        </div>

        {/* Bottom Row - Image Grid */}
        <div className="flex gap-3 sm:gap-4 md:gap-6">
          {/* Left column - 40% */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6" style={{ width: "40%" }}>
            <img
              src={project.col1Img1}
              alt={`${project.title} image 1`}
              loading="lazy"
              className="w-full rounded-[20px] sm:rounded-[40px] md:rounded-[60px] object-cover cursor-pointer hover:opacity-80 transition-opacity duration-200"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
              onClick={() => onImageClick(project.col1Img1, project.title)}
            />
            <img
              src={project.col1Img2}
              alt={`${project.title} image 2`}
              loading="lazy"
              className="w-full rounded-[20px] sm:rounded-[40px] md:rounded-[60px] object-cover cursor-pointer hover:opacity-80 transition-opacity duration-200"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
              onClick={() => onImageClick(project.col1Img2, project.title)}
            />
          </div>
          {/* Right column - 60% */}
          <div style={{ width: "60%" }}>
            <img
              src={project.col2Img}
              alt={`${project.title} image 3`}
              loading="lazy"
              className="w-full h-full rounded-[20px] sm:rounded-[40px] md:rounded-[60px] object-cover cursor-pointer hover:opacity-80 transition-opacity duration-200"
              onClick={() => onImageClick(project.col2Img, project.title)}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const totalCards = projects.length;
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [previewTitle, setPreviewTitle] = useState("");

  const handleImageClick = (src: string, title: string) => {
    setPreviewImage(src);
    setPreviewTitle(title);
  };

  return (
    <section id="projects" className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2
        className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-20 sm:mb-24 md:mb-32"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Project
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            totalCards={totalCards}
            onImageClick={handleImageClick}
          />
        ))}
      </div>

      <ImagePreview
        src={previewImage}
        alt={previewTitle}
        onClose={() => setPreviewImage(null)}
      />
    </section>
  );
}

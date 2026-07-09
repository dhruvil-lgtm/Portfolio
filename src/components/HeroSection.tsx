import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import { ContactButton } from "./ContactButton";

export function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-x-clip">
      {/* Navbar */}
      <FadeIn as="nav" delay={0} y={-20} className="flex justify-center sm:justify-between gap-4 sm:gap-0 px-6 md:px-10 pt-6 md:pt-8">
        {["About", "Services", "Projects", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {link}
          </a>
        ))}
      </FadeIn>

      {/* Hero Portrait - centered on mobile, bottom on sm+ */}
      <FadeIn
        as="div"
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[220px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet padding={150} strength={3}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Dhruvil portrait"
            className="w-full h-auto"
          />
        </Magnet>
      </FadeIn>

      {/* Hero Heading */}
      <div className="flex-1 flex items-center justify-center">
        <FadeIn as="div" delay={0.15} y={40} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw] mt-6 sm:mt-4 md:-mt-5 px-4">
            Hi, i&apos;m dhruvil
          </h1>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div id="contact" className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
        >
          An AI 3d CREATOR DRIVEN BY CRAFTING SMOOTH AND UNFORGETTABLE PROJECTS
        </FadeIn>
        <FadeIn as="div" delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}

import { FadeIn } from "./FadeIn";

const services = [
  {
    number: "01",
    title: "AI Integration",
    description:
      "Leveraging artificial intelligence to build smarter, faster, and more intuitive websites that adapt to user needs and streamline workflows.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Crafting adaptable, user-centered interfaces with seamless experiences that feel natural and look stunning across every device.",
  },
  {
    number: "03",
    title: "Branding",
    description:
      "Building cohesive visual identities — from logos to full brand systems — that communicate a clear, memorable, and distinctive presence.",
  },
  {
    number: "04",
    title: "Web Design",
    description:
      "Designing smooth, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
  {
    number: "05",
    title: "Video Editing",
    description:
      "Polishing raw footage into compelling visual stories with seamless cuts, dynamic transitions, and professional-grade color grading.",
  },
];

export function ServicesSection() {
  return (
    <section id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn
            key={service.number}
            as="div"
            delay={i * 0.1}
            y={20}
            className="flex items-start gap-4 sm:gap-6 md:gap-8 py-8 sm:py-10 md:py-12 border-b"
            style={{
              borderColor: i < services.length - 1 ? "rgba(12, 12, 12, 0.15)" : "transparent",
            }}
          >
            {/* Number */}
            <span
              className="text-[#0C0C0C] font-black leading-none flex-shrink-0"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {service.number}
            </span>

            {/* Name + Description */}
            <div className="flex flex-col pt-2 sm:pt-3 md:pt-4">
              <h3
                className="text-[#0C0C0C] font-medium uppercase leading-none"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {service.title}
              </h3>
              <p
                className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60 mt-2"
                style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

import { MessageCircle } from "lucide-react";

function InstagramIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function GitHubIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function FooterSection() {
  return (
    <footer className="bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-5 sm:px-8 md:px-10 py-10 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <p className="hero-heading text-2xl font-black uppercase tracking-wide">
            Dhruvil
          </p>
          <p className="text-[#646973] font-light text-sm mt-1 tracking-wide">
            AI Creator &amp; Designer
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://wa.me/918010302250"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA] hover:text-[#BBCCD7] transition-colors duration-200"
            aria-label="WhatsApp"
          >
            <MessageCircle size={28} />
          </a>
          <a
            href="https://instagram.com/dhruvill.shah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA] hover:text-[#BBCCD7] transition-colors duration-200"
            aria-label="Instagram"
          >
            <InstagramIcon size={28} />
          </a>
          <a
            href="https://github.com/dhruvil-lgtm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D7E2EA] hover:text-[#BBCCD7] transition-colors duration-200"
            aria-label="GitHub"
          >
            <GitHubIcon size={28} />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#D7E2EA]/5 text-center">
        <p className="text-[#646973] font-light text-xs tracking-wide">
          &copy; {new Date().getFullYear()} Dhruvil. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Instagram, Twitter, Youtube } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-red/20 bg-carbon-mid mt-0">
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-display font-black text-[28px] tracking-[0.06em] uppercase mb-3">
              CL<span className="text-red">16</span>
            </div>
            <p className="text-[13px] text-cream/50 leading-relaxed mb-4">
              A fan universe built for the Tifosi.
            </p>
            <p className="text-[11px] text-cream/25 leading-relaxed">
              Not affiliated with Scuderia Ferrari, the FIA, or Formula One
              Management. Fan-operated. Content used for non-commercial fan
              purposes.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-cream/40 mb-4">
              Explore
            </div>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-cream/60 hover:text-cream transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/shop"
                className="text-[13px] text-cream/60 hover:text-cream transition-colors duration-150"
              >
                The Store
              </Link>
            </nav>
          </div>

          {/* Social + Newsletter */}
          <div>
            <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-cream/40 mb-4">
              Connect
            </div>
            <div className="flex gap-4 mb-8">
              <SocialLink href="https://instagram.com" label="Instagram">
                <Instagram size={18} />
              </SocialLink>
              <SocialLink href="https://x.com" label="X / Twitter">
                <Twitter size={18} />
              </SocialLink>
              <SocialLink href="https://youtube.com" label="YouTube">
                <Youtube size={18} />
              </SocialLink>
            </div>
            <div>
              <p className="text-[12px] text-cream/50 mb-3">
                Race weekends only. No noise.
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-surface-2 border border-white/[0.08] rounded-sm px-3 py-2 text-[12px] text-cream placeholder:text-cream/30 focus:outline-none focus:border-red transition-colors"
                />
                <button
                  type="submit"
                  className="bg-red text-white text-[10px] font-bold tracking-[0.08em] uppercase px-4 py-2 rounded-sm hover:bg-red-light transition-colors"
                >
                  Sign up →
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-cream/30">
            © 2024 CL16 Fan Universe · Built by fans, for fans
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[11px] text-cream/30 hover:text-cream/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[11px] text-cream/30 hover:text-cream/60 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center border border-white/[0.1] rounded-sm text-cream/50 hover:text-cream hover:border-red transition-all duration-150"
    >
      {children}
    </a>
  );
}

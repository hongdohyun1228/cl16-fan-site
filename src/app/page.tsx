import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { EditorialSection } from "@/components/sections/EditorialSection";
import { StoryTeaser } from "@/components/sections/StoryTeaser";
import { ZoneNav } from "@/components/sections/ZoneNav";
import { PullQuote } from "@/components/sections/PullQuote";

export const metadata: Metadata = {
  title: "Charles Leclerc — CL16 Official Fan Universe",
  description:
    "The ultimate fan destination for Charles Leclerc and Scuderia Ferrari. Race results, biography, media, community and more.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EditorialSection />
      <StatsStrip />
      <StoryTeaser />
      <ZoneNav />
      <PullQuote />
    </>
  );
}

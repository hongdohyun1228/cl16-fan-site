import type { Metadata } from "next";
import { StoryHero } from "./components/StoryHero";
import { ChapterOrigins } from "./components/ChapterOrigins";
import { ChapterAscent } from "./components/ChapterAscent";
import { ChapterFerrari } from "./components/ChapterFerrari";
import { ChapterHunt } from "./components/ChapterHunt";
import { ChapterMonaco } from "./components/ChapterMonaco";
import { BeyondCockpit } from "./components/BeyondCockpit";
import { ChapterNav } from "./components/ChapterNav";

export const metadata: Metadata = {
  title: "The Charles Leclerc Story — Monaco to Monaco",
  description:
    "The full biography of Charles Leclerc, from his childhood in Monaco to World Championship glory with Ferrari.",
};

export default function StoryPage() {
  return (
    <div className="relative">
      <StoryHero />
      <div id="ch1"><ChapterOrigins /></div>
      <div id="ch2"><ChapterAscent /></div>
      <div id="ch3"><ChapterFerrari /></div>
      <div id="ch4"><ChapterHunt /></div>
      <div id="ch5"><ChapterMonaco /></div>
      <BeyondCockpit />
      <ChapterNav />
    </div>
  );
}

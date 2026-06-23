import type { Metadata } from "next";
import { RaceVaultClient } from "./RaceVaultClient";

export const metadata: Metadata = {
  title: "Charles Leclerc Race Results — Every Race, Every Win",
  description:
    "Complete race-by-race results for Charles Leclerc's F1 career. Wins, poles, fastest laps, and career statistics.",
};

export default function RacesPage() {
  return <RaceVaultClient />;
}

export type TyreCompound = "SOFT" | "MEDIUM" | "HARD" | "INTER" | "WET";
export type RaceResult = "P1" | "P2" | "P3" | "POINTS" | "DNF" | "DNS";
export type EmotionType =
  | "JOY"
  | "FOCUS"
  | "FRUSTRATION"
  | "DISAPPOINTMENT"
  | "DISBELIEF"
  | "DETERMINATION";

export interface Race {
  id: string;
  season: number;
  round: number;
  circuit: string;
  country: string;
  flag: string;
  date: string;
  result: string;
  position: number | null;
  laps: number;
  gap: string | null;
  fastestLap: boolean;
  points: number;
  dnfReason?: string;
  editorial: string;
  radioClip?: string;
}

export interface StatCard {
  value: string;
  unit: string;
  label: string;
  isGold?: boolean;
}

export interface RadioClip {
  id: string;
  race: string;
  season: number;
  lap: number;
  emotion: EmotionType;
  engineer: string;
  charles: string;
  durationSecs: number;
}

export interface Quote {
  id: string;
  text: string;
  context: string;
  year: number;
  emotion: "DETERMINED" | "REFLECTIVE" | "PASSIONATE" | "HONEST" | "DISBELIEF" | "JOY";
}

export interface TierLevel {
  id: string;
  name: string;
  icon: string;
  unlock: string;
  description: string;
  privileges: string[];
  color: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  isLimited?: boolean;
  limitedTo?: number;
  badge?: string;
}

export interface TriviaQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
  category: string;
  explanation: string;
}

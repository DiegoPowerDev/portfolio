import { create } from "zustand";

const themes = [
  {
    video: "/background1.mp4",
    background: "#000000",
    theme: "#1ee926",
    textColor: "#fafafa",
    fontFamily: "var(--font-first)",
  },
  {
    video: "/background2.mp4",
    background: "#EEEBE5",
    theme: "#5A3F2F",
    textColor: "#000000",
    fontFamily: "var(--font-second)",
  },
  {
    video: "/background3.mp4",
    background: "#000017",
    theme: "#48a8ff",
    textColor: "#ffffff",
    fontFamily: "var(--font-third)",
  },
  {
    video: "/background4.mp4",
    background: "#02010F",
    theme: "#B40D10",
    textColor: "#ffffff",
    fontFamily: "var(--font-fourth)",
  },
];

interface Theme {
  video: string;
  background: string;
  textColor: string;
  theme: string;
  fontFamily: string;
}

interface themeStore {
  position: number;
  theme: Theme; // Infiere el tipo automáticamente
  incrementPosition: () => void;
}

export const useThemeStore = create<themeStore>((set) => ({
  position: 0,
  theme: themes[0],
  incrementPosition: () => {
    set((state) => {
      const nextPosition = (state.position + 1) % themes.length;

      return {
        position: nextPosition,
        theme: themes[nextPosition],
      };
    });
  },
}));

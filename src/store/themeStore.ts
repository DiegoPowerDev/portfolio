import { create } from "zustand";

const themes = [
  {
    video: "/background1.mp4",
    textColor: "#1A1A1A",
    theme: "#1ee926",
    hover: "#67ff6690",
  },
  {
    video: "/background2.mp4",
    textColor: "#1A1A1A",
    theme: "#1ee926",
    hover: "#67ff6690",
  },
  {
    video: "/background3.mp4",
    textColor: "#1A1A1A",
    theme: "#1ee926",
    hover: "#67ff6690",
  },
];

interface themeStore {
  position: number;
  theme: (typeof themes)[0]; // Infiere el tipo automáticamente
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

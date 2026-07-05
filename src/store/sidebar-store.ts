"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type SidebarStore = {
  collapsed: boolean;
  hydrated: boolean;

  toggleSidebar: () => void;
  setHydrated: () => void;
};

export const useSidebarStore = create<SidebarStore>()(
  persist(
    (set) => ({
      collapsed: false,
      hydrated: false,

      toggleSidebar: () =>
        set((state) => ({
          collapsed: !state.collapsed,
        })),

      setHydrated: () =>
        set({
          hydrated: true,
        }),
    }),
    {
      name: "KITU-sidebar",
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    },
  ),
);

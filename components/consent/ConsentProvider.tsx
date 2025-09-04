"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type ConsentCategories = {
  necessary: boolean; // always true and not toggleable
  analytics: boolean;
};

type ConsentState = {
  categories: ConsentCategories;
  // Whether we should show the banner (no stored preferences yet)
  showBanner: boolean;
  // Actions
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (categories: Omit<ConsentCategories, "necessary">) => void;
  openSettings: () => void;
  closeBanner: () => void;
};

const ConsentContext = createContext<ConsentState | null>(null);

const STORAGE_KEY = "consent.v1";

function readStoredConsent(): ConsentCategories | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed.analytics === "boolean"
    ) {
      return { necessary: true, analytics: parsed.analytics } as ConsentCategories;
    }
  } catch {}
  return null;
}

function writeStoredConsent(categories: ConsentCategories) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ analytics: categories.analytics })
    );
  } catch {}
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<ConsentCategories>({
    necessary: true,
    analytics: false,
  });
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    // On mount, read stored preferences (client-only)
    const stored = readStoredConsent();
    if (stored) {
      setCategories(stored);
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const next = { necessary: true, analytics: true } as ConsentCategories;
    setCategories(next);
    writeStoredConsent(next);
    setShowBanner(false);
  };

  const rejectAll = () => {
    const next = { necessary: true, analytics: false } as ConsentCategories;
    setCategories(next);
    writeStoredConsent(next);
    setShowBanner(false);
  };

  const savePreferences = (updates: Omit<ConsentCategories, "necessary">) => {
    const next = { necessary: true, analytics: !!updates.analytics } as ConsentCategories;
    setCategories(next);
    writeStoredConsent(next);
    setShowBanner(false);
  };

  const openSettings = () => setShowBanner(true);
  const closeBanner = () => setShowBanner(false);

  const value = useMemo<ConsentState>(
    () => ({ categories, showBanner, acceptAll, rejectAll, savePreferences, openSettings, closeBanner }),
    [categories, showBanner]
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider");
  return ctx;
}


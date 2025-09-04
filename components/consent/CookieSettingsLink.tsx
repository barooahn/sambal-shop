"use client";

import React from "react";
import { useConsent } from "@/components/consent/ConsentProvider";

export default function CookieSettingsLink({
  className,
  children = "Cookie settings",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { openSettings } = useConsent();
  return (
    <button type="button" onClick={openSettings} className={className} aria-label="Open cookie settings">
      {children}
    </button>
  );
}


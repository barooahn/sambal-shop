"use client";

import React from "react";
import { trackExternalLink } from "./GoogleAnalytics";

interface TrackedExternalLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  linkText?: string; // optional explicit text label for analytics
}

export default function TrackedExternalLink({
  href,
  linkText,
  onClick,
  children,
  ...rest
}: TrackedExternalLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      const label = linkText || rest["aria-label"]?.toString() || href;
      trackExternalLink(href, label);
    } catch {}
    if (onClick) onClick(e);
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}


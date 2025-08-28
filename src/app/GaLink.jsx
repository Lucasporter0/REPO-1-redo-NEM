// src/components/GaLink.jsx
"use client";

/**
 * Minimal analytics-aware link for CTAs.
 * Fires gtag('event', 'generate_lead', ...) when clicked, if GA is present.
 */
export default function GaLink({ href, label = "CTA", className, children, ...rest }) {
  const onClick = () => {
    try {
      // Safe optional call when GA is present
      window.gtag?.("event", "generate_lead", {
        event_category: "CTA",
        event_label: label || href,
        value: 1,
      });
    } catch {}
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
}

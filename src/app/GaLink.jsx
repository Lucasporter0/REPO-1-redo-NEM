// src/components/GaLink.jsx
"use client";

/**
 * CTA link that safely fires a GA 'generate_lead' event (if GA is present).
 */
export default function GaLink({ href, label = "CTA", className, children, ...rest }) {
  const onClick = () => {
    try {
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

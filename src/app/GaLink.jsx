// src/components/GaLink.jsx
"use client";

export default function GaLink({ href, label, className, children, ...rest }) {
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
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}

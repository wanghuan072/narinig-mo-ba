export type IconName =
  | "arrow"
  | "book"
  | "close"
  | "coins"
  | "eye"
  | "lantern"
  | "maximize"
  | "menu"
  | "message"
  | "mouse"
  | "sound"
  | "theater"
  | "warning";

export function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5z"/></>,
    close: <><path d="m6 6 12 12"/><path d="M18 6 6 18"/></>,
    coins: <><ellipse cx="9" cy="9" rx="6" ry="3"/><path d="M3 9v4c0 1.7 2.7 3 6 3 1.1 0 2.1-.1 3-.4"/><path d="M15 11c3.3 0 6 1.3 6 3s-2.7 3-6 3-6-1.3-6-3"/><path d="M9 14v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4"/></>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12"/><circle cx="12" cy="12" r="2.5"/></>,
    lantern: <><path d="M9 3h6"/><path d="M10 3V1.5h4V3"/><path d="m8 6 1-3h6l1 3"/><path d="M7 7h10l-1 14H8z"/><path d="M9 17h6"/><path d="M10 14c0-2 2-4 2-4s2 2 2 4a2 2 0 0 1-4 0"/></>,
    maximize: <><path d="M8 3H3v5"/><path d="M16 3h5v5"/><path d="M8 21H3v-5"/><path d="M16 21h5v-5"/></>,
    menu: <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>,
    message: <path d="M4 5h16v11H8l-4 4z"/>,
    mouse: <><rect x="7" y="2" width="10" height="20" rx="5"/><path d="M12 2v6"/></>,
    sound: <><path d="M5 9v6h4l5 4V5L9 9z"/><path d="M17 9a4 4 0 0 1 0 6"/><path d="M19 6a8 8 0 0 1 0 12"/></>,
    theater: <><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M7 3v4M17 3v4M7 17v4M17 17v4"/></>,
    warning: <><path d="M12 3 2.5 20h19z"/><path d="M12 9v4"/><path d="M12 17h.01"/></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

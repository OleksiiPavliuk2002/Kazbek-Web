import { useState, useEffect } from "react";

const NAV = [
  { label: "Про нас", href: "#about" },
  { label: "Меню", href: "#menu" },
  { label: "Кухня", href: "#cuisine" },
  { label: "Бронь", href: "#booking" },
  { label: "Контакти", href: "#contacts" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <header className={scrolled ? "scrolled" : ""}>
        <a className="logo" href="#top">
          🌿 Казбек <span>· Кавказька кухня</span>
        </a>

        <nav>
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        <button
          className={`burger ${open ? "open" : ""}`}
          onClick={() => setOpen((p) => !p)}
          aria-label="Меню"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {NAV.map((n) => (
          <a key={n.href} href={n.href} onClick={close}>
            {n.label}
          </a>
        ))}
      </div>
    </>
  );
}

"use client";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { MobileNav } from "@/components/layout/MobileNav";

const items = [{ label: "Home", href: "#top" }, ...site.nav];
export function Header() {
  const [active, setActive] = useState("#top");
  useEffect(() => {
    const update = () => {
      let current = "#top";
      for (const item of items) {
        const element = document.querySelector(item.href);
        if (element && element.getBoundingClientRect().top <= 180) current = item.href;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a href="#top" className="brand" aria-label={site.name + ", home"}><span>Software Developer</span><span>Web &amp; Android</span></a>
        <nav aria-label="Primary" className="desktop-nav">
          <ul>{items.map(item => <li key={item.href}><a href={item.href} aria-current={active === item.href ? "location" : undefined}>{item.label}</a></li>)}</ul>
        </nav>
        <span className="availability"><span aria-hidden="true" />Open to work</span>
        <MobileNav items={items} />
      </div>
    </header>
  );
}

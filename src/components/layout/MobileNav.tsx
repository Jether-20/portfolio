"use client";
import { useRef, useId } from "react";
import type { NavItem } from "@/content/site";
import { MenuIcon, CloseIcon } from "@/components/ui/Icons";

export function MobileNav({ items }: { items: readonly NavItem[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const id = useId();
  const close = () => dialog.current?.close();
  return (
    <div className="mobile-nav">
      <button ref={trigger} type="button" className="menu-button" aria-label="Open menu" aria-haspopup="dialog" aria-controls={id} onClick={() => dialog.current?.showModal()}><MenuIcon className="h-6 w-6" /></button>
      <dialog ref={dialog} id={id} aria-label="Site menu" className="mobile-dialog" onClose={() => trigger.current?.focus()}>
        <button type="button" className="menu-button close-menu" aria-label="Close menu" onClick={close}><CloseIcon className="h-6 w-6" /></button>
        <nav aria-label="Mobile"><ul>{items.map(item => <li key={item.href}><a href={item.href} onClick={close}>{item.label}</a></li>)}</ul></nav>
      </dialog>
    </div>
  );
}

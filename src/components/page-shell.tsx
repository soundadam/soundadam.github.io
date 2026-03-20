import { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="flex-1">
      <section className="mx-auto flex w-full max-w-6xl flex-col px-5 pb-16 pt-6 sm:px-8 lg:px-10">
        <SiteHeader />
        {children}
        <SiteFooter />
      </section>
    </main>
  );
}

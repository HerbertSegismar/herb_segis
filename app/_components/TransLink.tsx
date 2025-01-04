"use client";
import React, { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface TransLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

const timer = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 600);
  });
};

export const TransLink = ({ children, href, ...props }: TransLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Link
      onClick={async (e) => {
        e.preventDefault();
        const body = document.querySelector("body");
        body?.classList.add("page-transition");
        {href !== pathname && await timer()};
        router.push(href);
        body?.classList.remove("page-transition");

      }}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};

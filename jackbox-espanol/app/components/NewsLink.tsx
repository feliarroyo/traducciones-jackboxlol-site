"use client";
import Link from "next/link";
import { ReactNode } from "react";

interface NewsLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

export default function NewsLink({ href, className, children }: NewsLinkProps) {
  const handleClick = () => {
    sessionStorage.setItem("came-from-news", "true");
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({ href, children, className = "" }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 px-6 py-3 rounded-md font-medium transition-colors duration-200 ${className}`}
    >
      {children}
    </a>
  );
}

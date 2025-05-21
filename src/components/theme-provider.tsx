"use client";

import * as React from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: string;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <div className="contents">{children}</div>;
}

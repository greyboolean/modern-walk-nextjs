"use client"

import { CartProvider, WatchlistProvider } from "@/context";
import { ClerkProvider } from "@clerk/nextjs";

export type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ClerkProvider>
      <WatchlistProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </WatchlistProvider>
    </ClerkProvider>
  );
};

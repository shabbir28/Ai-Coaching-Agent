"use client";
import React, { Suspense } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import AuthProvider from "./AuthProvider";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export default function Provider({ children }) {
  return (
    <ConvexProvider client={convex}>
      {/* Suspense boundary so useUser() can load safely */}
      <Suspense fallback={<div className="text-center p-4">Loading user...</div>}>
        <AuthProvider>{children}</AuthProvider>
      </Suspense>
    </ConvexProvider>
  );
}

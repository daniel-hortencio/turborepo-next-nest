"use client";

import { Toaster } from "@repo/ui/components";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const { status } = useSession();

  if (status === "authenticated") {
    redirect("/dashboard");
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {children}
      <Toaster />
    </div>
  );
}
import Navbar from "@/components/navbar/Navbar";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full">
        <Navbar />
        {children}
      </div>
    </>
  );
}

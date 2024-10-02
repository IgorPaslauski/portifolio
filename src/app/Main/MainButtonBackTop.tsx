"use client";
import { ArrowUpIcon } from "lucide-react";

export function MainButtonBackTop() {
  return (
    <button
      onClick={() => {
        const main = document.getElementById("MainConteudo");
        main?.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="fixed bottom-4 right-6 bg-blue-500 text-white rounded-md p-2"
    >
      <ArrowUpIcon className="h-6 w-6" />
    </button>
  );
}

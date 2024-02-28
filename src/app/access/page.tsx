"use client";

import AccessLayout from "@/components/AccessLayout";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const logged = useState(false);

  if (logged) {
    //envia pra dashboard
  }
  return (
    <AccessLayout
      title="Fazer Login"
      subtitle="Accesar seu feed de desafios fitness"
    >
      <form>
        <input
          className="mb-3 w-full rounded-md border border-gray-400 px-3 py-2"
          type="email"
          placeholder="E-mail"
        />
        <input
          className="mb-2 w-full rounded-md border border-gray-400 px-3 py-2"
          type="password"
          placeholder="Senha"
        />
        <span>Esqueceu seu e-mail?</span>
        <div className="mt-10 flex w-full columns-2 gap-8">
          <button className="w-full rounded-xl bg-gray-800 px-4 py-2 font-bold text-white hover:bg-gray-600">
            Criar conta
          </button>
          <button className="w-full rounded-xl bg-gray-800 px-4 py-2 font-bold text-white hover:bg-gray-600">
            Login
          </button>
        </div>
      </form>
    </AccessLayout>
  );
}

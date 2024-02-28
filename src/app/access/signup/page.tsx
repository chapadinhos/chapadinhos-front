import AccessLayout from "@/components/AccessLayout";

export default function Page() {
  return (
    <AccessLayout title="Criar uma conta" subtitle="Insira suas lorem ipsum">
      <form>
        <input
          className="mb-3 w-full rounded-md border border-gray-400 px-3 py-2"
          type="text"
          placeholder="Nome"
        />
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
        <div className="mt-12 flex w-full">
          <button className="w-full rounded-xl bg-gray-800 px-4 py-2 font-bold text-white hover:bg-gray-600">
            Avançar
          </button>
        </div>
      </form>
    </AccessLayout>
  );
}

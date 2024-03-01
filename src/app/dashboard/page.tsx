export default function Page() {
  return (
    <div className="p-10">
      <h4 className="text-h4 font-bold">Convites</h4>
      <div className="h-[230px] w-full rounded-[20px] bg-white drop-shadow-md"></div>
      <div className="flex w-full place-content-center">
        <div className="mx-1 my-4 h-2 w-2 rounded-full bg-gray-500"></div>
        <div className="mx-1 my-4 h-2 w-2 rounded-full bg-gray-300"></div>
        <div className="mx-1 my-4 h-2 w-2 rounded-full bg-gray-300"></div>
        <div className="mx-1 my-4 h-2 w-2 rounded-full bg-gray-300"></div>
        <div className="mx-1 my-4 h-2 w-2 rounded-full bg-gray-300"></div>
      </div>

      <h4 className="text-h4 font-bold">Desafios ativos</h4>
      {/* flex */}
      <div className="-mx-4 flex w-full flex-wrap justify-between gap-y-8">
        <div className="mx-4 h-[200px] w-[200px] rounded-[20px] bg-white drop-shadow-md"></div>
        <div className="mx-4 h-[200px] w-[200px] rounded-[20px] bg-white drop-shadow-md"></div>
        <div className="mx-4 h-[200px] w-[200px] rounded-[20px] bg-white drop-shadow-md"></div>
        <div className="mx-4 h-[200px] w-[200px] rounded-[20px] bg-white drop-shadow-md"></div>
        <div className="mx-4 h-[200px] w-[200px] rounded-[20px] bg-white drop-shadow-md"></div>
        <div className="mx-4 h-[200px] w-[200px] rounded-[20px] bg-white drop-shadow-md"></div>
        <div className="mx-4 h-[200px] w-[200px] rounded-[20px] bg-white drop-shadow-md"></div>
        <div className="mx-4 h-[200px] w-[200px] rounded-[20px] bg-white drop-shadow-md"></div>
      </div>

      {/* grid */}
      <div className="w-full">
        <div className="grid-cols-auto-fill-200 grid grid-flow-col gap-8">
          <div className="h-[200px] w-[200px] rounded-[20px] bg-white drop-shadow-md"></div>
          <div className="h-[200px] w-[200px] rounded-[20px] bg-white drop-shadow-md"></div>
          <div className="h-[200px] w-[200px] rounded-[20px] bg-white drop-shadow-md"></div>
          <div className="h-[200px] w-[200px] rounded-[20px] bg-white drop-shadow-md"></div>
          <div className="h-[200px] w-[200px] rounded-[20px] bg-white drop-shadow-md"></div>
          <div className="h-[200px] w-[200px] rounded-[20px] bg-white drop-shadow-md"></div>
          <div className="h-[200px] w-[200px] rounded-[20px] bg-white drop-shadow-md"></div>
          <div className="h-[200px] w-[200px] rounded-[20px] bg-white drop-shadow-md"></div>
          <div className="h-[200px] w-[200px] rounded-[20px] bg-white drop-shadow-md"></div>
          <div className="h-[200px] w-[200px] rounded-[20px] bg-white drop-shadow-md"></div>
        </div>
      </div>
    </div>
  );
}

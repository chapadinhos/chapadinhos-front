import Image from "next/image";

export default function Header(props: any) {
  let logged = false;

  if (logged) {
    return (
      <div className="fixed z-[999] flex h-[80px] w-full content-center justify-between bg-white">
        <p className="text-h1 ml-10 leading-[1.8em]">LOGO</p>
        <div className="flex h-[40px] w-fit columns-2 self-center">
          <button className="text-h1 w-[40px] rounded-full bg-gray-300 px-2 pt-2 font-light leading-[0.5em] text-gray-400">
            +
          </button>
          <Image
            className="ml-2 mr-4 rounded-full"
            src="/placeholder.png"
            width="40"
            height="40"
            alt="Imagem de perfil"
          ></Image>
        </div>
      </div>
    );
  } else {
    return (
      <div className="fixed z-[999] grid h-[80px] w-full place-items-center bg-white">
        <p className="text-h1">LOGO</p>
      </div>
    );
  }
}

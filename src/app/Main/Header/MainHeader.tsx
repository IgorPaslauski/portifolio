import Image from "next/image";
import { MainHeaderActions } from "./MainHeaderActions";

export function MainHeader() {
  return (
    <>
      <div className="flex w-full gap-5 flex-wrap">
        <Image
          className="rounded-full max-w-80"
          src={`${process.env.REACT_APP_API_URL}/images/profile.jpg`}
          alt="Logo"
          width={400}
          height={400}
        />
        <div className="flex flex-col flex-wrap max-w-3xl gap-5">
          <h1 className="text-4xl font-bold">
            Ígor Paslauski Pedroso de Oliveira
          </h1>
          <h2 className="text-2xl">Desenvolvedor Fullstack</h2>
          <p className="text-justify">
            Sou um desenvolvedor Fullstack com experiência em diversas
            tecnologias. Atualmente estou trabalhando com React, Next.js e
            TailwindCSS.
          </p>
          <MainHeaderActions />
        </div>
      </div>
    </>
  );
}

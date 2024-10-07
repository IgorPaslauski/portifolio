import { MainConteudoDto } from "../models/Main/MainContedoDto";
import { MainButtonBackTop } from "./MainButtonBackTop";
import { MainConteudo } from "./MainConteudo/MainConteudo";
import { MainHeader } from "./Header/MainHeader";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import { MainConteudoSkeleton } from "./MainConteudo/MainConteudoSkeleton";
import { CertificateDto } from "../models/Main/certificate/CertificateDto";
import { MainCertificado } from "./MainCertificado/MainCertificado";

const retornarCertificates = async () => {
  const listaConteudo: MainConteudoDto[] = [];

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/data/certificates.json`
  );

  const certificates = await response.json();

  certificates.certificates.forEach((certificate: CertificateDto) => {
    const conteudo = new MainConteudoDto();
    conteudo.title = certificate.title;
    conteudo.conteudo = (
      <>
        <MainCertificado certificate={certificate} />
      </>
    );
    listaConteudo.push(conteudo);
  });

  return listaConteudo;
};

export async function Main() {
  const conteudos = await retornarCertificates();

  const tagConteudos = conteudos.map((conteudo: MainConteudoDto) => (
    <>
      <Separator className="my-4" />
      <Suspense fallback={<MainConteudoSkeleton />}>
        {conteudo.conteudo}
      </Suspense>
    </>
  ));

  const conteudoCertificados = new MainConteudoDto();
  conteudoCertificados.title = "Certificados";
  conteudoCertificados.conteudo = tagConteudos;

  return (
    <div
      className="flex w-4/5 p-4 h-screen flex-col overflow-auto"
      id="MainConteudo"
    >
      <MainHeader />
      <MainConteudo conteudo={conteudoCertificados}></MainConteudo>
      <MainButtonBackTop />
    </div>
  );
}

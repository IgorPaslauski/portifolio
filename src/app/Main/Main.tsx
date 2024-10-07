import { MainConteudoDto } from "../models/Main/MainContedoDto";
import { MainButtonBackTop } from "./MainButtonBackTop";
import { MainConteudo } from "./MainConteudo/MainConteudo";
import { MainHeader } from "./Header/MainHeader";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import { MainConteudoSkeleton } from "./MainConteudo/MainConteudoSkeleton";
import { CertificateDto } from "../models/Main/certificate/CertificateDto";
import { MainCertificado } from "./MainCertificado/MainCertificado";
import { MainConteudoParagrafo } from "./MainConteudo/MainConteudoParagrafo";
import { MainConteudoParagrafoDto } from "../models/Main/MainConteudoParagrafoDto";

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

  const conteudoParagrafo = new MainConteudoParagrafoDto();
  conteudoParagrafo.conteudo = `Atualmente, na Abase Sistemas, atuo como desenvolvedor de sistemas
        voltados para prefeituras, com foco especial nas áreas contábil e de
        tesouraria. Minhas principais responsabilidades incluem: -
        Desenvolvimento de software utilizando C# ASP.Net Core, em conjunto com
        tecnologias como ExtJS e Sybase. - Aplicação rigorosa de padrões MVC,
        adoção dos princípios de Clean Code e utilização de metodologias ágeis
        para garantir eficiência e qualidade no desenvolvimento de software. -
        Participação ativa na definição da arquitetura de software, com o
        objetivo de criar soluções robustas e escaláveis para o setor. Meu
        compromisso é contribuir significativamente para o sucesso da equipe da
        Abase Sistemas, garantindo que os produtos atendam às necessidades das
        prefeituras de maneira eficaz e eficiente. Anteriormente, tive a
        oportunidade de integrar a equipe da Tecnicon, onde atuei por um período
        de um ano e oito meses como desenvolvedor. Durante essa experiência,
        concentrei-me nas integrações de sistemas por meio de APIs utilizando os
        protocolos SOAP e REST. Algumas das minhas realizações incluem: -
        Desenvolvimento de integrações com sistemas governamentais, tais como
        EFD Reinf, Sped ECD, Sped EFD, GIA RS e SP, DIRF, DCTF e e-CredAc. -
        Otimização de processos e aprimoramento do código, seguindo os
        princípios do Clean Code. - Aplicação eficaz da metodologia ágil do
        Design Thinking para melhorar a eficiência e a usabilidade de nossos
        sistemas. - Validando e otimizando consultas SQL de alto custo para
        melhorar o desempenho do banco de dados. Iniciei minha carreira
        profissional como freelancer, onde adquiri experiência em uma variedade
        de tarefas essenciais e onde comecei a me interessar pela programação,
        incluindo: - Manutenção de computadores - Organização de sistemas e
        cabos - Instalação e formatação de sistemas operacionais - Configuração
        de softwares - Atualização de periféricos - Substituição de componentes
        internos, como memória RAM, fonte de alimentação e processador Estou
        sempre em busca de novos desafios que me permitam aplicar minha
        experiência e habilidades em programação para resolver problemas
        complexos e inovar.`;

  const conteudoSobre = new MainConteudoDto();
  conteudoSobre.title = "Sobre";
  conteudoSobre.conteudo = (
    <>
      <MainConteudoParagrafo conteudo={conteudoParagrafo} />
    </>
  );

  return (
    <div
      className="flex w-4/5 p-4 h-screen flex-col overflow-auto"
      id="MainConteudo"
    >
      <MainHeader />
      <MainConteudo conteudo={conteudoSobre}></MainConteudo>
      <MainConteudo conteudo={conteudoCertificados}></MainConteudo>
      <MainButtonBackTop />
    </div>
  );
}

import { MainConteudoDto } from "../models/Main/MainContedoDto";
import { MainConteudoParagrafo } from "./MainConteudoParagrafo";
import { MainConteudoTitle } from "./MainConteudoTitle";

export async function MainConteudo({
  conteudo,
}: {
  conteudo: MainConteudoDto;
}) {
  return (
    <div className="w-full">
      <MainConteudoTitle title={conteudo.title} />
      <MainConteudoParagrafo conteudo={conteudo.conteudo} />
    </div>
  );
}

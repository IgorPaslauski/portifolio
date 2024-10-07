
import { MainConteudoDto } from "../../models/Main/MainContedoDto";
import { MainConteudoTitle } from "./MainConteudoTitle";

export async function MainConteudo({
  conteudo = { title: "", conteudo: null },
}: {
  conteudo?: MainConteudoDto;
}) {
  // esperar 1 segundo

  return (
    <div className="w-full my-5">
      <MainConteudoTitle title={conteudo?.title ?? ""} />
      {conteudo?.conteudo}
    </div>
  );
}

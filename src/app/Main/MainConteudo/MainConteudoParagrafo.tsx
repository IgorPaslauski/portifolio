import { MainConteudoParagrafoDto } from "../../models/Main/MainConteudoParagrafoDto";

export function MainConteudoParagrafo({
  conteudo,
}: {
  conteudo: MainConteudoParagrafoDto;
}) {
  return (
    <div className="w-full">
      <p className="text-justify">{conteudo.conteudo}</p>
    </div>
  );
}

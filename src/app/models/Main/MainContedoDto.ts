import { ReactNode } from "react";

export class MainConteudoDto {
  public title: string = "";
  // conteudo para o paragrafo, pode ser qualquer componente react
  public conteudo: ReactNode = null;
}

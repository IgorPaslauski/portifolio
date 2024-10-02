export class NavItemDto {
  public title: string = "";
  public url: string = "";
  public id: number = 0;
  public idHref: string = "";
  public subnavs: NavItemDto[] = [];
}

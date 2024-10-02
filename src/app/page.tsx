import { Main } from "./Main/Main";
import { Nav } from "./Nav/Nav";

export default function Home() {
  return (
    <>
      <div className="flex">
        <Nav />
        <Main />
      </div>
    </>
  );
}

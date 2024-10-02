import {
  DownloadIcon,
  FacebookIcon,
  Instagram,
  LinkedinIcon,
} from "lucide-react";

export function MainHeaderActions() {
  const padraoBtn =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded grow justify-between flex";
  return (
    <div className="flex flex-wrap gap-5 w-full">
      <button className={padraoBtn}>
        Download CV
        <DownloadIcon className="h-6 w-6 inline-block ml-2" />
      </button>
      <a
        href="https://www.linkedin.com/in/igor-paslauski-de-oliveira/"
        target="_blank"
        rel="noreferrer"
        className={padraoBtn}
      >
        LinkedIn
        <LinkedinIcon className="h-6 w-6 inline-block ml-2" />
      </a>
      <a
        href="https://www.instagram.com/igor_paslauski/"
        target="_blank"
        rel="noreferrer"
        className={padraoBtn}
      >
        Instagram
        <Instagram className="h-6 w-6 inline-block ml-2" />
      </a>

      <a
        href="https://www.facebook.com/igor.paslauskipedrosodeoliveira/?locale=pt_BR"
        target="_blank"
        rel="noreferrer"
        className={padraoBtn}
      >
        Facebook
        <FacebookIcon className="h-6 w-6 inline-block ml-2" />
      </a>
    </div>
  );
}

import { CertificateDto } from "@/app/models/Main/certificate/CertificateDto";
import Image from "next/image";

export async function MainCertificado({
  certificate,
}: {
  certificate: CertificateDto;
}) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <>
      <div className="flex gap-5 items-center flex-wrap">
        <div>
          <Image
            src={certificate.image}
            alt={certificate.title}
            width={50}
            height={50}
          />
        </div>
        <div>
          <h3 className="text-lg">{certificate.title}</h3>
          <p>{certificate.description}</p>
        </div>
      </div>
    </>
  );
}

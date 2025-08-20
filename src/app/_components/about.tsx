import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#fdf6ec] py-16">
      <div className="max-w-7xl px-4 mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="Foto do cachorro"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div
              className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg
            border-4 overflow-hidden border-white"
            >
              <Image
                src={about2Img}
                alt="Foto do cachorro 2"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold">Sobre</h2>

            <p>
              Aqui seu pet é tratado com carinho, respeito e toda a atenção que
              merece. Nosso compromisso vai além do atendimento veterinário:
              queremos ser parceiros na jornada de cuidados com seu melhor
              amigo, oferecendo orientação e suporte em todas as fases da vida
              do seu pet.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2006
              </li>

              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 veterinários.
              </li>

              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade.
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                href="#"
                className="bg-[#e84c3d] text-white flex items-center justify-center
         w-fit gap-2 px-4 py-2 rounded-md "
              >
                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                Contato via whatsapp
              </a>

              <a
                href="#"
                className="flex items-center justify-center w-fit gap-2 px-4
          py-2 rounded-md "
              >
                <MapPin className="w-5 h-5 text-black" />
                Endereço da loja
              </a>
            </div>
          </div>

        </div>


      </div>
    </section>
  );
}

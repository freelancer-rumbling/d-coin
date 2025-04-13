import Marque from "@/components/Marquee";
import { Anton, Passero_One } from "next/font/google";
import Image from "next/image";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { CiPill } from "react-icons/ci";
import { GiEagleHead } from "react-icons/gi";

const passero_one = Passero_One({ weight: ["400"], subsets: ["latin"] });
const anton = Anton({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${passero_one.className}`}>
      <section id="hero_section" className="w-screen bg-black">
        <div
          className="bg-cover bg-center bg-no-repeat h-[500px] md:h-[1000px] w-[500px] md:w-[1000px] mx-auto text-white flex flex-col items-center justify-center"
          style={{ backgroundImage: `url(/images/think_image.png)` }}
        >
          <div className="flex flex-col items-end">
            <div className="flex gap-2">
              <div className="p-2 rounded-full bg-[#F4901A]">
                <BsCurrencyBitcoin size={44} color="black" />
              </div>
              <div className="p-2 rounded-full bg-[#F4901A]">
                <GiEagleHead size={44} color="black" />
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="p-5 rounded-full bg-[#F4901A]">
                <BsCurrencyBitcoin className="text-[40px] md:text-[100px]" />
              </div>
              <span
                className={`text-[40px] md:text-[100px] font-black ${anton.className}`}
              >
                Rise of The Crypto
              </span>
            </div>
          </div>
          <button className="bg-[#F4901A] px-6 py-2 text-2xl rounded-full text-black mx-auto">
            CA: TBA
          </button>
        </div>
        <div className="absolute w-[110%] h-20 -translate-y-32 -rotate-6">
          <div
            className={`overflow-hidden whitespace-nowrap text-white bg-[#F4901A] ${anton.className} shadow-2xl`}
          >
            <div className="inline-block animate-marquee whitespace-nowrap text-[80px] text-black">
              {Array.from({ length: 20 }).map(
                (_, index) => "CRYPTO ZONE | CRYPTO ZONE | CRYPTO ZONE | "
              )}
            </div>
          </div>
        </div>
        <div className="absolute w-[110%] h-20 -translate-y-32 rotate-6">
          <div
            className={`overflow-hidden whitespace-nowrap text-white bg-[#F4901A] ${anton.className} shadow-2xl`}
          >
            <div className="inline-block animate-marquee whitespace-nowrap text-[80px] text-black">
              {Array.from({ length: 20 }).map(
                (_, index) => "CRYPTO ZONE | CRYPTO ZONE | CRYPTO ZONE | "
              )}
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className={`${passero_one.className} bg-cover bg-center bg-no-repeat h-[600px] w-screen mx-auto text-white flex items-center justify-center px-24 gap-20`}
        style={{
          backgroundImage: `url(/images/about_image.png)`,
        }}
      >
        <div className="space-y-4">
          <h4
            className={`text-[#F4901A] text-[40px] md:text-[90px] ${anton.className}`}
          >
            Rise of Crypto
          </h4>
          <p className="text-white text-xl">
            Crypto Zone didn't knock. It happened: loud, bold, and built for
            disruption. It's here to flip the script and leave a mark that can't
            be ignored.
          </p>
          <p className="text-white text-xl">
            It's not here to fit in. It's here to take over. Once you spot the
            zone, there's no going back.
          </p>
        </div>
        <div className="p-5 rounded-full bg-[#F4901A]">
          <BsCurrencyBitcoin className="text-[50px] md:text-[300px]" />
        </div>
        <div className="absolute w-[110%] h-20 translate-y-[300px] rotate-6">
          <div
            className={`overflow-hidden whitespace-nowrap text-white bg-[#F4901A] ${anton.className} shadow-2xl`}
          >
            <div className="inline-block animate-marquee whitespace-nowrap text-[80px] text-black">
              {Array.from({ length: 20 }).map(
                (_, index) => "CRYPTO ZONE | CRYPTO ZONE | CRYPTO ZONE | "
              )}
            </div>
          </div>
        </div>
        <div className="absolute w-[110%] h-20 translate-y-[300px] -rotate-6">
          <div
            className={`overflow-hidden whitespace-nowrap text-white bg-[#F4901A] ${anton.className} shadow-2xl`}
          >
            <div className="inline-block animate-marquee whitespace-nowrap text-[80px] text-black">
              {Array.from({ length: 20 }).map(
                (_, index) => "CRYPTO ZONE | CRYPTO ZONE | CRYPTO ZONE | "
              )}
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className={`${passero_one.className} bg-cover bg-center bg-no-repeat h-[700px] w-screen mx-auto text-white flex items-center flex-col justify-center px-24`}
        style={{
          backgroundImage: `url(/images/join_image.png)`,
        }}
      >
        <h4 className={`text-[#F4901A] text-[90px] ${anton.className} mb-24`}>
          JOIN US NOW
        </h4>
        <p>© 2025 CRYPTO ZONE</p>
        <p>Disclaimer: This is an example website for Crypto Zone</p>
      </section>
    </main>
  );
}

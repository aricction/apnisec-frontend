import Image from "next/image";
import Navbar from "./components/Navbar";
import { FeatureCard } from "./components/FeatureCard";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
      <Navbar />

      <div className="bg-black text-white overflow-hidden">
        {/* HERO SECTION */}
        <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-20 relative">
          
          <div className="absolute inset-y-0 left-0 z-0 hidden lg:block pointer-events-none">
            <div className="relative h-full w-[280px]">
              <Image
                src="/asset/p.png"
                alt="Decorative background"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            
           <div className="flex flex-col items-start justify-center gap-6 z-10">
              <h1
                style={{ fontFamily: "Baunk" }}
                className="
                  text-2xl
                  sm:text-[48px]
                  lg:text-[64px]
                  leading-tight
                "
              >
                Cybersecurity
                <br />
                That Moves
                <br />
                Faster Than
                <br />
                Threats
              </h1>

              <p
                style={{ fontFamily: "Lissen" }}
                className="max-w-xl text-gray-300 text-sm sm:text-base leading-relaxed"
              >
                Elevate your security posture with advanced security solutions
                and in-depth vulnerability assessments, aligned with the trusted
                frameworks of OWASP, NIST, SANS, CERT, and NIC.
              </p>

              <div
                style={{ fontFamily: "Lissen" }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
                  Download free report
                </button>

                <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                  Get Quote
                </button>
              </div>
            </div>

    
            <div className="relative hidden lg:block w-full aspect-[4/5]">
              <Image
                src="/asset/bg.png"
                alt="Cyber background"
                fill
                priority
                className="object-cover mt-20"
              />
            </div>
          </div>
        </section>


        <section className="py-24 px-4 sm:px-6 lg:px-20">
          <h1
            style={{ fontFamily: "Baunk" }}
            className="text-xl sm:text-[28px] lg:text-[36px] leading-tight"
          >
            Comprehensive
             <br />
             Cybersecurity Solutions
          </h1>

          <div className="mt-12">
            <FeatureCard />
          </div>
        </section>
      </div>

      <Footer/>
    </>
  );
}

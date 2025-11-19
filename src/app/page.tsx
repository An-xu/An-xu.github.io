import { Prism } from "@/components/ui/prism";
import { TiltedCard } from "@/components/ui/tilted-card";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <Prism className="absolute inset-0 z-0" />

      <div className="relative z-10 container mx-auto flex min-h-screen flex-col justify-center px-4 py-24">

        {/* Hero Section */}
        <div className="mb-24 text-center">
          <h1 className="mb-4 text-6xl font-bold tracking-tighter md:text-8xl bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
            Guoyue Xu
          </h1>
          <p className="text-xl text-white/80 md:text-2xl">
            Mechanical Engineering Ph.D. • Electrical Engineering M.S.
          </p>
          <p className="mt-2 text-lg text-white/60">
            University of Notre Dame
          </p>
        </div>

        {/* Content Section */}
        <div className="grid gap-16 md:grid-cols-12 items-start">

          {/* Left Column: Bio & Interests */}
          <div className="md:col-span-7 space-y-12">

            {/* About Me */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold border-l-4 border-blue-500 pl-4">About Me</h2>
              <div className="prose prose-invert prose-lg text-gray-300 leading-relaxed">
                <p>
                  I am an electrical and mechanical engineer with expertise in AI, autonomous lab systems, wireless communication, and molecular dynamics (MD) simulation research. My work focuses on advancing system automation, and real-time sensor data management.
                </p>
                <p>
                  I have a passion for integrating cutting-edge technologies to streamline workflows and drive innovation across disciplines, combining AI, simulation, and engineering principles. My goal is to continually push the boundaries of automation and optimization in research and engineering.
                </p>
              </div>
            </section>

            {/* Research Interests */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold border-l-4 border-green-500 pl-4">Research Interests</h2>
              <div className="grid gap-4 sm:grid-cols-2">

                {/* AI & Automation */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                  <h3 className="mb-4 font-semibold text-white text-xl">AI & Automation</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400">
                    <li>
                      <a href="/projects#automated-lab" className="hover:text-blue-400 hover:underline">
                        Automated Laboratory Systems
                      </a>
                    </li>
                    <li>
                      <a href="/projects#Bayesian" className="hover:text-blue-400 hover:underline">
                        Bayesian Optimization
                      </a>
                    </li>
                    <li>
                      <a href="/projects#brain-mri-anomaly-detection" className="hover:text-blue-400 hover:underline">
                        Anomaly Detection
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Hardware & RF */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                  <h3 className="mb-4 font-semibold text-white text-xl">Hardware & RF</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400">
                    <li>
                      <a href="/projects#radioware" className="hover:text-blue-400 hover:underline">
                        UWB Antenna
                      </a>
                    </li>
                    <li>
                      <a href="/projects#radioware" className="hover:text-blue-400 hover:underline">
                        RF Board Simulation
                      </a>
                    </li>
                    <li>
                      <a href="/projects#radioware" className="hover:text-blue-400 hover:underline">
                        Power Amplifier Design
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Materials Research */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                  <h3 className="mb-4 font-semibold text-white text-xl">Materials Research</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400">
                    <li>
                      <a href="/projects#Bayesian" className="hover:text-blue-400 hover:underline">
                        MD Simulation
                      </a>
                    </li>
                    <li>
                      <a href="/projects#Bayesian" className="hover:text-blue-400 hover:underline">
                        Lammps Simulation
                      </a>
                    </li>
                  </ul>
                </div>

              </div>
            </section>

          </div>

          {/* Right Column: Photo */}
          <div className="md:col-span-5 flex justify-center md:justify-end sticky top-24">
            <div className="h-[500px] w-[350px]">
              <TiltedCard className="h-full w-full">
                <div className="relative h-full w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="/profile.png"
                    alt="Guoyue Xu"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="font-bold text-white text-lg">Guoyue Xu</p>
                    <p className="text-sm text-white/80">Researcher</p>
                  </div>
                </div>
              </TiltedCard>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

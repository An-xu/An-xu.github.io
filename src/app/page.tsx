import { Prism } from "@/components/ui/prism";
import { TiltedCard } from "@/components/ui/tilted-card";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <Prism className="absolute inset-0 z-0" />

      <div className="relative z-10 container mx-auto flex min-h-screen flex-col justify-center px-4 py-24">

        {/* Hero Section */}
        <div className="mb-24 text-center">
          <h1 className="mb-4 text-6xl font-bold tracking-tighter md:text-8xl bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent pb-4">
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

          {/* Right Column: Photo & Contact */}
          <div className="md:col-span-5 flex flex-col items-center md:items-end space-y-8 sticky top-24">

            {/* Profile Card */}
            <div className="h-[350px] w-[350px]">
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

            {/* Contact Information */}
            <div className="w-[350px] rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
              <div className="space-y-4 text-sm text-gray-300">

                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  <a href="mailto:gxu3@nd.edu" className="hover:text-white transition-colors">gxu3@nd.edu</a>
                </div>

                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  <span>South Bend, IN USA</span>
                </div>

                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M20 22h-2" /><path d="M20 15v2h-2" /><path d="M4 19.5V15" /><path d="M20 8v-2a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12" /><path d="M8 22h2" /><path d="M18 22h2" /><path d="M12 22h2" /><path d="M12 18v4" /><path d="M4 15h2" /><path d="M4 11h2" /><path d="M4 7h2" /><path d="M8 22v-4" /><path d="M16 22v-4" /></svg>
                  <a href="https://ame.nd.edu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">University of Notre Dame</a>
                </div>

                <div className="pt-4 flex gap-4 border-t border-white/10">
                  <a href="https://scholar.google.com/citations?user=ntl9gCYAAAAJ&hl=en&authuser=1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" title="Google Scholar">
                    <svg role="img" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><title>Google Scholar</title><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" /></svg>
                  </a>
                  <a href="https://orcid.org/0000-0002-4831-0820" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors" title="ORCID">
                    <svg role="img" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><title>ORCID</title><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.326 0 4.033-4.376 4.033-6.834 0-4.76-1.57-4.997-4.033-4.997h-2.297z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/guoyue-xu-106b62105" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors" title="LinkedIn">
                    <svg role="img" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 21.227.792 22 1.771 22h20.451C23.2 22 24 21.227 24 20.451V1.729C24 .774 23.2 0 22.225 0z" /></svg>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}

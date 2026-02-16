import { Prism } from "@/components/ui/prism";

export default function Projects() {
    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
            <Prism className="absolute inset-0 z-0" />

            <div className="relative z-10 container mx-auto px-4 py-24">
                <h1 className="mb-16 text-center text-4xl font-bold md:text-6xl">
                    Projects
                </h1>

                <div className="space-y-24">

                    {/* Project 0: Automated Laboratory Systems */}
                    <section id="automated-lab" className="scroll-mt-24">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
                            <h2 className="mb-6 text-2xl font-bold text-teal-400 md:text-3xl">
                                <a href="https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/aidi.202500177" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Automated Laboratory Systems
                                </a>
                            </h2>

                            <div className="grid gap-8 md:grid-cols-2">
                                <div className="space-y-4 text-gray-300">
                                    <p>
                                        Research on self-driving laboratories and automated experimental systems. This project involves the integration of robotics, AI, and high-throughput experimentation to accelerate material discovery and process optimization.
                                    </p>
                                    <p>
                                        For more details, please visit the <a href="https://an-xu.github.io/SDL_LCST.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">project website</a>.
                                    </p>
                                </div>

                                <div className="flex flex-col items-center justify-center">
                                    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-black/50">
                                        <img
                                            src="/images/automated-lab.png"
                                            alt="Automated Laboratory System"
                                            className="w-full object-cover"
                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">Automated Laboratory System Setup</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Project 1: Thermoelectric Materials */}
                    <section id="Bayesian" className="scroll-mt-24">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
                            <h2 className="mb-6 text-2xl font-bold text-blue-400 md:text-3xl">
                                <a href="https://pubs.rsc.org/en/content/articlehtml/2024/ta/d4ta03062a" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    High-Performance Thermoelectric Materials via Extrusion Printing and Machine Learning
                                </a>
                            </h2>

                            <div className="grid gap-8 md:grid-cols-2">
                                <div className="space-y-4 text-gray-300">
                                    <p>
                                        This project focuses on leveraging extrusion printing and machine learning to revolutionize thermoelectric device fabrication. Traditional manufacturing methods are costly and restricted to simple geometries, limiting their broader application.
                                    </p>
                                    <p>
                                        By integrating high-throughput experimentation with Bayesian optimization, this work accelerates the optimization of ink formulations and printing parameters, enabling the fabrication of complex 3D thermoelectric structures with exceptional performance. The approach demonstrates a significant leap in thermoelectric materials research, achieving an ultrahigh room temperature zT of 1.3 in printed BiSbTe-based materials—the highest reported for printed thermoelectrics.
                                    </p>

                                    <div className="mt-6">
                                        <h3 className="mb-2 font-semibold text-white">Key Contributions:</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li><strong className="text-white">Integration of Machine Learning:</strong> Implemented a Gaussian process regression (GPR)-based model to predict thermoelectric power factors efficiently.</li>
                                            <li><strong className="text-white">Optimization via Bayesian Methods:</strong> Leveraged Bayesian optimization (BO) to significantly accelerate the search for high-performance printing conditions.</li>
                                            <li><strong className="text-white">Scalable and Generalizable Approach:</strong> Showcased a machine learning-guided ink-based printing strategy applicable to a wide range of functional materials.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center">
                                    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-black/50">
                                        <img
                                            src="/images/printingbayesian.gif"
                                            alt="Workflow of the machine learning-assisted extrusion printing of thermoelectric inks"
                                            className="w-full object-cover"
                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">Workflow of the machine learning-assisted extrusion printing</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Project 2: RadioWare */}
                    <section id="radioware" className="scroll-mt-24">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
                            <h2 className="mb-6 text-2xl font-bold text-green-400 md:text-3xl">
                                RadioWare: Courseware and Lab Kit for Interference-Limited Communications
                            </h2>

                            <div className="grid gap-8 md:grid-cols-2">
                                <div className="space-y-4 text-gray-300">
                                    <p>
                                        This project focuses on the development and enhancement of a software-defined radio (SDR) communication system, designed to provide students with practical experience in both commercial wireless technologies (e.g., 5G, WiFi) and military applications such as electronic warfare and sensing.
                                    </p>
                                    <p>
                                        Starting with a functional wired transmission model, participants will progressively build a wireless system that addresses key challenges such as propagation effects, interference, and noise. Students gain an enhanced understanding of wireless communication principles by tackling real-world problem-solving scenarios.
                                    </p>

                                    <div className="mt-6">
                                        <h3 className="mb-2 font-semibold text-white">Key Contributions:</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li><strong className="text-white">SDR Communication System Development:</strong> Designed and implemented baseband signal processing boards.</li>
                                            <li><strong className="text-white">Simulation and Analysis:</strong> Modeled signal flow and communication scenarios using Python.</li>
                                            <li><strong className="text-white">Measurement and Testing:</strong> Integrated Python-based control for hardware (ADALM, oscilloscopes, etc.) to validate system functionality.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center space-y-4">
                                    <div className="grid grid-cols-3 gap-4 w-full">
                                        <div className="space-y-2">
                                            <div className="aspect-square overflow-hidden rounded-lg border border-white/10">
                                                <img src="/images/RFmodule.jpg" alt="RF Modules" className="h-full w-full object-cover" />
                                            </div>
                                            <p className="text-xs text-center text-gray-500">RF Modules</p>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="aspect-square overflow-hidden rounded-lg border border-white/10">
                                                <img src="/images/Python.jpg" alt="Python Code" className="h-full w-full object-cover" />
                                            </div>
                                            <p className="text-xs text-center text-gray-500">Python Code</p>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="aspect-square overflow-hidden rounded-lg border border-white/10">
                                                <img src="/images/Measurement.jpg" alt="Measurement Equipment" className="h-full w-full object-cover" />
                                            </div>
                                            <p className="text-xs text-center text-gray-500">Measurement</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Project 3: Anomaly Detection */}
                    <section id="brain-mri-anomaly-detection" className="scroll-mt-24">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
                            <h2 className="mb-6 text-2xl font-bold text-purple-400 md:text-3xl">
                                <a href="https://an-xu.github.io/MedAD-IQA.github.io/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Enhanced Anomaly Detection in Brain MRI Using Image Quality Assessment
                                </a>
                            </h2>

                            <div className="grid gap-8 md:grid-cols-2">
                                <div className="space-y-4 text-gray-300">
                                    <p>
                                        This project focuses on rethinking reconstruction-based anomaly detection in brain MRI from the perspective of image quality assessment. By introducing a novel fusion quality loss function combining Structural Similarity Index Measure (SSIM) loss and ℓ1 loss, the project significantly enhances the reconstruction quality of abnormal brain regions.
                                    </p>
                                    <p>
                                        Tested on the BraTS21 (T2, FLAIR) and MSULB datasets, the method achieves state-of-the-art performance, with over 10% improvement in Dice coefficient and Area Under the Precision-Recall Curve (AUPRC).
                                    </p>
                                </div>

                                <div className="flex flex-col items-center justify-center">
                                    <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-black/50">
                                        <img
                                            src="/images/MedADmodel.png"
                                            alt="Model Architecture of MedAD-IQA"
                                            className="w-full object-cover"
                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">Model Architecture of MedAD-IQA</p>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    );
}

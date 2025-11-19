import { Prism } from "@/components/ui/prism";

export default function CV() {
    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
            <Prism className="absolute inset-0 z-0" />

            <div className="relative z-10 container mx-auto max-w-4xl px-4 py-24">
                <h1 className="mb-8 text-center text-4xl font-bold md:text-6xl">
                    Curriculum Vitae
                </h1>

                <div className="mb-12 flex justify-center">
                    <div className="group relative">
                        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 blur transition duration-200 group-hover:opacity-100" />
                        <a
                            href="/files/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative flex items-center gap-3 rounded-full bg-black px-8 py-4 text-base font-semibold text-white transition-all hover:bg-gray-900"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-blue-400"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            <span>Download CV</span>
                        </a>
                    </div>
                </div>

                <div className="space-y-12 rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-sm">

                    {/* Professional Summary */}
                    <section>
                        <h2 className="mb-6 text-2xl font-bold text-blue-400 border-b border-white/10 pb-2">Professional Summary</h2>
                        <ul className="list-disc pl-5 space-y-3 text-gray-300">
                            <li>
                                <strong className="text-white">PhD candidate in Mechanical Engineering</strong> with expertise in <strong className="text-white">AI for Science (AI4S)</strong>, focusing on LLM multi-agent systems, autonomous scientific discovery, and Bayesian optimization.
                            </li>
                            <li>
                                <strong className="text-white">Proven impact:</strong> Developed self-driving laboratory pipelines that improved polymer discovery efficiency by <strong className="text-white">5×</strong> and engineered Bayesian optimization frameworks reducing experiments by <strong className="text-white">80%</strong>.
                            </li>
                            <li>
                                <strong className="text-white">Expertise:</strong> LLM multi-agent orchestration, scientific reasoning agents, Bayesian optimization, computer vision, and probabilistic models.
                            </li>
                        </ul>
                    </section>

                    {/* Education */}
                    <section>
                        <h2 className="mb-6 text-2xl font-bold text-blue-400 border-b border-white/10 pb-2">Education</h2>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <h3 className="text-xl font-bold text-white">PhD in Mechanical Engineering</h3>
                                    <span className="text-gray-400">2023 -- Present</span>
                                </div>
                                <p className="text-gray-400 italic">University of Notre Dame, Notre Dame, IN</p>
                                <p className="text-gray-300 mt-1"><strong className="text-white">Focus:</strong> Machine Learning for Materials Discovery, Bayesian Optimization, Neural Networks</p>
                            </div>

                            <div>
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <h3 className="text-xl font-bold text-white">MS in Electrical Engineering</h3>
                                    <span className="text-gray-400">2021 -- 2023</span>
                                </div>
                                <p className="text-gray-400 italic">University of Notre Dame, Notre Dame, IN</p>
                            </div>

                            <div>
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <h3 className="text-xl font-bold text-white">BSc in Communications Engineering</h3>
                                    <span className="text-gray-400">2016 -- 2020</span>
                                </div>
                                <p className="text-gray-400 italic">National Chung Cheng University, Taiwan</p>
                                <p className="text-gray-300 mt-1"><strong className="text-white">GPA:</strong> 3.83/4.3 (Top 3)</p>
                                <p className="text-gray-300"><strong className="text-white">Honors:</strong> President Scholarship (Top 2%), Director Scholarship (Top 5%)</p>
                            </div>
                        </div>
                    </section>

                    {/* Research & AI4Science Projects */}
                    <section>
                        <h2 className="mb-6 text-2xl font-bold text-blue-400 border-b border-white/10 pb-2">Research & AI4Science Projects</h2>
                        <div className="space-y-8">

                            <div>
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <h3 className="text-xl font-bold text-white">LLM Multi-Agent System for Polymer Thermal Conductivity (TC-CoScientist)</h3>
                                    <span className="text-gray-400">2025 -- Present</span>
                                </div>
                                <p className="text-gray-400 italic mb-2">University of Notre Dame</p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                    <li>Designed an LLM-powered orchestration agent to autonomously manage polymer thermal conductivity discovery.</li>
                                    <li>Integrated molecular dynamics simulations, graph neural networks, and interpretable reasoning into a closed-loop self-driving discovery workflow.</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <h3 className="text-xl font-bold text-white">Vision Language Model for Laboratory Experiment Understanding</h3>
                                    <span className="text-gray-400">2025 -- Present</span>
                                </div>
                                <p className="text-gray-400 italic mb-2">University of Notre Dame</p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                    <li>Developed a protocol-guided VLA model to align experimental SOPs with lab figures.</li>
                                    <li>Contributed to emerging AI4Science efforts in scientific experiment understanding.</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <h3 className="text-xl font-bold text-white">Autonomous Materials Discovery System (Self-driving labs)</h3>
                                    <span className="text-gray-400">2023 -- Present</span>
                                </div>
                                <p className="text-gray-400 italic mb-2">University of Notre Dame</p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                    <li>Designed and built a low-cost, Arduino-based self-driving laboratory for autonomous polymer and thermo-responsive optimization.</li>
                                    <li>Integrated robotic fluid handling PID-controlled thermoelectric heating/cooling and in-situ optical sensing.</li>
                                    <li>Implemented a closed-loop Bayesian optimization pipeline using Gaussian Process Regression (GPR) to autonomously explore multi-component chemical spaces.</li>
                                    <li>Achieved reproducible, self-correcting optimization of thermoresponsive polymer LCST while reducing experimental requirements by <strong className="text-white">80%</strong>.</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <h3 className="text-xl font-bold text-white">Medical Anomaly Detection in Brain MRI</h3>
                                    <span className="text-gray-400">2024</span>
                                </div>
                                <p className="text-gray-400 italic mb-2">University of Notre Dame</p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                    <li>Developed a novel image quality assessment (IQA) framework for medical anomaly detection in brain MRI scans, reframing anomaly detection as an image quality problem to improve diagnostic accuracy.</li>
                                    <li>Implemented deep learning models combining convolutional neural networks with quality assessment metrics, achieving state-of-the-art performance on multiple brain MRI datasets.</li>
                                    <li>Built comprehensive evaluation pipeline with multiple benchmark datasets, demonstrating superior performance over traditional anomaly detection methods in medical imaging.</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <h3 className="text-xl font-bold text-white">GAN-based Text Generation</h3>
                                    <span className="text-gray-400">2024</span>
                                </div>
                                <p className="text-gray-400 italic mb-2">University of Notre Dame</p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                    <li>Designed a four-layer generative adversarial network (GAN) architecture for text generation and stabilised training using LeakyReLU activations and gradient penalty regularization.</li>
                                    <li>Implemented beam search and temperature scaling decoders for GPT-2 embeddings, increasing text quality and diversity as measured by BLEU scores and t-SNE visualization.</li>
                                    <li>Built a comprehensive evaluation framework incorporating BLEU scores, t-SNE plots and qualitative assessments to benchmark against baseline models.</li>
                                </ul>
                            </div>

                        </div>
                    </section>

                    {/* Research & Engineering Experience */}
                    <section>
                        <h2 className="mb-6 text-2xl font-bold text-blue-400 border-b border-white/10 pb-2">Research & Engineering Experience</h2>
                        <div className="space-y-8">

                            <div>
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <h3 className="text-xl font-bold text-white">Signal Processing & SDR Systems Engineer</h3>
                                    <span className="text-gray-400">2021 -- 2022</span>
                                </div>
                                <p className="text-gray-400 italic mb-2">University of Notre Dame, Notre Dame, IN</p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                    <li>Designed and implemented a <strong className="text-white">software-defined radio (SDR) communication system</strong> for hands-on instruction and research.</li>
                                    <li>Built a progressive learning and prototyping framework that transitioned from wired transmission models to full wireless implementations, addressing propagation, interference, and noise challenges in congested RF environments.</li>
                                    <li>Developed an automated Python/C-based control and data acquisition pipeline for real-time signal testing and debugging, reducing manual workload by <strong className="text-white">70%</strong> and improving system throughput.</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <h3 className="text-xl font-bold text-white">Project Lead & RF Engineer</h3>
                                    <span className="text-gray-400">2019 -- 2020</span>
                                </div>
                                <p className="text-gray-400 italic mb-2">National Chung Cheng University, Taiwan</p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                    <li>Led a team to <strong className="text-white">1st place</strong> in the 2019 IEEE MTT-S Student Design Competition by developing a wearable microwave energy harvester.</li>
                                    <li>Designed and simulated a high-performance patch antenna with a <strong className="text-white">−24.4 dB</strong> return loss at 2.45 GHz and <strong className="text-white">5.18 dB</strong> maximum gain using HFSS.</li>
                                    <li>Engineered a 50 Ω matched rectifier circuit with Schottky diodes, achieving high RF-to-DC conversion efficiency and validating performance through VNA analysis.</li>
                                </ul>
                            </div>

                        </div>
                    </section>

                    {/* Awards & Recognition */}
                    <section>
                        <h2 className="mb-6 text-2xl font-bold text-blue-400 border-b border-white/10 pb-2">Awards & Recognition</h2>
                        <ul className="space-y-4 text-gray-300">
                            <li>
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <strong className="text-white">President Scholarship (Top 2%) & Director Scholarship (Top 5%, 2×)</strong>
                                    <span className="text-gray-400">2019 -- 2021</span>
                                </div>
                                <p className="text-sm text-gray-500">National Chung Cheng University</p>
                            </li>
                            <li>
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <strong className="text-white">Professor Chun-Hsiung Chen Scholarship</strong>
                                    <span className="text-gray-400">2020</span>
                                </div>
                                <p className="text-sm text-gray-500">Academic Excellence Recognition</p>
                            </li>
                            <li>
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <strong className="text-white">1st Place Winner</strong>
                                    <span className="text-gray-400">2019</span>
                                </div>
                                <p className="text-sm text-gray-500">IEEE Microwave Theory and Techniques Society Student Design Competition</p>
                            </li>
                        </ul>
                    </section>

                    {/* Technical Skills */}
                    <section>
                        <h2 className="mb-6 text-2xl font-bold text-blue-400 border-b border-white/10 pb-2">Technical Skills</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <h3 className="mb-2 font-bold text-white">Programming</h3>
                                <p className="text-gray-300">Python: PyTorch, TensorFlow, Scikit-learn, NumPy, Pandas, Matplotlib, Jupyter</p>
                            </div>
                            <div>
                                <h3 className="mb-2 font-bold text-white">Machine Learning</h3>
                                <p className="text-gray-300">Deep Learning: CNNs, GANs, Transformers, Bayesian Optimization, Gaussian Processes, Active Learning</p>
                            </div>
                            <div>
                                <h3 className="mb-2 font-bold text-white">AI4Science</h3>
                                <p className="text-gray-300">LLM & Multi-Agent Systems: Scientific reasoning agents, autonomous orchestration, tool-augmented LLMs</p>
                            </div>
                            <div>
                                <h3 className="mb-2 font-bold text-white">Electrical Engineering</h3>
                                <p className="text-gray-300">RF & Microwave: Antenna design (HFSS, CST), RF energy harvesting, impedance matching, rectifier circuits, VNA characterization, Advanced Design System (ADS)</p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    );
}

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

                    {/* Summary */}
                    <section>
                        <h2 className="mb-6 text-2xl font-bold text-blue-400 border-b border-white/10 pb-2">Summary</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Machine Learning Engineer specializing in building production-grade autonomous systems and end-to-end ML pipelines.
                            Expertise in <strong className="text-white">LLM multi-agent orchestration</strong>, <strong className="text-white">closed-loop Bayesian optimization</strong>, and <strong className="text-white">high-dimensional neural architectures</strong> (GNNs, Transformers).
                            Proven track record in shipping full-stack AI applications, including a polymer discovery platform serving <strong className="text-white">1M+ candidates</strong> and hardware-in-the-loop (HIL) systems that reduced operational workloads by <strong className="text-white">80%</strong>.
                        </p>
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
                                <p className="text-gray-300 mt-1"><strong className="text-white">Focus:</strong> Machine Learning, Bayesian Optimization, Autonomous Systems, Neural Networks</p>
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
                            </div>
                        </div>
                    </section>

                    {/* Technical Skills */}
                    <section>
                        <h2 className="mb-6 text-2xl font-bold text-blue-400 border-b border-white/10 pb-2">Technical Skills</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <h3 className="mb-2 font-bold text-white">Core ML</h3>
                                <p className="text-gray-300">PyTorch, TensorFlow, Scikit-learn, Hugging Face, Gaussian Processes, Active Learning</p>
                            </div>
                            <div>
                                <h3 className="mb-2 font-bold text-white">System &amp; Infra</h3>
                                <p className="text-gray-300">MLOps: Docker, Git, Linux, HPC (SLURM), Multi-GPU Distributed Training, CI/CD basics</p>
                            </div>
                            <div>
                                <h3 className="mb-2 font-bold text-white">Data &amp; Dev</h3>
                                <p className="text-gray-300">Python (Expert), SQL, FastAPI, Streamlit, NumPy, Pandas, Matplotlib, C, Bash</p>
                            </div>
                            <div>
                                <h3 className="mb-2 font-bold text-white">Architectures</h3>
                                <p className="text-gray-300">GNNs (GINE/D-MPNN), Transformers, CNNs, GANs, Multi-Agent Systems, RAG Pipelines</p>
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="mb-2 font-bold text-white">Robotics / IoT</h3>
                                <p className="text-gray-300">Hardware-in-the-loop control, PID systems, Arduino, Serial Communication, Sensor Fusion</p>
                            </div>
                        </div>
                    </section>

                    {/* Selected Projects */}
                    <section>
                        <h2 className="mb-6 text-2xl font-bold text-blue-400 border-b border-white/10 pb-2">Selected Projects</h2>
                        <div className="space-y-8">

                            <div>
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <h3 className="text-xl font-bold text-white">Production Polymer Discovery Platform &mdash; Full-Stack ML</h3>
                                    <span className="text-gray-400">2025 -- Present</span>
                                </div>
                                <p className="text-gray-400 italic mb-2">University of Notre Dame</p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                    <li><strong className="text-white">System Architecture:</strong> Architected and deployed a full-stack Streamlit application featuring <strong className="text-white">LLM-augmented natural language interface</strong> for complex chemical database queries.</li>
                                    <li><strong className="text-white">Model Engineering:</strong> Engineered a <strong className="text-white">GINE Graph Neural Network ensemble</strong> for multi-task property prediction; optimized inference latency to handle batch processing of 1M+ virtual molecules.</li>
                                    <li><strong className="text-white">Optimization Pipeline:</strong> Implemented a multi-objective Pareto optimization engine using <strong className="text-white">Tanimoto diversity constraints</strong> and synthesizability scoring, improving candidate selection quality by 40%.</li>
                                    <li><strong className="text-white">Generative Modeling:</strong> Deployed an RNN-based SMILES generator with custom <strong className="text-white">novelty filtering logic</strong> against 6+ reference datasets to automate de novo material discovery.</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <h3 className="text-xl font-bold text-white">Autonomous HIL Laboratory (Self-Driving Lab)</h3>
                                    <span className="text-gray-400">2023 -- Present</span>
                                </div>
                                <p className="text-gray-400 italic mb-2">University of Notre Dame</p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                    <li><strong className="text-white">Closed-Loop System:</strong> Designed an end-to-end <strong className="text-white">Hardware-in-the-loop (HIL)</strong> system integrating robotic fluid handling and PID thermal control with a Bayesian optimization core.</li>
                                    <li><strong className="text-white">Algorithmic Impact:</strong> Developed a <strong className="text-white">Gaussian Process Regression (GPR)</strong> pipeline that autonomously explored high-dimensional chemical spaces, achieving an <strong className="text-white">80% reduction</strong> in experimental R&amp;D costs.</li>
                                    <li><strong className="text-white">Robustness:</strong> Engineered self-correcting control logic and automated data acquisition pipelines (Serial/Python), ensuring reproducible results with zero human intervention.</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <h3 className="text-xl font-bold text-white">Vision-Language Model (VLM) for Lab Automation</h3>
                                    <span className="text-gray-400">2025 -- Present</span>
                                </div>
                                <p className="text-gray-400 italic mb-2">University of Notre Dame</p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                    <li><strong className="text-white">Visual Grounding:</strong> Fine-tuning a <strong className="text-white">Vision-Language-Action (VLA) model</strong> to map unstructured experimental SOPs to real-time laboratory visual feeds.</li>
                                    <li><strong className="text-white">Pipeline Dev:</strong> Building high-throughput data curation and evaluation pipelines for scientific visual comprehension, targeting SOTA performance in lab imagery grounding.</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <h3 className="text-xl font-bold text-white">Medical Anomaly Detection Pipeline</h3>
                                    <span className="text-gray-400">2024</span>
                                </div>
                                <p className="text-gray-400 italic mb-2">University of Notre Dame</p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                    <li><strong className="text-white">Framework Design:</strong> Reframed MRI anomaly detection as an Image Quality Assessment (IQA) problem, implementing a CNN-based feature extraction pipeline that outperformed traditional baselines by <strong className="text-white">15%</strong>.</li>
                                    <li><strong className="text-white">Benchmarking:</strong> Established a rigorous evaluation framework with standardized metrics across multiple brain MRI datasets to ensure model generalizability.</li>
                                </ul>
                            </div>

                        </div>
                    </section>

                    {/* Engineering Experience */}
                    <section>
                        <h2 className="mb-6 text-2xl font-bold text-blue-400 border-b border-white/10 pb-2">Engineering Experience</h2>
                        <div className="space-y-8">

                            <div>
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <h3 className="text-xl font-bold text-white">Lead Systems Engineer &mdash; Signal Processing &amp; SDR</h3>
                                    <span className="text-gray-400">2021 -- 2022</span>
                                </div>
                                <p className="text-gray-400 italic mb-2">University of Notre Dame, Notre Dame, IN</p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                    <li><strong className="text-white">High-Throughput Data Pipeline:</strong> Developed an automated <strong className="text-white">Python/C++ data acquisition and control pipeline</strong> for real-time Software-Defined Radio (SDR), reducing manual testing latency by <strong className="text-white">70%</strong>.</li>
                                    <li><strong className="text-white">Hardware-Software Integration:</strong> Engineered a modular communication framework utilizing <strong className="text-white">digital signal processing (DSP)</strong> algorithms to mitigate interference and noise in high-congested RF environments.</li>
                                    <li><strong className="text-white">Full-Stack Prototyping:</strong> Architected the transition from wired simulation models to wireless hardware implementations, ensuring system-level robustness and data integrity.</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <h3 className="text-xl font-bold text-white">Project Lead &mdash; RF Systems &amp; Hardware Optimization</h3>
                                    <span className="text-gray-400">2019 -- 2020</span>
                                </div>
                                <p className="text-gray-400 italic mb-2">National Chung Cheng University, Taiwan</p>
                                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                    <li><strong className="text-white">Award-Winning System Design:</strong> Led a multidisciplinary team to <strong className="text-white">1st place</strong> in the IEEE MTT-S International Competition by developing a high-efficiency wearable energy harvester.</li>
                                    <li><strong className="text-white">Optimization &amp; Simulation:</strong> Leveraged high-fidelity simulation tools (HFSS/ADS) to optimize antenna parameters, achieving a <strong className="text-white">&minus;24.4 dB return loss</strong> and 5.18 dB gain at 2.45 GHz.</li>
                                    <li><strong className="text-white">Analytical Validation:</strong> Conducted rigorous hardware validation via VNA analysis, bridging the gap between theoretical modeling and physical system performance.</li>
                                </ul>
                            </div>

                        </div>
                    </section>

                    {/* Publications */}
                    <section>
                        <h2 className="mb-6 text-2xl font-bold text-blue-400 border-b border-white/10 pb-2">Publications</h2>
                        <ul className="space-y-5 text-gray-300">
                            <li>
                                <p><strong className="text-white">Xu, G.*</strong>, Zhang, R., &amp; Luo, T. &ldquo;Self-Driving Laboratory Optimizes the Lower Critical Solution Temperature of Thermoresponsive Polymers.&rdquo; <em className="text-gray-400">Advanced Intelligent Discovery</em>, e202500177, 2025.</p>
                            </li>
                            <li>
                                <p>Zhang, R.*, Xu, J., Zhang, H., <strong className="text-white">Xu, G.</strong>, &amp; Luo, T. &ldquo;Active learning-guided exploration of thermally conductive polymers under strain.&rdquo; <em className="text-gray-400">Digital Discovery</em>, 4(3), 812–823, 2025.</p>
                            </li>
                            <li>
                                <p>Pan, Z.*, Xia, J., Yan, Z., <strong className="text-white">Xu, G.</strong>, et al. &ldquo;Rethinking Medical Anomaly Detection in Brain MRI.&rdquo; <em className="text-gray-400">arXiv</em> 2408.08228, 2024.</p>
                            </li>
                            <li>
                                <p>Song, K.*, <strong className="text-white">Xu, G.*</strong>, et al. &ldquo;ML-Assisted 3D Printing of Thermoelectric Materials.&rdquo; <em className="text-gray-400">J. Mater. Chem. A</em>, 2024.</p>
                            </li>
                            <li>
                                <p><strong className="text-white">Xu, G.*</strong>, et al. &ldquo;Harvesting Electromagnetic Energy in Air.&rdquo; <em className="text-gray-400">IEEE Microwave Magazine</em>, 21(6), 88–95, 2020.</p>
                            </li>
                        </ul>
                    </section>

                    {/* Awards */}
                    <section>
                        <h2 className="mb-6 text-2xl font-bold text-blue-400 border-b border-white/10 pb-2">Awards &amp; Recognition</h2>
                        <ul className="space-y-4 text-gray-300">
                            <li>
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <strong className="text-white">1st Place &mdash; IEEE MTT-S Student Design Competition</strong>
                                    <span className="text-gray-400">2019</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <strong className="text-white">President Scholarship (Top 2%) &amp; Director Scholarship (Top 5%, 2&times;)</strong>
                                    <span className="text-gray-400">2019 -- 2021</span>
                                </div>
                                <p className="text-sm text-gray-500">National Chung Cheng University</p>
                            </li>
                            <li>
                                <div className="flex justify-between items-baseline flex-wrap">
                                    <strong className="text-white">Prof. Chun-Hsiung Chen Scholarship</strong>
                                    <span className="text-gray-400">2020</span>
                                </div>
                                <p className="text-sm text-gray-500">Academic Excellence</p>
                            </li>
                        </ul>
                    </section>

                </div>
            </div>
        </main>
    );
}

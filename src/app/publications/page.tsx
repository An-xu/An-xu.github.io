import { TiltedCard } from "@/components/ui/tilted-card";
import { Prism } from "@/components/ui/prism";

const publications = [
    {
        title: "Self-Driving Laboratory Optimizes the Lower Critical Solution Temperature of Thermoresponsive Polymers",
        date: "2025-09-15",
        venue: "arXiv",
        description: "Self-Driving Laboratory Optimizes the Lower Critical Solution Temperature of Thermoresponsive Polymers.",
        link: "https://arxiv.org/abs/2509.05351",
    },
    {
        title: "Active learning-guided exploration of thermally conductive polymers under strain",
        date: "2025-08-21",
        venue: "Digital Discovery",
        description: "Active learning-guided exploration of thermally conductive polymers under strain.",
        link: "https://doi.org/10.1039/D4DD00267A",
    },
    {
        title: "Machine learning-assisted 3D printing of thermoelectric materials of ultrahigh performances at room temperature",
        date: "2024-07-12",
        venue: "Journal of Materials Chemistry A",
        description: "Machine learning-assisted 3D printing of thermoelectric materials.",
        link: "https://pubs.rsc.org/en/content/articlehtml/2024/ta/d4ta03062a",
    },
    {
        title: "Rethinking Medical Anomaly Detection in Brain MRI: An Image Quality Assessment Perspective",
        date: "2024-08-15",
        venue: "arXiv",
        description: "Rethinking Medical Anomaly Detection in Brain MRI.",
        link: "https://arxiv.org/abs/2408.08228",
    },
    {
        title: "Harvesting Electromagnetic Energy in Air: A Wireless Energy Harvester at 2.45 GHz Using Inexpensive Materials",
        date: "2020-06-20",
        venue: "IEEE Microwave Magazine",
        description: "Wireless Energy Harvester at 2.45 GHz Using Inexpensive Materials.",
        link: "https://ieeexplore.ieee.org/abstract/document/9084330",
    },
];

export default function Publications() {
    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
            <Prism className="absolute inset-0 z-0" />

            <div className="relative z-10 container mx-auto px-4 py-24">
                <h1 className="mb-12 text-center text-4xl font-bold md:text-6xl">
                    Publications
                </h1>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {publications.map((pub, index) => (
                        <div key={index} className="h-[450px]">
                            <TiltedCard className="h-full">
                                <div className="flex h-full flex-col justify-between p-8 text-black">
                                    <div>
                                        <p className="mb-2 text-sm font-semibold text-blue-600">
                                            {pub.date} • {pub.venue}
                                        </p>
                                        <h2 className="mb-4 text-xl font-bold line-clamp-4">{pub.title}</h2>
                                        <p className="text-gray-600 line-clamp-3">{pub.description}</p>
                                    </div>
                                    <a
                                        href={pub.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-block rounded-full bg-black px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
                                    >
                                        Read Paper
                                    </a>
                                </div>
                            </TiltedCard>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
